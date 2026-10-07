import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import PageSeoHead from "@/components/PageSeoHead";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  content: string;
  rating: number | null;
  avatar_url: string | null;
  is_published: boolean;
  created_at: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchTestimonials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Sort by content length (longest first) for better card layout
      const sortedData = (data || []).sort((a, b) => b.content.length - a.content.length);
      setTestimonials(sortedData);
    } catch (error: unknown) {
      console.error('Error fetching testimonials:', error);
      toast({
        title: "Error",
        description: "Failed to load testimonials",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSeoHead title="Customer Testimonials – Control Tower Reviews" description="Hear from enterprise teams using Control Tower to deploy private AI agents. Real feedback from banking, healthcare, and professional services clients." />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface-elevated to-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Hear from companies that have transformed their workflows with Control Tower — powered by CollabAI.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Bento Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-16">
              <p className="text-text-secondary">Loading testimonials...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-secondary">No testimonials available at this time.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
              {testimonials.map((testimonial, index) => {
                // Create varied grid patterns
                const patterns = [
                  "md:col-span-2 md:row-span-2", // large
                  "md:col-span-1 md:row-span-1", // small
                  "md:col-span-1 md:row-span-2", // tall
                  "md:col-span-2 md:row-span-1", // wide
                  "md:col-span-1 md:row-span-1", // small
                  "md:col-span-1 md:row-span-2", // tall
                  "md:col-span-2 md:row-span-1", // wide
                  "md:col-span-1 md:row-span-1", // small
                ];
                const pattern = patterns[index % patterns.length];

                return (
                  <Card 
                    key={testimonial.id} 
                    className={`${pattern} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden`}
                  >
                    <CardContent className="p-6 h-full flex flex-col justify-between">
                      <div className="flex-1 overflow-hidden">
                        <div className="relative mb-4">
                          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                          <p className="text-text-secondary pl-6 italic">
                            "{testimonial.content}"
                          </p>
                        </div>

                        {testimonial.rating && (
                          <div className="flex items-center gap-1 mb-4">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                        {testimonial.avatar_url ? (
                          <img
                            src={testimonial.avatar_url}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-semibold text-sm">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-primary text-sm truncate">{testimonial.name}</h3>
                          {testimonial.role && (
                            <p className="text-xs text-text-secondary truncate">{testimonial.role}</p>
                          )}
                          {testimonial.company && (
                            <p className="text-xs text-text-secondary truncate">{testimonial.company}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
