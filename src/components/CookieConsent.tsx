import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useInRouterContext } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const inRouter = useInRouterContext();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center instapaper_ignore">
      <Card className="max-w-md w-full p-6 shadow-2xl bg-white border-border">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Cookie Settings
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to enhance your experience, analyze site traffic and deliver personalized content.{" "}
            {inRouter ? (
              <Link to="/privacy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </Link>
            ) : (
              <a href="/privacy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </a>
            )}
            .
          </p>
          <div className="flex gap-3">
            <Button
              onClick={handleReject}
              variant="outline"
              className="flex-1"
            >
              Reject
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Accept
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;
