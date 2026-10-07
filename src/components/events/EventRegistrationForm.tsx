import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { toast } from "sonner";

const registrationSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  job_title: z.string().optional(),
  consent_gdpr: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy to register",
  }),
  consent_marketing: z.boolean().optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface EventRegistrationFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event: any;
  onSuccess: () => void;
  onCancel: () => void;
}

export function EventRegistrationForm({
  event,
  onSuccess,
  onCancel,
}: EventRegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      company: "",
      job_title: "",
      consent_gdpr: false,
      consent_marketing: false,
    },
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();

      const { error } = await supabase.from("event_registrations").insert({
        event_id: event.id,
        user_id: user?.id || null,
        email: data.email,
        full_name: data.full_name,
        phone: data.phone || null,
        company: data.company || null,
        job_title: data.job_title || null,
        consent_gdpr: data.consent_gdpr,
        consent_marketing: data.consent_marketing || false,
        status: "confirmed",
      });

      if (error) {
        if (error.code === "23505") {
          toast.error("You are already registered for this event");
        } else {
          throw error;
        }
        return;
      }

      // Call edge function to send confirmation email
      await supabase.functions.invoke("send-event-confirmation", {
        body: {
          email: data.email,
          full_name: data.full_name,
          event_id: event.id,
          event_title: event.title,
          event_datetime: event.start_datetime,
          meeting_link: event.meeting_link,
        },
      });

      onSuccess();
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to register. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-t pt-6">
      <h3 className="text-xl font-semibold mb-4">Register for this Event</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="job_title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="Software Engineer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent_gdpr"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the privacy policy and terms of service *
                  </FormLabel>
                  <FormDescription>
                    Your data will be processed according to GDPR guidelines
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent_marketing"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I'd like to receive updates about future events
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Complete Registration"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
