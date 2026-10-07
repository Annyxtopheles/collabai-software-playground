import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Shield, Loader2 } from "lucide-react";
import collabLogo from "@/assets/collabai-logo.png";
import PageSeoHead from "@/components/PageSeoHead";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if already logged in
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Check if user is admin via server-side verification
        const { data: verifyData } = await supabase.functions.invoke('verify-admin');
        
        if (verifyData?.isAdmin) {
          navigate('/admin');
        }
      }
    };
    checkAuth();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        toast({
          title: "Sign up successful",
          description: "Please check your email for verification",
        });
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        // Check if user has admin role via server-side verification
        const { data: verifyData, error: verifyError } = await supabase.functions.invoke('verify-admin');

        if (verifyError || !verifyData?.isAdmin) {
          await supabase.auth.signOut();
          throw new Error('Unauthorized: Admin access required');
        }

        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
        });

        navigate('/admin');
      }
    } catch (error: unknown) {
      toast({
        title: isSignUp ? "Sign up failed" : "Login failed",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-light via-background to-surface-elevated p-4">
      <PageSeoHead title="Admin Login | CollabAI" description="Admin login page" noindex={true} />
      <div className="w-full max-w-md space-y-6">
        <img src={collabLogo} alt="CollabAI" className="mx-auto h-12 w-auto" />
        <Card>
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-trust-blue" />
            </div>
            <CardTitle className="text-2xl">{isSignUp ? 'Admin Sign Up' : 'Admin Login'}</CardTitle>
          <p className="text-slate-secondary text-sm">
            {isSignUp ? 'Create your admin account' : 'Enter your credentials to access the admin dashboard'}
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-trust-blue to-trust-blue-dark"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  {isSignUp ? 'Signing up...' : 'Signing in...'}
                </>
              ) : (
                isSignUp ? 'Sign Up' : 'Sign In'
              )}
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => setIsSignUp(!isSignUp)}
              disabled={isLoading}
            >
              {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </Button>
          </form>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
