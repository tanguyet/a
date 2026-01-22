
export interface User {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  points: number;
  totalEarned: number;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  cost: number;
  category: 'Experience' | 'Merchandise' | 'Voucher' | 'Workplace';
  image: string;
  stock: number;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'earn' | 'redeem';
  amount: number;
  description: string;
  timestamp: string;
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
  points: number;
  description: string;
  category: string;
}
