export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: "customer" | "agent" | "admin";
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  expiresIn: number;
}
