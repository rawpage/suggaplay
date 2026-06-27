export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole = "member" | "admin";
export type Gender = "man" | "woman";
export type OnlineStatus = "online" | "offline" | "away";
export type SubscriptionStatus =
  | "none"
  | "founding"
  | "active"
  | "cancelled"
  | "past_due";
export type SubscriptionPlan = "founding" | "standard";
export type StripeSubscriptionState =
  | "trialing"
  | "active"
  | "past_due"
  | "canceled"
  | "unpaid"
  | "incomplete"
  | "incomplete_expired"
  | "paused";
export type VerificationStatus = "pending" | "approved" | "rejected";
export type ReportReason =
  | "spam"
  | "fake_account"
  | "harassment"
  | "inappropriate_content"
  | "other";
export type ReportStatus = "open" | "reviewing" | "resolved" | "dismissed";
export type NotificationType =
  | "new_message"
  | "favorite"
  | "profile_visitor"
  | "album_request"
  | "album_granted"
  | "verification_approved"
  | "subscription_renewal"
  | "subscription_expiring"
  | "subscription_payment_failed";

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          role: UserRole;
          gender: Gender | null;
          subscription_status: SubscriptionStatus;
          stripe_customer_id: string | null;
          is_verified: boolean;
          is_shadow_banned: boolean;
          last_online: string | null;
          online_status: OnlineStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          role?: UserRole;
          gender?: Gender | null;
          subscription_status?: SubscriptionStatus;
          stripe_customer_id?: string | null;
          is_verified?: boolean;
          is_shadow_banned?: boolean;
          last_online?: string | null;
          online_status?: OnlineStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
        Relationships: [];
      };
      profiles: {
        Row: {
          id: string;
          user_id: string;
          username: string;
          age: number | null;
          city: string;
          country: string;
          headline: string | null;
          bio: string | null;
          occupation: string | null;
          height_cm: number | null;
          body_type: string | null;
          smoker: string | null;
          drinker: string | null;
          relationship_type: string | null;
          looking_for: string | null;
          latitude: number | null;
          longitude: number | null;
          onboarding_step: number;
          onboarding_complete: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          username: string;
          age?: number | null;
          city?: string;
          country?: string;
          headline?: string | null;
          bio?: string | null;
          occupation?: string | null;
          height_cm?: number | null;
          body_type?: string | null;
          smoker?: string | null;
          drinker?: string | null;
          relationship_type?: string | null;
          looking_for?: string | null;
          latitude?: number | null;
          longitude?: number | null;
          onboarding_step?: number;
          onboarding_complete?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
        Relationships: [];
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          stripe_subscription_id: string;
          stripe_price_id: string;
          plan: SubscriptionPlan;
          status: StripeSubscriptionState;
          current_period_start: string | null;
          current_period_end: string | null;
          cancel_at_period_end: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          stripe_subscription_id: string;
          stripe_price_id: string;
          plan: SubscriptionPlan;
          status: StripeSubscriptionState;
          current_period_start?: string | null;
          current_period_end?: string | null;
          cancel_at_period_end?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["subscriptions"]["Insert"]
        >;
        Relationships: [];
      };
      waitlist_entries: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          gender: Gender | null;
          city: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name?: string | null;
          gender?: Gender | null;
          city?: string | null;
          created_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["waitlist_entries"]["Insert"]
        >;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      has_premium_access: {
        Args: { p_user_id: string };
        Returns: boolean;
      };
      founding_slots_remaining: {
        Args: Record<string, never>;
        Returns: number;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type User = Database["public"]["Tables"]["users"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Subscription = Database["public"]["Tables"]["subscriptions"]["Row"];
export type WaitlistEntry =
  Database["public"]["Tables"]["waitlist_entries"]["Row"];
