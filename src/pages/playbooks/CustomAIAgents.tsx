import Navigation from "@/components/Navigation";
import PageSeoHead from "@/components/PageSeoHead";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Settings, Users, FileText, Shield, Database, Zap, Bot, Building2 } from "lucide-react";
import { Logos3 } from "@/components/blocks/logos3";
import { Link } from "react-router-dom";

const CustomAIAgents = () => {
  return (
    <div className="min-h-screen">
      <PageSeoHead title="Custom AI Agents Playbook – CollabAI" description="Build and deploy custom AI agents tailored to your business. A guide to creating industry-specific AI assistants with CollabAI." />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface-elevated via-background to-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-trust-blue/10 text-trust-blue px-4 py-2 rounded-full text-sm font-medium">
              <Settings className="w-4 h-4" />
              <span>Step 2: Custom AI Agents for Your Teams</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
              AI Agents Built for
              <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                {" "}Every Banking Role
              </span>
            </h1>
            
            <p className="text-xl text-slate-secondary leading-relaxed max-w-3xl mx-auto">
              Instead of one-size-fits-all AI, CollabAI provides specialized agents for every department — from loan application analyzers to compliance monitors — all accessible through an intuitive internal interface.
            </p>

            <Button size="lg" className="bg-gradient-to-r from-trust-blue to-trust-blue-dark" asChild>
              <Link to="/try-demo">
                Book a Live Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-primary text-center mb-12">
              Role-Specific Banking Needs
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Users className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Loan Officers Need Speed</h3>
                    <p className="text-slate-secondary">Quick document analysis, risk insights, and application status updates to serve customers faster.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Shield className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Compliance Managers Need Accuracy</h3>
                    <p className="text-slate-secondary">Automated regulation monitoring, audit trail generation, and risk flag identification.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Building2 className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Executives Need Insights</h3>
                    <p className="text-slate-secondary">Portfolio summaries, trend analysis, and performance metrics for strategic decision-making.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <FileText className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Underwriters Need Precision</h3>
                    <p className="text-slate-secondary">Detailed risk assessment, document verification, and standardized scoring models.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Database className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Operations Teams Need Efficiency</h3>
                    <p className="text-slate-secondary">Workflow automation, task routing, and process optimization across departments.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Zap className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Customer Service Needs Responsiveness</h3>
                    <p className="text-slate-secondary">Instant application status, document requirements, and timeline updates for clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-primary text-center mb-12">
              Building & Deploying Custom Agents
            </h2>
            
            <div className="space-y-8">
              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">1</span>
                    </div>
                    <span>Role-Based Agent Templates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">Pre-built banking agents designed for specific roles, with customizable prompts, data access, and workflow integration.</p>
                </CardContent>
              </Card>

              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">2</span>
                    </div>
                    <span>No-Code Customization</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">Configure agent behavior, data sources, and response formats through an intuitive interface — no programming required.</p>
                </CardContent>
              </Card>

              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">3</span>
                    </div>
                    <span>Secure Deployment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">Deploy agents with appropriate security clearances and data access permissions based on user roles and compliance requirements.</p>
                </CardContent>
              </Card>

              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">4</span>
                    </div>
                    <span>Continuous Learning</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">Agents improve over time by learning from user feedback and banking-specific patterns while maintaining privacy.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Example Agents */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-primary text-center mb-16">
            Ready-to-Deploy Banking Agents
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-trust-blue" />
                </div>
                <CardTitle className="text-lg">Loan Application Analyzer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-secondary mb-4">Flags missing info & compliance risks instantly.</p>
                <div className="space-y-2 text-sm text-slate-secondary">
                  <div>• Document completeness verification</div>
                  <div>• Income calculation validation</div>
                  <div>• Credit score impact analysis</div>
                  <div>• Regulatory compliance checking</div>
                </div>
                <Button variant="ghost" className="mt-4 text-trust-blue hover:bg-trust-blue/10" asChild>
                  <Link to="/try-demo">
                    View Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-trust-blue" />
                </div>
                <CardTitle className="text-lg">Risk & Compliance Monitor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-secondary mb-4">Tracks regulatory changes and validates applications.</p>
                <div className="space-y-2 text-sm text-slate-secondary">
                  <div>• Real-time regulation updates</div>
                  <div>• Automated compliance scoring</div>
                  <div>• Risk flag identification</div>
                  <div>• Audit trail generation</div>
                </div>
                <Button variant="ghost" className="mt-4 text-trust-blue hover:bg-trust-blue/10" asChild>
                  <Link to="/try-demo">
                    View Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-trust-blue" />
                </div>
                <CardTitle className="text-lg">Client Onboarding Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-secondary mb-4">Automates document collection and verification.</p>
                <div className="space-y-2 text-sm text-slate-secondary">
                  <div>• Document requirement checklists</div>
                  <div>• Automated verification workflows</div>
                  <div>• Client communication templates</div>
                  <div>• Progress tracking dashboards</div>
                </div>
                <Button variant="ghost" className="mt-4 text-trust-blue hover:bg-trust-blue/10" asChild>
                  <Link to="/try-demo">
                    View Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Interface */}
      <section className="py-20 bg-slate-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-primary mb-12">
              Explore Agents Interface
            </h2>
            
            <div className="bg-surface-elevated rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-trust-blue/5 to-trust-blue-dark/5 rounded-lg p-8 border border-trust-blue/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-primary">Banking AI Agents Dashboard</h3>
                    <Bot className="w-6 h-6 text-trust-blue" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/50 rounded-lg p-4 border text-left">
                      <div className="flex items-center space-x-2 mb-2">
                        <FileText className="w-4 h-4 text-trust-blue" />
                        <span className="font-semibold text-slate-primary text-sm">Loan Analyzer</span>
                      </div>
                      <div className="text-xs text-slate-secondary">Active • 47 loans processed today</div>
                    </div>
                    
                    <div className="bg-white/50 rounded-lg p-4 border text-left">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="w-4 h-4 text-trust-blue" />
                        <span className="font-semibold text-slate-primary text-sm">Compliance Monitor</span>
                      </div>
                      <div className="text-xs text-slate-secondary">Active • 3 flagged items</div>
                    </div>
                    
                    <div className="bg-white/50 rounded-lg p-4 border text-left">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-4 h-4 text-trust-blue" />
                        <span className="font-semibold text-slate-primary text-sm">Onboarding Assistant</span>
                      </div>
                      <div className="text-xs text-slate-secondary">Active • 12 clients in progress</div>
                    </div>
                    
                    <div className="bg-white/50 rounded-lg p-4 border text-left">
                      <div className="flex items-center space-x-2 mb-2">
                        <Database className="w-4 h-4 text-trust-blue" />
                        <span className="font-semibold text-slate-primary text-sm">Portfolio Generator</span>
                      </div>
                      <div className="text-xs text-slate-secondary">Active • Last run 2 hours ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-trust-blue to-trust-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Watch us build a custom banking agent in minutes
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            See how quickly you can configure specialized AI agents for your unique banking workflows and compliance requirements.
          </p>
          
          <Button size="lg" variant="secondary" className="bg-white text-trust-blue hover:bg-white/90" asChild>
            <Link to="/try-demo">
              Schedule Live Agent Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Client Logos Section */}
      <Logos3 
        heading="Trusted by leading financial institutions"
        logos={[
          {
            id: "logo-1",
            description: "JPMorgan Chase",
            image: "https://logos-world.net/wp-content/uploads/2021/02/JPMorgan-Chase-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-2",
            description: "Wells Fargo",
            image: "https://logos-world.net/wp-content/uploads/2020/04/Wells-Fargo-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-3",
            description: "Bank of America",
            image: "https://logos-world.net/wp-content/uploads/2020/04/Bank-of-America-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-4",
            description: "Citibank",
            image: "https://logos-world.net/wp-content/uploads/2020/04/Citibank-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-5",
            description: "Goldman Sachs",
            image: "https://logos-world.net/wp-content/uploads/2020/04/Goldman-Sachs-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-6",
            description: "Morgan Stanley",
            image: "https://logos-world.net/wp-content/uploads/2020/04/Morgan-Stanley-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-7",
            description: "American Express",
            image: "https://logos-world.net/wp-content/uploads/2020/04/American-Express-Logo.png",
            className: "h-6 w-auto",
          },
          {
            id: "logo-8",
            description: "Capital One",
            image: "https://logos-world.net/wp-content/uploads/2020/04/Capital-One-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-9",
            description: "PNC Bank",
            image: "https://logos-world.net/wp-content/uploads/2020/04/PNC-Bank-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-10",
            description: "US Bank",
            image: "https://logos-world.net/wp-content/uploads/2020/04/US-Bank-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-11",
            description: "Fifth Third Bank",
            image: "https://logos-world.net/wp-content/uploads/2020/04/Fifth-Third-Bank-Logo.png",
            className: "h-8 w-auto",
          },
          {
            id: "logo-12",
            description: "TD Bank",
            image: "https://logos-world.net/wp-content/uploads/2020/04/TD-Bank-Logo.png",
            className: "h-8 w-auto",
          },
        ]}
      />

      <Footer />
    </div>
  );
};

export default CustomAIAgents;