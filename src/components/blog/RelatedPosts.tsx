import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  image_url: string | null;
  author: string;
  published_at: string | null;
}

interface RelatedPostsProps {
  postIds: string[];
  currentPostId?: string;
}

const RelatedPosts = ({ postIds, currentPostId }: RelatedPostsProps) => {
  const [posts, setPosts] = useState<RelatedPost[]>([]);

  useEffect(() => {
    if (!postIds || postIds.length === 0) return;
    const ids = postIds.filter((id) => id !== currentPostId);
    if (ids.length === 0) return;

    supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, image_url, author, published_at")
      .in("id", ids)
      .eq("is_published", true)
      .then(({ data }) => {
        if (data) setPosts(data);
      });
  }, [postIds, currentPostId]);

  if (posts.length === 0) return null;

  return (
    <div className="mt-16 pt-8 border-t border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-card">
              {post.image_url && (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {post.excerpt && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                )}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {post.author}
                  </span>
                  {post.published_at && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {new Date(post.published_at).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
