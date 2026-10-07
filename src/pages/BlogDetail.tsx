import { useParams, useNavigate, Link } from "react-router-dom";
import supabaseLogo from "@/assets/supabase-logo-wordmark.svg";
import { Skeleton } from "@/components/ui/skeleton";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, User, Clock, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { sanitizeWithNewTabLinks } from "@/lib/sanitizeHtml";
import BlogShortcodeRenderer from "@/components/blog/BlogShortcodeRenderer";
import BlogSeoHead from "@/components/blog/BlogSeoHead";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import SocialShareButtons from "@/components/blog/SocialShareButtons";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [previousPost, setPreviousPost] = useState<{ title: string; slug: string } | null>(null);
  const [nextPost, setNextPost] = useState<{ title: string; slug: string } | null>(null);
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
    saveInfo: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const commentSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
    email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
    website: z.string().trim().max(255, "Website URL must be less than 255 characters").optional(),
    comment: z.string().trim().min(1, "Comment is required").max(2000, "Comment must be less than 2000 characters")
  });

  useEffect(() => {
    setIsLoading(true);
    setPreviousPost(null);
    setNextPost(null);
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    if (!slug) return;
    
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (data) {
        setPost(data);
        // Fetch prev/next in parallel after we have published_at
        fetchPrevNext(data.published_at);
      } else {
        setPost(null);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setPost(null);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPrevNext = async (publishedAt: string | null) => {
    if (!publishedAt) return;

    const [prevResult, nextResult] = await Promise.all([
      supabase
        .from('blog_posts')
        .select('title, slug')
        .eq('is_published', true)
        .lt('published_at', publishedAt)
        .order('published_at', { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from('blog_posts')
        .select('title, slug')
        .eq('is_published', true)
        .gt('published_at', publishedAt)
        .order('published_at', { ascending: true })
        .limit(1)
        .maybeSingle(),
    ]);

    if (prevResult.data) setPreviousPost(prevResult.data);
    if (nextResult.data) setNextPost(nextResult.data);
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      const validatedData = commentSchema.parse({
        name: commentForm.name,
        email: commentForm.email,
        website: commentForm.website,
        comment: commentForm.comment
      });

      setIsSubmitting(true);

      const { error } = await supabase
        .from('blog_comments')
        .insert({
          blog_post_id: post.id,
          name: validatedData.name,
          email: validatedData.email,
          website: validatedData.website || null,
          comment: validatedData.comment,
        });

      if (error) throw error;

      toast({
        title: "Comment Submitted",
        description: "Your comment has been submitted and is pending approval.",
      });

      // Reset form
      setCommentForm({
        name: "",
        email: "",
        website: "",
        comment: "",
        saveInfo: false
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit comment. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-3/4" />
            <div className="flex gap-4">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-32" />
            </div>
            <Skeleton className="aspect-video w-full rounded-xl" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </div>;
  }

  if (!post) {
    return <div className="min-h-screen">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">Blog Post Not Found</h1>
          <p className="text-brand-secondary mb-8">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>;
  }
  const postUrl = `${window.location.origin}/blog/${slug}`;

  return <div className="min-h-screen">
      <ReadingProgressBar />

      {/* SEO Head */}
      {post && (
        <BlogSeoHead
          title={post.title}
          description={post.excerpt || post.meta_description}
          slug={post.slug || slug || ""}
          imageUrl={post.image_url || post.image}
          author={post.author}
          publishedAt={post.published_at}
          updatedAt={post.updated_at}
          tags={post.tags}
          category={post.category}
          ogTitle={post.og_title}
          ogDescription={post.og_description}
          ogImageUrl={post.og_image_url}
          metaTitle={post.meta_title}
          metaDescription={post.meta_description}
          canonicalUrl={post.canonical_url}
          noindex={post.noindex}
          nofollow={post.nofollow}
          schemaType={post.schema_type}
          authorName={post.author_name}
          authorUrl={post.author_url}
          twitterCardType={post.twitter_card_type}
        />
      )}
      
      {/* Article Header */}
      <article className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1">
                      <Home className="w-3.5 h-3.5" /> Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/blog">Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {post.category && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to={`/blog?category=${encodeURIComponent(post.category.split(',')[0].trim())}`}>
                          {post.category.split(',')[0].trim()}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1 max-w-[200px]">{post.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Button variant="ghost" onClick={() => navigate("/blog")} className="mb-8 bg-trust-blue/10 text-trust-blue hover:bg-gradient-to-r hover:from-trust-blue hover:to-[#2a49cc] hover:text-white transition-all duration-300 text-base group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:text-white" />
              Back to Blog
            </Button>

            <div className="mb-8">
              {post.category && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.category.split(',').map((cat, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-trust-blue/10 text-trust-blue hover:bg-gradient-to-r hover:from-trust-blue hover:to-[#2a49cc] hover:text-white transition-all duration-300 cursor-pointer">
                      {cat.trim()}
                    </Badge>
                  ))}
                </div>
              )}
              
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary leading-tight mb-6">
                {post.title.split('Supabase').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <img src={supabaseLogo} alt="Supabase" className="h-10 lg:h-12 inline-block align-middle mx-1" />
                    )}
                  </span>
                ))}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-slate-secondary mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-trust-blue" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-trust-blue" />
                  <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : post.date}</span>
                </div>
                {(post.readTime || post.read_time) && (
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-trust-blue" />
                    <span>{post.readTime || post.read_time}</span>
                  </div>
                )}
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag: string, index: number) => <Badge key={index} variant="outline" className="text-sm">
                      {tag}
                    </Badge>)}
                </div>
              )}

              {/* Social Share */}
              <div className="mb-8">
                <SocialShareButtons url={postUrl} title={post.title} />
              </div>
            </div>

            {/* Featured Image */}
            {(post.image_url || post.image) && <div className="mb-12">
                <img src={post.image_url || post.image} alt={post.title} className="w-full h-full object-cover rounded-xl shadow-2xl" />
              </div>}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-brand-primary prose-p:text-slate-secondary prose-li:text-slate-secondary prose-strong:text-brand-primary prose-a:text-trust-blue hover:prose-a:text-trust-blue/80 prose-h2:text-2xl prose-h3:text-xl">
              {(() => {
                try {
                  const contentData = JSON.parse(post.content);
                  if (contentData.sections && Array.isArray(contentData.sections)) {
                    // New format with sections and items
                    return contentData.sections.map((section: any, sectionIndex: number) => {
                      return (
                        <div key={section.id || sectionIndex} className="mb-12">
                          {section.items && Array.isArray(section.items) ? (
                            // Render items based on contentOrder
                            section.items.map((item: any, itemIndex: number) => {
                              if (item.type === 'title') {
                                const HeadingTag = item.headingSize || 'h2';
                                return (
                                  <HeadingTag key={item.id || itemIndex} className={`font-bold text-brand-primary mb-6 ${
                                    item.headingSize === 'h1' ? 'text-4xl' :
                                    item.headingSize === 'h2' ? 'text-3xl' :
                                    item.headingSize === 'h3' ? 'text-2xl' :
                                    item.headingSize === 'h4' ? 'text-xl' :
                                    item.headingSize === 'h5' ? 'text-lg' : 'text-3xl'
                                  }`}>
                                    {item.title}
                                  </HeadingTag>
                                );
                              } else if (item.type === 'image') {
                                return (
                                  <div key={item.id || itemIndex} className="mb-6">
                                    <img 
                                      src={item.image_url} 
                                      alt={item.alt || `Image ${itemIndex + 1}`}
                                      className="w-full rounded-lg shadow-lg"
                                    />
                                  </div>
                                );
                              } else if (item.type === 'content') {
                                return (
                                  <div key={item.id || itemIndex} className="mb-6" dangerouslySetInnerHTML={{ __html: sanitizeWithNewTabLinks(item.content) }} />
                                );
                              }
                              return null;
                            })
                          ) : (
                            // Fallback to old section format
                            <>
                              {section.title && (
                                <h2 className="font-bold text-brand-primary mb-6 text-3xl">
                                  {section.title}
                                </h2>
                              )}
                              {section.image_url && (
                                <div className="mb-6">
                                  <img 
                                    src={section.image_url} 
                                    alt={section.title || `Section ${sectionIndex + 1}`}
                                    className="w-full rounded-lg shadow-lg"
                                  />
                                </div>
                              )}
                              {section.content && (
                                <div dangerouslySetInnerHTML={{ __html: sanitizeWithNewTabLinks(section.content) }} />
                              )}
                            </>
                          )}
                        </div>
                      );
                    });
                  }
                } catch (e) {
                  // Fall back to old format if JSON parsing fails
                }
                // Render old format HTML directly (with shortcode support)
                return <BlogShortcodeRenderer content={post.content} />;
              })()
              }
            </div>

            {/* Social Share (bottom) */}
            <div className="mt-8 pt-6 border-t border-border">
              <SocialShareButtons url={postUrl} title={post.title} />
            </div>

            {/* Related Posts */}
            {post.related_post_ids && post.related_post_ids.length > 0 && (
              <RelatedPosts postIds={post.related_post_ids} currentPostId={post.id} />
            )}

            {/* Blog Navigation */}
            <div className="mt-16 py-8 border-t border-border">
              <div className="flex justify-between items-center gap-8">
                <div className="flex-1">
                  {previousPost ? (
                    <Link to={`/blog/${previousPost.slug}`} className="group flex items-center gap-2 text-trust-blue hover:text-trust-blue/80 transition-colors">
                      <ChevronLeft className="w-5 h-5" />
                      <div>
                        <div className="text-xs text-slate-secondary uppercase tracking-wide">Previous</div>
                        <div className="font-medium group-hover:underline">{previousPost.title}</div>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-2 text-slate-secondary/50 cursor-not-allowed">
                      <ChevronLeft className="w-5 h-5" />
                      <div>
                        <div className="text-xs uppercase tracking-wide">Previous</div>
                        <div className="font-medium">No previous post</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex-1 flex justify-end">
                  {nextPost ? (
                    <Link to={`/blog/${nextPost.slug}`} className="group flex items-center gap-2 text-trust-blue hover:text-trust-blue/80 transition-colors text-right">
                      <div>
                        <div className="text-xs text-slate-secondary uppercase tracking-wide">Next</div>
                        <div className="font-medium group-hover:underline">{nextPost.title}</div>
                      </div>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  ) : (
                    <div className="flex items-center gap-2 text-slate-secondary/50 cursor-not-allowed text-right">
                      <div>
                        <div className="text-xs uppercase tracking-wide">Next</div>
                        <div className="font-medium">No next post</div>
                      </div>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Comment Form */}
            {post.id && (
              <div className="mt-12 bg-slate-light/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-brand-primary mb-2">Leave a Comment</h2>
                <p className="text-sm text-slate-secondary mb-6">
                  Your email address will not be published. Required fields are marked <span className="text-destructive">*</span>
                </p>
                
                <form onSubmit={handleCommentSubmit} className="space-y-6">
                  <div>
                    <Textarea
                      placeholder="Type here.."
                      value={commentForm.comment}
                      onChange={(e) => setCommentForm({...commentForm, comment: e.target.value})}
                      className="min-h-[150px] resize-none"
                      required
                      maxLength={2000}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      type="text"
                      placeholder="Name*"
                      value={commentForm.name}
                      onChange={(e) => setCommentForm({...commentForm, name: e.target.value})}
                      required
                      maxLength={100}
                    />
                    <Input
                      type="email"
                      placeholder="Email*"
                      value={commentForm.email}
                      onChange={(e) => setCommentForm({...commentForm, email: e.target.value})}
                      required
                      maxLength={255}
                    />
                    <Input
                      type="url"
                      placeholder="Website"
                      value={commentForm.website}
                      onChange={(e) => setCommentForm({...commentForm, website: e.target.value})}
                      maxLength={255}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="save-info"
                      checked={commentForm.saveInfo}
                      onCheckedChange={(checked) => setCommentForm({...commentForm, saveInfo: checked as boolean})}
                    />
                    <label
                      htmlFor="save-info"
                      className="text-sm text-slate-secondary cursor-pointer"
                    >
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-trust-blue hover:bg-trust-blue/90"
                  >
                    {isSubmitting ? "Posting..." : "Post Comment"}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </article>

    </div>;
};
export default BlogDetail;