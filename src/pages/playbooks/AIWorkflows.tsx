import Navigation from "@/components/Navigation";
import PageSeoHead from "@/components/PageSeoHead";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Clock, FileText, CheckCircle, AlertCircle, TrendingUp, Database, Workflow } from "lucide-react";
import { Logos3 } from "@/components/blocks/logos3";
import { Link } from "react-router-dom";

const AIWorkflows = () => {
  return (
    <div className="min-h-screen">
      <PageSeoHead title="AI Workflow Automation Playbook – CollabAI" description="Learn how to automate repetitive business workflows with AI agents. Step-by-step guide to building efficient AI-powered processes." />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface-elevated via-background to-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 bg-trust-blue/10 text-trust-blue px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Step 3: AI-Driven Workflows that Save Time</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
              Automate Your Banking
              <span className="bg-gradient-to-r from-trust-blue to-trust-blue-dark bg-clip-text text-transparent">
                {" "}Workflows End-to-End
              </span>
            </h1>
            
            <p className="text-xl text-slate-secondary leading-relaxed max-w-3xl mx-auto">
              Connect your internal tools' data to AI-powered workflows that save individual contributors hours each week. From pre-analyzed loan files to automatic compliance summaries, your team works faster and more accurately.
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
            <h2 className="text-3xl font-bold text-brand-primary text-center mb-12">
              Time Lost in Manual Banking Processes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Document Review: 3-5 Hours Per Loan</h3>
                    <p className="text-slate-secondary">Manual verification of income statements, credit reports, and supporting documents.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Compliance Checking: 2 Hours Per Application</h3>
                    <p className="text-slate-secondary">Cross-referencing regulations, validating requirements, and generating reports.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Risk Assessment: 1-2 Hours Per Case</h3>
                    <p className="text-slate-secondary">Calculating risk scores, analyzing market conditions, and comparing to portfolio.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Portfolio Reporting: 4 Hours Weekly</h3>
                    <p className="text-slate-secondary">Compiling performance metrics, trend analysis, and executive summaries.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Client Communication: 30 Minutes Per Update</h3>
                    <p className="text-slate-secondary">Status updates, document requests, and timeline notifications.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-primary mb-2">Data Entry & Routing: 1 Hour Per Loan</h3>
                    <p className="text-slate-secondary">Moving data between systems, updating statuses, and notifying teams.</p>
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
              Pulling Data + n8n Orchestration
            </h2>
            
            <div className="space-y-8">
              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">1</span>
                    </div>
                    <span>Data Integration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">Connect to your loan origination systems, CRM, credit bureaus, and compliance databases for real-time data access.</p>
                </CardContent>
              </Card>

              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">2</span>
                    </div>
                    <span>Workflow Orchestration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">Use n8n's visual workflow builder to create automated processes that trigger based on events, schedules, or user actions.</p>
                </CardContent>
              </Card>

              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">3</span>
                    </div>
                    <span>AI Processing</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">Apply AI agents at each workflow step for document analysis, risk scoring, compliance checking, and report generation.</p>
                </CardContent>
              </Card>

              <Card className="border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                      <span className="text-trust-blue font-bold">4</span>
                    </div>
                    <span>Automated Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-secondary">Execute follow-up actions like sending notifications, updating records, routing approvals, and generating reports.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Example Workflows */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-primary text-center mb-16">
            Ready-to-Deploy Banking Workflows
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-trust-blue" />
                </div>
                <CardTitle className="text-lg">Pre-analyzed Loan Files</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-secondary mb-4">Automatically process and analyze new loan applications before they reach underwriters.</p>
                <div className="space-y-2 text-sm text-slate-secondary">
                  <div>• Document completeness check</div>
                  <div>• Income calculation verification</div>
                  <div>• Initial risk score generation</div>
                  <div>• Compliance pre-screening</div>
                </div>
                <div className="mt-4 text-sm font-semibold text-trust-blue">Saves: 3 hours per loan</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-trust-blue" />
                </div>
                <CardTitle className="text-lg">Automated Compliance Summaries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-secondary mb-4">Generate comprehensive compliance reports with regulatory validation and risk flags.</p>
                <div className="space-y-2 text-sm text-slate-secondary">
                  <div>• Regulation adherence checking</div>
                  <div>• Risk flag identification</div>
                  <div>• Audit trail generation</div>
                  <div>• Exception report creation</div>
                </div>
                <div className="mt-4 text-sm font-semibold text-trust-blue">Saves: 2 hours per application</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-trust-blue" />
                </div>
                <CardTitle className="text-lg">Portfolio Snapshots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-secondary mb-4">Create executive-ready portfolio summaries with performance metrics and trend analysis.</p>
                <div className="space-y-2 text-sm text-slate-secondary">
                  <div>• Performance metric compilation</div>
                  <div>• Risk distribution analysis</div>
                  <div>• Trend identification</div>
                  <div>• Executive summary creation</div>
                </div>
                <div className="mt-4 text-sm font-semibold text-trust-blue">Saves: 4 hours weekly</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Workflow */}
      <section className="py-20 bg-slate-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-primary mb-12">
              Automated Loan Processing Workflow
            </h2>
            
            <div className="bg-surface-elevated rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-trust-blue" />
                    </div>
                    <span className="text-sm font-semibold text-slate-primary">Loan Application</span>
                    <span className="text-xs text-slate-secondary">Submitted</span>
                  </div>
                  
                  <ArrowRight className="w-6 h-6 text-slate-secondary" />
                  
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-trust-blue" />
                    </div>
                    <span className="text-sm font-semibold text-slate-primary">Compliance Review</span>
                    <span className="text-xs text-slate-secondary">AI Automated</span>
                  </div>
                  
                  <ArrowRight className="w-6 h-6 text-slate-secondary" />
                  
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center">
                      <Database className="w-6 h-6 text-trust-blue" />
                    </div>
                    <span className="text-sm font-semibold text-slate-primary">Portfolio Summary</span>
                    <span className="text-xs text-slate-secondary">Generated</span>
                  </div>
                  
                  <ArrowRight className="w-6 h-6 text-slate-secondary" />
                  
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-trust-blue" />
                    </div>
                    <span className="text-sm font-semibold text-slate-primary">Notifications</span>
                    <span className="text-xs text-slate-secondary">Auto-sent</span>
                  </div>
                </div>
                
                <div className="bg-trust-blue/5 rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Workflow className="w-5 h-5 text-trust-blue" />
                    <span className="text-sm font-semibold text-trust-blue">Total Processing Time: 30 minutes (vs. 8 hours manual)</span>
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
            See your bank's workflow automated in real time
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Watch how we connect your existing systems to create end-to-end automated workflows that save hours on every loan.
          </p>
          
          <Button size="lg" variant="secondary" className="bg-white text-trust-blue hover:bg-white/90" asChild>
            <Link to="/try-demo">
              Schedule Workflow Demo
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

export default AIWorkflows;