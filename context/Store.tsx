import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Plan, Payment, GymStats, Role } from '../types';

// Updated Mock Data based on new Pricing
const MOCK_PLANS: Plan[] = [
  { 
    id: 'p1', 
    name: '1 Month', 
    price: 1299, 
    durationDays: 30, 
    features: ['Gym Only Access', 'Morning: 5AM - 9AM', 'Evening: 4PM - 9PM', 'Access to 3 Floors'], 
    type: 'Monthly' 
  },
  { 
    id: 'p2', 
    name: '3 Months', 
    price: 2599, 
    durationDays: 90, 
    features: ['2 Months + 1 Free', 'Separate Cardio Floor', 'Certified Trainers', 'Locker Access'], 
    type: 'Quarterly',
    promo: '2+1 MONTH FREE!'
  },
  { 
    id: 'p3', 
    name: '6 Months', 
    price: 5199, 
    durationDays: 180, 
    features: ['4 Months + 2 Free', 'Diet Consultation', 'Full Gym Access', 'Air-Conditioned Hall'], 
    type: 'Yearly', 
    promo: '4+2 MONTHS FREE!'
  },
  { 
    id: 'p4', 
    name: '12 Months', 
    price: 7799, 
    durationDays: 365, 
    features: ['6 Months + 6 Free', 'Priority Support', 'All Amenities', 'Best Value'], 
    type: 'Yearly',
    promo: '6+6 MONTHS FREE!'
  },
];

const MOCK_USERS: User[] = [
  { 
    id: 'admin1', name: 'Admin User', email: 'admin@gym.com', phone: '+918331833252', role: 'admin', joinedDate: '2023-01-01', status: 'active' 
  },
  { 
    id: 'u1', name: 'John Doe', email: 'john@example.com', phone: '+1987654321', role: 'member', joinedDate: '2023-10-15', status: 'active',
    currentPlanId: 'p1', planStartDate: '2023-10-15', planEndDate: new Date(Date.now() + 86400000 * 5).toISOString(), // Expires in 5 days
    profile: { age: 30, gender: 'Male', height: 180, weight: 85, goal: 'Muscle Gain' }
  },
  { 
    id: 'u2', name: 'Jane Smith', email: 'jane@example.com', phone: '+1122334455', role: 'member', joinedDate: '2023-09-01', status: 'active',
    currentPlanId: 'p2', planStartDate: '2023-09-01', planEndDate: '2024-01-01' 
  }
];

const MOCK_PAYMENTS: Payment[] = [
  { id: 'pay1', memberId: 'u1', memberName: 'John Doe', planName: '1 Month', amount: 1299, date: '2023-10-15', status: 'success', method: 'UPI' },
  { id: 'pay2', memberId: 'u2', memberName: 'Jane Smith', planName: '3 Months', amount: 2599, date: '2023-09-01', status: 'success', method: 'UPI' }
];

interface StoreContextType {
  user: User | null;
  plans: Plan[];
  users: User[];
  payments: Payment[];
  login: (email: string, role: Role) => void;
  logout: () => void;
  addMember: (user: User) => void;
  addPayment: (payment: Payment) => void;
  updateMemberProfile: (id: string, profile: any) => void;
  stats: GymStats;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const [payments, setPayments] = useState<Payment[]>(MOCK_PAYMENTS);
  const [plans] = useState<Plan[]>(MOCK_PLANS);

  // Derived Stats
  const stats: GymStats = {
    totalMembers: users.filter(u => u.role === 'member').length,
    activeMembers: users.filter(u => u.role === 'member' && u.status === 'active').length,
    expiringSoon: users.filter(u => {
      if (!u.planEndDate) return false;
      const daysLeft = Math.ceil((new Date(u.planEndDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
      return daysLeft > 0 && daysLeft <= 7;
    }).length,
    revenue: payments.reduce((acc, curr) => acc + curr.amount, 0)
  };

  const login = (email: string, role: Role) => {
    // Simple mock login
    const found = users.find(u => u.email === email && u.role === role);
    if (found) setUser(found);
    else alert('User not found in mock DB. Try admin@gym.com or john@example.com');
  };

  const logout = () => setUser(null);

  const addMember = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  const addPayment = (newPayment: Payment) => {
    setPayments([newPayment, ...payments]);
  };

  const updateMemberProfile = (id: string, profile: any) => {
    setUsers(users.map(u => u.id === id ? { ...u, profile: { ...u.profile, ...profile } } : u));
    if (user && user.id === id) {
      setUser({ ...user, profile: { ...user.profile, ...profile } });
    }
  };

  return (
    <StoreContext.Provider value={{ user, plans, users, payments, login, logout, addMember, addPayment, updateMemberProfile, stats }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
};
