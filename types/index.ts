export interface WaitlistEntry {
  email: string;
  name?: string;
  gender?: "man" | "woman";
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
