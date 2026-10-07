import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Star } from "lucide-react";
import { toast } from "sonner";

const feedbackSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  would_recommend: z.boolean().optional(),
  topics_interest: z.array(z.string()).optional(),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

interface EventFeedbackFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event: any;
  registrationId: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export function EventFeedbackForm({
  event,
  registrationId,
  onSuccess,
  onCancel,
}: EventFeedbackFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      rating: 0,
      comment: "",
      would_recommend: false,
      topics_interest: [],
    },
  });

  const onSubmit = async (data: FeedbackFormData) => {
    if (data.rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();

      const { error } = await supabase.from("event_feedback").insert({
        event_id: event.id,
        user_id: user?.id || null,
        registration_id: registrationId,
        rating: data.rating,
        comment: data.comment || null,
        would_recommend: data.would_recommend || false,
        topics_interest: data.topics_interest || null,
      });

      if (error) throw error;

      onSuccess();
    } catch (error) {
      console.error("Feedback error:", error);
      toast.error("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const rating = form.watch("rating");

  return (
    <div className="border-t pt-6">
      <h3 className="text-xl font-semibold mb-4">Share Your Feedback</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Overall Rating *</FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => field.onChange(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            star <= (hoveredStar || rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comments</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your experience..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="would_recommend"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>I would recommend this event to others</FormLabel>
              </FormItem>
            )}
          />

          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
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
