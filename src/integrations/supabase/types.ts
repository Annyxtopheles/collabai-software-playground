export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ai_readiness_reports: {
        Row: {
          answers_json: Json
          company_name: string
          created_at: string
          email: string
          external_webhook_error: string | null
          external_webhook_sent_at: string | null
          findings_json: Json
          ghl_error: string | null
          ghl_sent_at: string | null
          id: string
          industry: string
          industry_insight: string
          name: string
          raw_score: number
          recommendation: string
          score_100: number
          score_category: string
          score_summary: string
          status: string
          storage_path: string
          team_size: number
          website: string
        }
        Insert: {
          answers_json: Json
          company_name: string
          created_at?: string
          email: string
          external_webhook_error?: string | null
          external_webhook_sent_at?: string | null
          findings_json: Json
          ghl_error?: string | null
          ghl_sent_at?: string | null
          id?: string
          industry: string
          industry_insight: string
          name: string
          raw_score: number
          recommendation: string
          score_100: number
          score_category: string
          score_summary: string
          status?: string
          storage_path: string
          team_size: number
          website: string
        }
        Update: {
          answers_json?: Json
          company_name?: string
          created_at?: string
          email?: string
          external_webhook_error?: string | null
          external_webhook_sent_at?: string | null
          findings_json?: Json
          ghl_error?: string | null
          ghl_sent_at?: string | null
          id?: string
          industry?: string
          industry_insight?: string
          name?: string
          raw_score?: number
          recommendation?: string
          score_100?: number
          score_category?: string
          score_summary?: string
          status?: string
          storage_path?: string
          team_size?: number
          website?: string
        }
        Relationships: []
      }
      blog_categories: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      blog_charts: {
        Row: {
          chart_type: string
          config: Json | null
          created_at: string
          data: Json
          id: string
          slug: string
          title: string
        }
        Insert: {
          chart_type?: string
          config?: Json | null
          created_at?: string
          data?: Json
          id?: string
          slug: string
          title: string
        }
        Update: {
          chart_type?: string
          config?: Json | null
          created_at?: string
          data?: Json
          id?: string
          slug?: string
          title?: string
        }
        Relationships: []
      }
      blog_comments: {
        Row: {
          blog_post_id: string
          comment: string
          created_at: string
          email: string
          id: string
          is_approved: boolean | null
          name: string
          website: string | null
        }
        Insert: {
          blog_post_id: string
          comment: string
          created_at?: string
          email: string
          id?: string
          is_approved?: boolean | null
          name: string
          website?: string | null
        }
        Update: {
          blog_post_id?: string
          comment?: string
          created_at?: string
          email?: string
          id?: string
          is_approved?: boolean | null
          name?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_comments_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_post_revisions: {
        Row: {
          content: string
          created_at: string
          created_by: string | null
          id: string
          meta_data: Json | null
          post_id: string
          revision_number: number
          title: string
        }
        Insert: {
          content: string
          created_at?: string
          created_by?: string | null
          id?: string
          meta_data?: Json | null
          post_id: string
          revision_number?: number
          title: string
        }
        Update: {
          content?: string
          created_at?: string
          created_by?: string | null
          id?: string
          meta_data?: Json | null
          post_id?: string
          revision_number?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_revisions_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author: string
          author_name: string | null
          author_url: string | null
          banner_alt: string | null
          canonical_url: string | null
          category: string | null
          content: string
          created_at: string
          excerpt: string | null
          focus_keyword: string | null
          id: string
          image_url: string | null
          is_published: boolean | null
          last_auto_saved_at: string | null
          meta_description: string | null
          meta_title: string | null
          nofollow: boolean | null
          noindex: boolean | null
          og_description: string | null
          og_image_url: string | null
          og_title: string | null
          published_at: string | null
          related_post_ids: string[] | null
          scheduled_timezone: string | null
          schema_type: string | null
          slug: string
          tags: string[] | null
          title: string
          toc_enabled: boolean | null
          twitter_card_type: string | null
          updated_at: string
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          author: string
          author_name?: string | null
          author_url?: string | null
          banner_alt?: string | null
          canonical_url?: string | null
          category?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          focus_keyword?: string | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          last_auto_saved_at?: string | null
          meta_description?: string | null
          meta_title?: string | null
          nofollow?: boolean | null
          noindex?: boolean | null
          og_description?: string | null
          og_image_url?: string | null
          og_title?: string | null
          published_at?: string | null
          related_post_ids?: string[] | null
          scheduled_timezone?: string | null
          schema_type?: string | null
          slug: string
          tags?: string[] | null
          title: string
          toc_enabled?: boolean | null
          twitter_card_type?: string | null
          updated_at?: string
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          author?: string
          author_name?: string | null
          author_url?: string | null
          banner_alt?: string | null
          canonical_url?: string | null
          category?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          focus_keyword?: string | null
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          last_auto_saved_at?: string | null
          meta_description?: string | null
          meta_title?: string | null
          nofollow?: boolean | null
          noindex?: boolean | null
          og_description?: string | null
          og_image_url?: string | null
          og_title?: string | null
          published_at?: string | null
          related_post_ids?: string[] | null
          scheduled_timezone?: string | null
          schema_type?: string | null
          slug?: string
          tags?: string[] | null
          title?: string
          toc_enabled?: boolean | null
          twitter_card_type?: string | null
          updated_at?: string
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: []
      }
      case_studies: {
        Row: {
          challenge: string | null
          company: string
          created_at: string
          id: string
          image_url: string | null
          industry: string | null
          is_published: boolean | null
          results: string | null
          slug: string
          solution: string | null
          title: string
          updated_at: string
        }
        Insert: {
          challenge?: string | null
          company: string
          created_at?: string
          id?: string
          image_url?: string | null
          industry?: string | null
          is_published?: boolean | null
          results?: string | null
          slug: string
          solution?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          challenge?: string | null
          company?: string
          created_at?: string
          id?: string
          image_url?: string | null
          industry?: string | null
          is_published?: boolean | null
          results?: string | null
          slug?: string
          solution?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          message: string | null
          organization: string | null
          phone: string
          status: string | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          message?: string | null
          organization?: string | null
          phone: string
          status?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string | null
          organization?: string | null
          phone?: string
          status?: string | null
        }
        Relationships: []
      }
      demo_requests: {
        Row: {
          company: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          message: string | null
          phone: string | null
          status: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          message?: string | null
          phone?: string | null
          status?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string | null
          phone?: string | null
          status?: string | null
        }
        Relationships: []
      }
      email_subscriptions: {
        Row: {
          email: string
          id: string
          is_active: boolean | null
          subscribed_at: string
          unsubscribed_at: string | null
        }
        Insert: {
          email: string
          id?: string
          is_active?: boolean | null
          subscribed_at?: string
          unsubscribed_at?: string | null
        }
        Update: {
          email?: string
          id?: string
          is_active?: boolean | null
          subscribed_at?: string
          unsubscribed_at?: string | null
        }
        Relationships: []
      }
      event_audit_log: {
        Row: {
          action: string
          changes: Json | null
          created_at: string
          event_id: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          action: string
          changes?: Json | null
          created_at?: string
          event_id?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          action?: string
          changes?: Json | null
          created_at?: string
          event_id?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_audit_log_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_feedback: {
        Row: {
          comment: string | null
          created_at: string
          event_id: string
          id: string
          rating: number | null
          registration_id: string | null
          topics_interest: string[] | null
          user_id: string | null
          would_recommend: boolean | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          event_id: string
          id?: string
          rating?: number | null
          registration_id?: string | null
          topics_interest?: string[] | null
          user_id?: string | null
          would_recommend?: boolean | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          event_id?: string
          id?: string
          rating?: number | null
          registration_id?: string | null
          topics_interest?: string[] | null
          user_id?: string | null
          would_recommend?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "event_feedback_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_feedback_registration_id_fkey"
            columns: ["registration_id"]
            isOneToOne: false
            referencedRelation: "event_registrations"
            referencedColumns: ["id"]
          },
        ]
      }
      event_presenters: {
        Row: {
          avatar_url: string | null
          bio: string | null
          company: string | null
          event_id: string
          id: string
          linkedin_url: string | null
          name: string
          sort_order: number | null
          title: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          event_id: string
          id?: string
          linkedin_url?: string | null
          name: string
          sort_order?: number | null
          title?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          event_id?: string
          id?: string
          linkedin_url?: string | null
          name?: string
          sort_order?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_presenters_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_registrations: {
        Row: {
          attended_at: string | null
          company: string | null
          consent_gdpr: boolean | null
          consent_marketing: boolean | null
          email: string
          event_id: string
          full_name: string
          id: string
          job_title: string | null
          phone: string | null
          registered_at: string
          status: Database["public"]["Enums"]["registration_status"]
          user_id: string | null
        }
        Insert: {
          attended_at?: string | null
          company?: string | null
          consent_gdpr?: boolean | null
          consent_marketing?: boolean | null
          email: string
          event_id: string
          full_name: string
          id?: string
          job_title?: string | null
          phone?: string | null
          registered_at?: string
          status?: Database["public"]["Enums"]["registration_status"]
          user_id?: string | null
        }
        Update: {
          attended_at?: string | null
          company?: string | null
          consent_gdpr?: boolean | null
          consent_marketing?: boolean | null
          email?: string
          event_id?: string
          full_name?: string
          id?: string
          job_title?: string | null
          phone?: string | null
          registered_at?: string
          status?: Database["public"]["Enums"]["registration_status"]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_resources: {
        Row: {
          created_at: string
          description: string | null
          event_id: string
          file_type: string | null
          file_url: string
          id: string
          resource_type: string | null
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          event_id: string
          file_type?: string | null
          file_url: string
          id?: string
          resource_type?: string | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          event_id?: string
          file_type?: string | null
          file_url?: string
          id?: string
          resource_type?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_resources_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          agenda: string | null
          cover_image_url: string | null
          created_at: string
          created_by: string | null
          current_attendees: number | null
          description: string | null
          end_datetime: string
          event_type: Database["public"]["Enums"]["event_type"]
          featured: boolean | null
          guest_registration_enabled: boolean | null
          id: string
          max_attendees: number | null
          meeting_link: string | null
          recording_link: string | null
          slug: string
          sponsored: boolean | null
          start_datetime: string
          status: Database["public"]["Enums"]["event_status"]
          tags: string[] | null
          timezone: string | null
          title: string
          updated_at: string
        }
        Insert: {
          agenda?: string | null
          cover_image_url?: string | null
          created_at?: string
          created_by?: string | null
          current_attendees?: number | null
          description?: string | null
          end_datetime: string
          event_type?: Database["public"]["Enums"]["event_type"]
          featured?: boolean | null
          guest_registration_enabled?: boolean | null
          id?: string
          max_attendees?: number | null
          meeting_link?: string | null
          recording_link?: string | null
          slug: string
          sponsored?: boolean | null
          start_datetime: string
          status?: Database["public"]["Enums"]["event_status"]
          tags?: string[] | null
          timezone?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          agenda?: string | null
          cover_image_url?: string | null
          created_at?: string
          created_by?: string | null
          current_attendees?: number | null
          description?: string | null
          end_datetime?: string
          event_type?: Database["public"]["Enums"]["event_type"]
          featured?: boolean | null
          guest_registration_enabled?: boolean | null
          id?: string
          max_attendees?: number | null
          meeting_link?: string | null
          recording_link?: string | null
          slug?: string
          sponsored?: boolean | null
          start_datetime?: string
          status?: Database["public"]["Enums"]["event_status"]
          tags?: string[] | null
          timezone?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      knowledge_base: {
        Row: {
          category: string | null
          content: string
          created_at: string
          id: string
          is_published: boolean | null
          slug: string
          tags: string[] | null
          title: string
          updated_at: string
          view_count: number | null
        }
        Insert: {
          category?: string | null
          content: string
          created_at?: string
          id?: string
          is_published?: boolean | null
          slug: string
          tags?: string[] | null
          title: string
          updated_at?: string
          view_count?: number | null
        }
        Update: {
          category?: string | null
          content?: string
          created_at?: string
          id?: string
          is_published?: boolean | null
          slug?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
          view_count?: number | null
        }
        Relationships: []
      }
      media_files: {
        Row: {
          alt_text: string | null
          content_type: string
          created_at: string | null
          file_path: string
          file_size: number | null
          file_url: string
          group: string | null
          id: string
          mime_type: string | null
          name: string
          title_text: string | null
          updated_at: string | null
          uploaded_by: string | null
        }
        Insert: {
          alt_text?: string | null
          content_type: string
          created_at?: string | null
          file_path: string
          file_size?: number | null
          file_url: string
          group?: string | null
          id?: string
          mime_type?: string | null
          name: string
          title_text?: string | null
          updated_at?: string | null
          uploaded_by?: string | null
        }
        Update: {
          alt_text?: string | null
          content_type?: string
          created_at?: string | null
          file_path?: string
          file_size?: number | null
          file_url?: string
          group?: string | null
          id?: string
          mime_type?: string | null
          name?: string
          title_text?: string | null
          updated_at?: string | null
          uploaded_by?: string | null
        }
        Relationships: []
      }
      site_images: {
        Row: {
          created_at: string | null
          group: string | null
          id: string
          image_key: string
          image_url: string
          label: string
          page: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          group?: string | null
          id?: string
          image_key: string
          image_url: string
          label: string
          page?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          group?: string | null
          id?: string
          image_key?: string
          image_url?: string
          label?: string
          page?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          avatar_url: string | null
          company: string | null
          content: string
          created_at: string
          id: string
          is_published: boolean | null
          name: string
          rating: number | null
          role: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          content: string
          created_at?: string
          id?: string
          is_published?: boolean | null
          name: string
          rating?: number | null
          role?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          content?: string
          created_at?: string
          id?: string
          is_published?: boolean | null
          name?: string
          rating?: number | null
          role?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      whitepapers: {
        Row: {
          category: string | null
          cover_image_url: string | null
          created_at: string
          description: string | null
          download_count: number | null
          file_url: string | null
          id: string
          is_published: boolean | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          download_count?: number | null
          file_url?: string | null
          id?: string
          is_published?: boolean | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          download_count?: number | null
          file_url?: string | null
          id?: string
          is_published?: boolean | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      blog_comments_public: {
        Row: {
          blog_post_id: string | null
          comment: string | null
          created_at: string | null
          id: string | null
          name: string | null
          website: string | null
        }
        Insert: {
          blog_post_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string | null
          name?: string | null
          website?: never
        }
        Update: {
          blog_post_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string | null
          name?: string | null
          website?: never
        }
        Relationships: [
          {
            foreignKeyName: "blog_comments_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      blog_post_word_counts: {
        Args: never
        Returns: {
          id: string
          word_count: number
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      event_status: "draft" | "upcoming" | "live" | "completed" | "canceled"
      event_type: "webinar" | "workshop" | "conference" | "meetup" | "training"
      registration_status:
        | "pending"
        | "confirmed"
        | "canceled"
        | "attended"
        | "no_show"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      event_status: ["draft", "upcoming", "live", "completed", "canceled"],
      event_type: ["webinar", "workshop", "conference", "meetup", "training"],
      registration_status: [
        "pending",
        "confirmed",
        "canceled",
        "attended",
        "no_show",
      ],
    },
  },
} as const
