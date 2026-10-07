import Navigation from "@/components/Navigation";
import PageSeoHead from "@/components/PageSeoHead";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Lock, Database, CheckCircle, Award, Eye, Server } from "lucide-react";
import { Logos3 } from "@/components/blocks/logos3";
import { Link } from "react-router-dom";

const PrivateSecureAI = () => {
  return (
    <div className="min-h-screen">
      <PageSeoHead title="Private & Secure AI Deployment – CollabAI" description="Learn how to deploy AI that keeps all data on your own servers. A guide to self-hosted, encrypted, and compliance-ready AI infrastructure." />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface-elevated via-background to-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-trust-blue/10 text-trust-blue px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Step 1: Private & Secure AI Access</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
              Your AI Stays Behind
              <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                {" "}Your Firewall
              </span>
            </h1>
            
            <p className="text-xl text-slate-secondary leading-relaxed max-w-3xl mx-auto">
              CollabAI deploys entirely within your banking infrastructure, ensuring mortgage, compliance, and client data never leaves your control. Fully aligned with FINRA, HIPAA, and GDPR requirements.
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
              Why Banking Data Privacy Matters
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Lock className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Regulatory Compliance</h3>
                    <p className="text-slate-secondary">FINRA, HIPAA, and GDPR require strict data controls that cloud-based AI solutions can't guarantee.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Eye className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Client Confidentiality</h3>
                    <p className="text-slate-secondary">Mortgage applications contain the most sensitive personal and financial information.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Database className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Proprietary Risk Models</h3>
                    <p className="text-slate-secondary">Your competitive advantage depends on keeping internal assessment models secure.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Shield className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Audit Requirements</h3>
                    <p className="text-slate-secondary">Banking audits require complete data lineage and access controls that external AI can't provide.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Server className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Operational Resilience</h3>
                    <p className="text-slate-secondary">Critical banking operations can't depend on external services that might experience outages.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust-blue/10 rounded-full flex items-center justify-center mt-1">
                    <Award className="w-3 h-3 text-trust-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Competitive Advantage</h3>
                    <p className="text-slate-secondary">Keep your AI-enhanced processes and insights proprietary to your institution.</p>
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
              How CollabAI Deploys Behind Your Firewall
            </h2>
            
            <div className="space-y-8">
              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">1</span>
                    </div>
                    <span>On-Premises Installation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">CollabAI installs directly on your banking infrastructure using containerized deployment. No data ever leaves your network perimeter.</p>
                </CardContent>
              </Card>

              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">2</span>
                    </div>
                    <span>Encrypted Data Processing</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">All AI processing happens locally with enterprise-grade encryption. Your compliance team maintains full visibility and control.</p>
                </CardContent>
              </Card>

              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">3</span>
                    </div>
                    <span>Compliance Monitoring</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">Built-in audit trails, access controls, and compliance reporting ensure regulatory requirements are continuously met.</p>
                </CardContent>
              </Card>

              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">4</span>
                    </div>
                    <span>Role-Based Access</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">Granular permissions ensure loan officers, compliance managers, and executives see only relevant data and capabilities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Example Visual */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-primary mb-12">
              Your Private Hosted Instance
            </h2>
            
            <div className="bg-surface-elevated rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-trust-blue/5 to-trust-blue-dark/5 rounded-lg p-8 border border-trust-blue/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <Shield className="w-8 h-8 text-trust-blue" />
                    <span className="text-xl font-semibold text-slate-primary">CollabAI Banking Instance</span>
                    <Lock className="w-8 h-8 text-trust-blue" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="bg-white/50 rounded-lg p-4 border">
                      <Award className="w-6 h-6 text-trust-blue mx-auto mb-2" />
                      <div className="text-sm font-semibold text-slate-primary">FINRA</div>
                      <div className="text-xs text-slate-secondary">Compliant</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-4 border">
                      <Award className="w-6 h-6 text-trust-blue mx-auto mb-2" />
                      <div className="text-sm font-semibold text-slate-primary">HIPAA</div>
                      <div className="text-xs text-slate-secondary">Certified</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-4 border">
                      <Award className="w-6 h-6 text-trust-blue mx-auto mb-2" />
                      <div className="text-sm font-semibold text-slate-primary">GDPR</div>
                      <div className="text-xs text-slate-secondary">Aligned</div>
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
            See CollabAI in Action
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Watch how we deploy secure AI agents behind your firewall without compromising compliance or performance.
          </p>
          
          <Button size="lg" variant="secondary" className="bg-white text-trust-blue hover:bg-white/90" asChild>
            <Link to="/try-demo">
              Schedule Security Demo
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

export default PrivateSecureAI;