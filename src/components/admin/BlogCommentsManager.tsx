import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2, CheckCircle, XCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BlogComment {
  id: string;
  blog_post_id: string;
  name: string;
  email: string;
  website: string | null;
  comment: string;
  is_approved: boolean;
  created_at: string;
  blog_posts?: {
    title: string;
    slug: string;
  };
}

const BlogCommentsManager = () => {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('blog_comments')
        .select(`
          *,
          blog_posts (
            title,
            slug
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blog comments",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateApprovalStatus = async (id: string, isApproved: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_comments')
        .update({ is_approved: isApproved })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Comment ${isApproved ? 'approved' : 'rejected'}`,
      });

      fetchComments();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update comment status",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async () => {
    if (!selectedCommentId) return;

    try {
      const { error } = await supabase
        .from('blog_comments')
        .delete()
        .eq('id', selectedCommentId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Comment deleted successfully",
      });

      fetchComments();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete comment",
        variant: "destructive",
      });
    } finally {
      setDeleteDialogOpen(false);
      setSelectedCommentId(null);
    }
  };

  const openDeleteDialog = (id: string) => {
    setSelectedCommentId(id);
    setDeleteDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Blog Comments</h2>
          <p className="text-muted-foreground">
            Manage and moderate blog comments
          </p>
        </div>
        <Button onClick={fetchComments} variant="outline">
          Refresh
        </Button>
      </div>

      <div className="grid gap-4">
        {comments.length === 0 ? (
          <Card>
            <CardContent className="flex items-center justify-center p-8">
              <p className="text-muted-foreground">No comments found</p>
            </CardContent>
          </Card>
        ) : (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{comment.name}</CardTitle>
                    <CardDescription>
                      <div className="space-y-1">
                        <p>Email: {comment.email}</p>
                        {comment.website && <p>Website: {comment.website}</p>}
                        {comment.blog_posts && (
                          <p>Post: {comment.blog_posts.title}</p>
                        )}
                        <p>
                          Submitted: {new Date(comment.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </CardDescription>
                  </div>
                  <Badge
                    variant={comment.is_approved ? "default" : "secondary"}
                  >
                    {comment.is_approved ? "Approved" : "Pending"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-md">
                    <p className="text-sm whitespace-pre-wrap">{comment.comment}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    {!comment.is_approved ? (
                      <Button
                        size="sm"
                        onClick={() => updateApprovalStatus(comment.id, true)}
                        className="gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Approve
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateApprovalStatus(comment.id, false)}
                        className="gap-2"
                      >
                        <XCircle className="w-4 h-4" />
                        Unapprove
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => openDeleteDialog(comment.id)}
                      className="gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              comment.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BlogCommentsManager;
