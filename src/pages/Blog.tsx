import PageSeoHead from "@/components/PageSeoHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Calendar, User, BookOpen, Search, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id?: string;
  title: string;
  excerpt: string | null;
  slug: string;
  category: string | null;
  image_url?: string | null;
  author: string;
  published_at?: string | null;
  tags?: string[];
}

const POSTS_PER_PAGE = 9;

const BlogCardSkeleton = () => (
  <Card className="border-0 bg-white">
    <Skeleton className="aspect-video rounded-t-lg" />
    <CardHeader className="space-y-3">
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-3/4" />
    </CardHeader>
    <CardContent className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex items-center gap-4 pb-5">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-10 w-full" />
    </CardContent>
  </Card>
);

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, category, image_url, author, published_at, tags')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: "Error",
        description: "Failed to load blog posts",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const allPosts = posts;
  
  const categories = ["All", ...Array.from(new Set(
    allPosts
      .map(post => post.category)
      .filter(Boolean)
      .flatMap(cat => cat!.split(',').map(c => c.trim()))
  ))];

  const filteredPosts = useMemo(() => {
    let result = allPosts;
    
    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter(post => post.category?.split(',').map(c => c.trim()).includes(selectedCategory));
    }
    
    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(post =>
        post.title.toLowerCase().includes(q) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(q)) ||
        post.author.toLowerCase().includes(q) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(q)))
      );
    }
    
    return result;
  }, [allPosts, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen">
      <PageSeoHead
        title="Blog - AI Insights & Resources | CollabAI"
        description="Get the latest updates on AI agents, industry insights, and resources from CollabAI. Expert articles on AI for accounting, legal, healthcare, and more."
        canonicalPath="/blog"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface-elevated via-background to-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-primary mb-6">
              Stay Ahead of the
              <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                {" "}AI Revolution
              </span>
              <br />
              with CollabAI
            </h1>
            
            <p className="text-xl text-brand-secondary leading-relaxed mb-8">
              Get the latest updates on AI agents & relevant resources from CollabAI bi-weekly
            </p>

            <div className="flex items-center justify-center max-w-md mx-auto mb-8">
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pr-12 h-12"
                />
                <Button 
                  size="sm"
                  className="absolute right-1 top-1 h-10"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-brand-secondary">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-trust-blue" />
                <span>Weekly expert insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-trust-blue" />
                <span>Industry practitioners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Categories Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 space-y-4">
          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search articles by title, author, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 h-11"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className={selectedCategory === category ? "bg-trust-blue hover:bg-trust-blue/90" : "hover:bg-trust-blue/10 hover:text-trust-blue"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Results count */}
          {(searchQuery || selectedCategory !== "All") && (
            <p className="text-sm text-muted-foreground mb-6">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
              {searchQuery && <> for "<strong>{searchQuery}</strong>"</>}
              {selectedCategory !== "All" && <> in <strong>{selectedCategory}</strong></>}
            </p>
          )}

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          ) : paginatedPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-secondary">No blog posts found.</p>
              {searchQuery && (
                <Button variant="link" onClick={() => setSearchQuery("")} className="mt-2">
                  Clear search
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post, index) => {
                  const imageUrl = post.image_url;
                  const publishedDate = post.published_at;
                  
                  return (
                    <Card key={post.id || index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                      {imageUrl && (
                        <Link to={`/blog/${post.slug}`} className="block">
                          <div className="aspect-video overflow-hidden rounded-t-lg cursor-pointer">
                            <img 
                              src={imageUrl} 
                              alt={post.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </Link>
                      )}
                      <CardHeader className="space-y-3">
                        {post.category && (
                          <div className="flex flex-wrap gap-2">
                            {post.category.split(',').map((cat, idx) => (
                              <div key={idx} className="inline-flex items-center w-fit bg-trust-blue/10 text-trust-blue px-3 py-1 rounded-full text-xs font-medium">
                                {cat.trim()}
                              </div>
                            ))}
                          </div>
                        )}
                        <Link to={`/blog/${post.slug}`}>
                          <CardTitle className="text-xl leading-tight group-hover:text-trust-blue transition-colors cursor-pointer">
                            {post.title}
                          </CardTitle>
                        </Link>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-slate-secondary leading-relaxed line-clamp-3">
                          {post.excerpt || ''}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-slate-secondary/80 pb-5">
                          <div className="flex items-center gap-1.5">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{publishedDate ? new Date(publishedDate).toLocaleDateString() : 'Not published'}</span>
                          </div>
                        </div>
                        <Link to={`/blog/${post.slug}`}>
                          <Button 
                            variant="outline" 
                            className="w-full border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white transition-all duration-300 group"
                          >
                            Read Article
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "bg-trust-blue hover:bg-trust-blue/90" : ""}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

    </div>
  );
};

export default Blog;