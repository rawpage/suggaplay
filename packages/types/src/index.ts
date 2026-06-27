export type {
  Database,
  User,
  Profile,
  Subscription,
  WaitlistEntry,
  Gender,
  UserRole,
  SubscriptionStatus,
  SubscriptionPlan,
} from "./database";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
