import PageSeoHead from "@/components/PageSeoHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Github, Terminal, Database, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Installation = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSeoHead title="Install CollabAI – Setup Guide" description="Step-by-step installation guide for self-hosting CollabAI. Docker, database setup, API keys, and configuration instructions." />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How to Install CollabAI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete installation guide and setup instructions to get CollabAI running on your system
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <a 
                  href="https://github.com/sjinnovation/CollaborativeAI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  Download Source Code
                </a>
              </Button>
            </div>
          </div>

          {/* Prerequisites */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Prerequisites
              </CardTitle>
              <CardDescription>
                Before installing CollabAI, ensure you have the following installed on your system:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span><strong>Node.js</strong> (Version: {'>'}=20.x)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span><strong>PostgreSQL (via Supabase)</strong> - Database for storing application data</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span><strong>NPM</strong> - Node Package Manager</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Installation Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Installation Steps
              </CardTitle>
              <CardDescription>
                Follow these steps to set up CollabAI on your local machine:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">1. Clone the Repository</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    git clone https://github.com/sjinnovation/CollaborativeAI.git
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">2. Navigate to Client Folder</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    cd client
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">3. Install Frontend Dependencies</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    npm install
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">4. Navigate to Server Folder</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    cd ../server
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">5. Install Backend Dependencies</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    npm install
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">6. Start the Application</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    npm start
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Setup Configuration */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Initial Setup & Configuration
              </CardTitle>
              <CardDescription>
                Initialize the application with a superadmin user and configure your settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-semibold">Using cURL:</h3>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <pre className="text-sm">
{`curl -X POST http://localhost:8011/api/init \\
-H "Content-Type: application/json" \\
-d '{
  "fname": "Super",
  "lname": "Admin",
  "email": "superadmin@example.com",
  "password": "yourSecurePassword",
  "employeeCount": 100,
  "companyName": "INIT_COMPANY"
}'`}
                  </pre>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Using Postman:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Open Postman and create a new POST request</li>
                    <li>Set URL to: <code className="bg-muted px-2 py-1 rounded">http://localhost:8011/api/init</code></li>
                    <li>Set Content-Type header to: <code className="bg-muted px-2 py-1 rounded">application/json</code></li>
                    <li>Add the JSON payload in the request body</li>
                    <li>Send the request to create your superadmin user</li>
                  </ol>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-sm text-blue-800">
                    <strong>Next Step:</strong> Login with your superadmin credentials and configure your site settings, including API keys and other configurations from the settings page.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Getting Started Video */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Getting Started Video</CardTitle>
              <CardDescription>
                Watch our installation walkthrough to see the process in action
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1040035206?h=2be1ea2eda&title=0&byline=0&portrait=0"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Getting Started with CollabAI"
                />
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>
                If you encounter any issues during installation, here are some resources to help you:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" asChild>
                  <a 
                    href="https://github.com/sjinnovation/CollabAI/blob/main/CONTRIBUTING.md" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Contribution Guidelines
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">
                    Contact Support
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

    </div>
  );
};

export default Installation;