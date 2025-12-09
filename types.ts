export type Role = 'admin' | 'member' | 'guest';

export interface Plan {
  id: string;
  name: string;
  price: number;
  durationDays: number;
  features: string[];
  type: 'Monthly' | 'Quarterly' | 'Yearly' | 'Personal';
  promo?: string; // e.g., "2+1 MONTH FREE!"
}

export interface Payment {
  id: string;
  memberId: string;
  memberName: string;
  planName: string;
  amount: number;
  date: string; // ISO Date
  status: 'success' | 'pending' | 'failed';
  method: 'Credit Card' | 'UPI' | 'Cash';
}

export interface MemberProfile {
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  height: number; // cm
  weight: number; // kg
  goal: 'Weight Loss' | 'Muscle Gain' | 'Maintenance' | 'General Fitness';
  injuries?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: Role;
  joinedDate: string;
  status: 'active' | 'inactive';
  currentPlanId?: string;
  planStartDate?: string;
  planEndDate?: string;
  profile?: MemberProfile;
}

export interface GymStats {
  totalMembers: number;
  activeMembers: number;
  expiringSoon: number;
  revenue: number;
}