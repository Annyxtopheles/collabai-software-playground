import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User } from "lucide-react";
import { sanitizeWithNewTabLinks } from "@/lib/sanitizeHtml";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock article data - in a real app, this would be fetched based on the ID
  const article = {
    id: id,
    title: "Introduction to Our Sales Process",
    category: "Sales and Marketing",
    author: "John Smith",
    publishDate: "March 15, 2024",
    readTime: "5 min read",
    content: `
      <h2>Getting Started with Sales</h2>
      <p>Welcome to our comprehensive guide on the sales process. This article will walk you through the fundamental steps and best practices that have been proven to drive results in our organization.</p>
      
      <h3>1. Lead Generation</h3>
      <p>The first step in our sales process is identifying and generating quality leads. This involves:</p>
      <ul>
        <li>Market research and target audience identification</li>
        <li>Content marketing to attract potential customers</li>
        <li>Networking and referral programs</li>
        <li>Digital marketing campaigns</li>
      </ul>
      
      <h3>2. Lead Qualification</h3>
      <p>Not all leads are created equal. Our qualification process helps identify which prospects are most likely to convert:</p>
      <ul>
        <li>BANT criteria (Budget, Authority, Need, Timeline)</li>
        <li>Initial discovery calls</li>
        <li>Needs assessment</li>
      </ul>
      
      <h3>3. Proposal Development</h3>
      <p>Once a lead is qualified, we develop customized proposals that address their specific needs and challenges. This includes:</p>
      <ul>
        <li>Solution mapping</li>
        <li>Pricing strategy</li>
        <li>Implementation timeline</li>
        <li>Value proposition presentation</li>
      </ul>
      
      <h3>4. Closing and Follow-up</h3>
      <p>The final stage involves closing the deal and ensuring customer satisfaction through proper follow-up procedures.</p>
      
      <h2>Best Practices</h2>
      <p>Here are some key best practices to keep in mind throughout the sales process:</p>
      <ul>
        <li>Always listen more than you speak</li>
        <li>Focus on solving problems, not just selling products</li>
        <li>Maintain detailed records in our CRM system</li>
        <li>Follow up consistently and professionally</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>By following this structured approach to sales, you'll be able to build stronger relationships with prospects and achieve better conversion rates. Remember that sales is about building trust and providing value to your customers.</p>
    `,
    relatedArticles: [
      { title: "Creating Effective Marketing Campaigns", id: "2" },
      { title: "Using the CRM Software", id: "3" },
      { title: "Customer Relationship Management", id: "4" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/resources/knowledge-base')}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Knowledge Base
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {article.title}
            </h1>
            
            {/* Article Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
              <div>
                Published: {article.publishDate}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="prose prose-slate max-w-none p-8">
                  <div 
                    dangerouslySetInnerHTML={{ __html: sanitizeWithNewTabLinks(article.content) }}
                    className="space-y-4"
                  />
                </CardContent>
              </Card>

              {/* Article Actions */}
              <div className="mt-6 flex justify-end items-center">
                <p className="text-sm text-muted-foreground">
                  Was this article helpful?
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">In This Article</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#getting-started" className="text-primary hover:underline">Getting Started with Sales</a></li>
                    <li><a href="#lead-generation" className="text-primary hover:underline">Lead Generation</a></li>
                    <li><a href="#qualification" className="text-primary hover:underline">Lead Qualification</a></li>
                    <li><a href="#proposal" className="text-primary hover:underline">Proposal Development</a></li>
                    <li><a href="#closing" className="text-primary hover:underline">Closing and Follow-up</a></li>
                    <li><a href="#best-practices" className="text-primary hover:underline">Best Practices</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {article.relatedArticles.map((related, index) => (
                      <a
                        key={index}
                        href={`/resources/knowledge-base/article/${related.id}`}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <h4 className="font-medium text-sm text-foreground hover:text-primary">
                          {related.title}
                        </h4>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default ArticleDetail;