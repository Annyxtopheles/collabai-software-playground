import PageSeoHead from "@/components/PageSeoHead";
import FinalCTASection from "@/components/FinalCTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, FileText, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

const Whitepapers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const whitepapers = [
    {
      title: "Seizing the Agentic AI Advantage: A Strategic Guide for Regulated Industries",
      description: "A comprehensive analysis of how agentic AI is transforming operations in compliance-focused sectors, with detailed case studies and implementation frameworks.",
      pages: "32 pages",
      downloadCount: "2,500+",
      category: "Strategy",
      featured: true,
      topics: ["Strategic Planning", "Risk Management", "Compliance", "ROI Analysis"]
    },
    {
      title: "HIPAA-Compliant AI Implementation: Healthcare Provider's Handbook",
      description: "Essential guide for healthcare organizations implementing AI while maintaining strict HIPAA compliance and patient data protection.",
      pages: "28 pages", 
      downloadCount: "1,800+",
      category: "Healthcare",
      featured: false,
      topics: ["HIPAA Compliance", "Patient Privacy", "Healthcare AI", "Security"]
    },
    {
      title: "Financial Services AI Security Framework: Best Practices Guide",
      description: "Comprehensive security framework for deploying AI in banking, mortgage, and financial institutions with regulatory compliance requirements.",
      pages: "35 pages",
      downloadCount: "2,100+", 
      category: "Financial Services",
      featured: false,
      topics: ["Financial Compliance", "Security", "Risk Assessment", "Audit"]
    },
    {
      title: "Legal Tech Transformation: AI in Law Firm Operations",
      description: "Detailed exploration of how AI is revolutionizing legal practices, from contract review to legal research and client service delivery.",
      pages: "24 pages",
      downloadCount: "1,400+",
      category: "Legal",
      featured: false,
      topics: ["Legal Tech", "Contract Analysis", "Legal Research", "Efficiency"]
    },
    {
      title: "Accounting Automation Beyond Data Entry: Strategic AI Applications",
      description: "Advanced guide to implementing AI in accounting firms, covering strategic applications that go beyond basic automation.",
      pages: "30 pages",
      downloadCount: "1,600+",
      category: "Accounting", 
      featured: false,
      topics: ["Accounting AI", "Financial Analysis", "Audit Automation", "Client Advisory"]
    },
    {
      title: "Self-Hosted AI vs. Cloud: Enterprise Decision Framework",
      description: "Comparative analysis helping enterprise decision-makers choose between self-hosted and cloud AI deployments based on security and compliance needs.",
      pages: "22 pages",
      downloadCount: "3,200+",
      category: "Technology",
      featured: false,
      topics: ["Architecture", "Security", "Compliance", "Enterprise"]
    }
  ];

  const categories = ["All", "Strategy", "Healthcare", "Financial Services", "Legal", "Accounting", "Technology"];

  return (
    <div className="min-h-screen">
      <PageSeoHead title="Whitepapers & Research – CollabAI" description="Download CollabAI whitepapers on enterprise AI deployment, data privacy, and industry-specific AI strategies for regulated sectors." />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface-elevated via-background to-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-primary mb-6">
              Industry
              <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                {" "}Whitepapers
              </span>
              <br />
              & Research
            </h1>
            
            <p className="text-xl text-slate-secondary leading-relaxed mb-8">
              In-depth research, strategic frameworks, and implementation guides for deploying 
              AI solutions in regulated industries with confidence and compliance.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-slate-secondary">
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-trust-blue" />
                <span>Research library</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-trust-blue" />
                <span>10,000+ downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-trust-blue" />
                <span>Updated quarterly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-trust-blue hover:bg-trust-blue/90" : "hover:bg-trust-blue/10 hover:text-trust-blue"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Whitepaper */}
      {whitepapers.filter(wp => wp.featured).map((whitepaper, index) => (
        <section key={index} className="py-20 bg-gradient-to-br from-trust-blue to-trust-blue-dark text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white mb-4">
                    Featured Research
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    {whitepaper.title}
                  </h2>
                  <p className="text-xl opacity-90 leading-relaxed">
                    {whitepaper.description}
                  </p>
                </div>

                <div className="flex items-center space-x-6 text-white/80">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>{whitepaper.pages}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>{whitepaper.downloadCount} downloads</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-trust-blue hover:text-[#315efd] hover:bg-white/90 hover:shadow-lg transition-all duration-300"
                >
                  Download Free Whitepaper
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">What You'll Learn:</h3>
                <div className="space-y-3">
                  {whitepaper.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Whitepapers Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.filter(wp => !wp.featured).filter(wp => selectedCategory === "All" || wp.category === selectedCategory).map((whitepaper, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                <CardHeader className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-trust-blue/10 text-trust-blue">
                      {whitepaper.category}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-slate-secondary">
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{whitepaper.pages}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{whitepaper.downloadCount}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-brand-primary group-hover:text-trust-blue transition-colors leading-tight mb-3">
                    {whitepaper.title}
                  </CardTitle>
                  
                  <p className="text-slate-secondary leading-relaxed">
                    {whitepaper.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h4 className="font-semibold text-brand-primary mb-2 text-sm">Key Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {whitepaper.topics.slice(0, 3).map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-trust-blue hover:text-[#315efd] hover:bg-trust-blue/10 hover:shadow-md transition-all duration-300 group/btn"
                  >
                    Download Whitepaper
                    <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <FinalCTASection 
        title="Get New Research First"
        paragraph="Be the first to access our latest research and whitepapers on AI implementation in regulated industries."
        showNewsletter={true}
        newsletterDisclaimer="Quarterly releases • Industry insights • No spam"
      />

    </div>
  );
};

export default Whitepapers;