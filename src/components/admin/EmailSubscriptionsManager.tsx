import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface EmailSubscription {
  id: string;
  email: string;
  is_active: boolean;
  subscribed_at: string;
  unsubscribed_at: string | null;
}

const EmailSubscriptionsManager = () => {
  const [subscriptions, setSubscriptions] = useState<EmailSubscription[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    const { data, error } = await supabase
      .from('email_subscriptions')
      .select('*')
      .order('subscribed_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch subscriptions",
        variant: "destructive",
      });
    } else {
      setSubscriptions(data || []);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Email Subscriptions</h2>
        <p className="text-sm text-slate-secondary">Total: {subscriptions.length}</p>
      </div>

      <div className="grid gap-4">
        {subscriptions.map((subscription) => (
          <Card key={subscription.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-semibold">{subscription.email}</p>
                    {subscription.is_active ? (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Unsubscribed</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-secondary">
                    Subscribed: {format(new Date(subscription.subscribed_at), 'PPP')}
                  </p>
                  {subscription.unsubscribed_at && (
                    <p className="text-sm text-slate-secondary">
                      Unsubscribed: {format(new Date(subscription.unsubscribed_at), 'PPP')}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmailSubscriptionsManager;
