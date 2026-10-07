import { useState, useMemo } from "react";
import { FaqSection } from "@/components/ui/faq-section";
import { Link } from "react-router-dom";
import PageSeoHead from "@/components/PageSeoHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";  
import { 
  Search, 
  Star, 
  Clock, 
  Briefcase, 
  Package, 
  Users, 
  DollarSign, 
  Monitor, 
  TrendingUp,
  Shield,
  HelpCircle,
  ChevronDown
} from "lucide-react";

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allArticles = [
    {
      id: "1",
      title: "Introduction to Our Sales Process",
      category: "Sales and Marketing",
      icon: <TrendingUp className="h-5 w-5" />,
      content: "Learn the fundamentals of our proven sales methodology...",
      isPopular: true,
      isNew: false
    },
    {
      id: "2",
      title: "Creating Effective Marketing Campaigns",
      category: "Sales and Marketing", 
      icon: <TrendingUp className="h-5 w-5" />,
      content: "Master the art of creating campaigns that convert...",
      isPopular: true,
      isNew: false
    },
    {
      id: "3",
      title: "Using the CRM Software",
      category: "Sales and Marketing",
      icon: <Monitor className="h-5 w-5" />,
      content: "Complete guide to utilizing our CRM platform...",
      isPopular: true,
      isNew: false
    },
    {
      id: "4",
      title: "Inventory Management Best Practices", 
      category: "Operations and Logistics",
      icon: <Package className="h-5 w-5" />,
      content: "Optimize your inventory management processes...",
      isPopular: true,
      isNew: false
    },
    {
      id: "5",
      title: "Understanding the Supply Chain",
      category: "Operations and Logistics",
      icon: <Package className="h-5 w-5" />,
      content: "Navigate complex supply chain relationships...",
      isPopular: true,
      isNew: false
    },
    {
      id: "6",
      title: "Setting Career Goals",
      category: "Professional Development",
      icon: <Users className="h-5 w-5" />,
      content: "Define and achieve your professional objectives...",
      isPopular: false,
      isNew: true
    },
    {
      id: "7",
      title: "Mentorship Programs Overview", 
      category: "Professional Development",
      icon: <Users className="h-5 w-5" />,
      content: "Get the most out of our mentorship programs...",
      isPopular: false,
      isNew: true
    },
    {
      id: "8",
      title: "Identifying Training Opportunities",
      category: "Professional Development", 
      icon: <Users className="h-5 w-5" />,
      content: "Discover learning opportunities for growth...",
      isPopular: false,
      isNew: true
    },
    {
      id: "9",
      title: "Security Protocols for Safe Computing",
      category: "IT Support",
      icon: <Shield className="h-5 w-5" />,
      content: "Essential security practices for all employees...",
      isPopular: false,
      isNew: true
    },
    {
      id: "10",
      title: "How to Request IT Support",
      category: "IT Support",
      icon: <Monitor className="h-5 w-5" />,
      content: "Step-by-step guide to getting IT help...",
      isPopular: false,
      isNew: true
    },
    {
      id: "11",
      title: "Budget Planning Fundamentals",
      category: "Finance and Expenses",
      icon: <DollarSign className="h-5 w-5" />,
      content: "Master the basics of financial planning...",
      isPopular: false,
      isNew: false
    },
    {
      id: "12",
      title: "Employee Benefits Overview",
      category: "Human Resources",
      icon: <Users className="h-5 w-5" />,
      content: "Complete guide to available benefits...",
      isPopular: false,
      isNew: false
    }
  ];

  const categories = [
    {
      title: "Sales and Marketing",
      description: "Learn about our sales processes and marketing strategies",
      icon: <TrendingUp className="h-6 w-6" />,
      count: "12 articles",
      articles: allArticles.filter(article => article.category === "Sales and Marketing")
    },
    {
      title: "Operations and Logistics", 
      description: "Operational procedures and logistics management",
      icon: <Package className="h-6 w-6" />,
      count: "8 articles",
      articles: allArticles.filter(article => article.category === "Operations and Logistics")
    },
    {
      title: "Human Resources",
      description: "HR policies, benefits, and employee resources", 
      icon: <Users className="h-6 w-6" />,
      count: "15 articles",
      articles: allArticles.filter(article => article.category === "Human Resources")
    },
    {
      title: "Finance and Expenses",
      description: "Financial processes and expense management",
      icon: <DollarSign className="h-6 w-6" />,
      count: "6 articles",
      articles: allArticles.filter(article => article.category === "Finance and Expenses")
    },
    {
      title: "IT Support", 
      description: "Technology support and security guidelines",
      icon: <Monitor className="h-6 w-6" />,
      count: "10 articles",
      articles: allArticles.filter(article => article.category === "IT Support")
    },
    {
      title: "Professional Development",
      description: "Career growth and learning opportunities",
      icon: <Briefcase className="h-6 w-6" />,
      count: "7 articles",
      articles: allArticles.filter(article => article.category === "Professional Development")
    }
  ];

  // Filter articles based on search query
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return allArticles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const popularArticles = allArticles.filter(article => article.isPopular);
  const newestArticles = allArticles.filter(article => article.isNew);

  const faqs = [
    {
      question: "What are the steps to submit a purchase order?",
      answer: "Here's the process to submit a purchase order: 1. Fill out the purchase order form. 2. Obtain the necessary approvals from your manager or department head. 3. Submit the approved purchase order to the procurement team."
    },
    {
      question: "Where can I find templates for customer presentations?",
      answer: "We have a library of customer presentation templates within the Sales & Marketing section of our knowledge base."
    },
    {
      question: "What is the process for requesting time off?", 
      answer: "1. Access our Time Off Request form. 2. Fill out the form, including your desired dates and any relevant notes. 3. Submit the form to your manager for approval."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSeoHead title="Knowledge Base – CollabAI Help Center" description="Browse CollabAI's knowledge base for guides, tutorials, and troubleshooting articles on deploying and managing your enterprise AI platform." />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Knowledge Base
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find answers, guides, and resources to help you make the most of CollabAI
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Search Results ({filteredArticles.length})
              </h2>
              {filteredArticles.length > 0 ? (
                <div className="grid gap-4">
                  {filteredArticles.map((article) => (
                    <Card key={article.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Link
                          to={`/resources/knowledge-base/article/${article.id}`}
                          className="block"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              {article.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground hover:text-primary mb-2">
                                {article.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {article.content}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {article.category}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">
                      No articles found matching "{searchQuery}". Try different keywords.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Categories Grid */}
          {!searchQuery && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-trust-blue/10 rounded-lg">
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{category.title}</CardTitle>
                          <CardDescription className="text-sm text-muted-foreground">
                            {category.count}
                          </CardDescription>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-64">
                            {category.articles.length > 0 ? (
                              category.articles.map((article) => (
                                <DropdownMenuItem key={article.id} asChild>
                                  <Link
                                    to={`/resources/knowledge-base/article/${article.id}`}
                                    className="flex items-center gap-2 w-full"
                                  >
                                    {article.icon}
                                    <span className="flex-1">{article.title}</span>
                                  </Link>
                                </DropdownMenuItem>
                              ))
                            ) : (
                              <DropdownMenuItem disabled>
                                No articles available
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {!searchQuery && (
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Popular Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Popular Articles
                  </CardTitle>
                  <CardDescription>
                    Most viewed and helpful articles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {popularArticles.map((article) => (
                      <Link
                        key={article.id}
                        to={`/resources/knowledge-base/article/${article.id}`}
                        className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors cursor-pointer"
                      >
                        <div className="p-2 bg-primary/10 rounded">
                          {article.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm hover:text-primary">{article.title}</h3>
                          <p className="text-xs text-muted-foreground">{article.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newest Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Newest Articles
                  </CardTitle>
                  <CardDescription>
                    Recently added and updated content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {newestArticles.map((article) => (
                      <Link
                        key={article.id}
                        to={`/resources/knowledge-base/article/${article.id}`}
                        className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors cursor-pointer"
                      >
                        <div className="p-2 bg-primary/10 rounded">
                          {article.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm hover:text-primary">{article.title}</h3>
                          <p className="text-xs text-muted-foreground">{article.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* FAQs Section */}
          {!searchQuery && (
            <FaqSection
              title="Frequently Asked Questions"
              description="Quick answers to common questions"
              items={faqs}
              className="py-4"
            />
          )}

          {/* Help Section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still need help?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Get in touch with our support team.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>

    </div>
  );
};

export default KnowledgeBase;