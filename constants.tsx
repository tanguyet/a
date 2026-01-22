
import { User, Reward, Achievement, Transaction } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Nguyễn Văn A',
  role: 'Senior Developer',
  department: 'Product Development',
  avatar: 'https://picsum.photos/id/64/200/200',
  points: 1250,
  totalEarned: 3500,
};

export const REWARDS: Reward[] = [
  {
    id: 'r1',
    title: 'Work from Cafe Voucher',
    description: 'A 500,000 VND voucher for any coffee shop of your choice + 1 day remote.',
    cost: 500,
    category: 'Workplace',
    image: 'https://picsum.photos/id/1060/400/300',
    stock: 12,
  },
  {
    id: 'r2',
    title: 'Executive Lunch with CEO',
    description: '1-on-1 lunch with the CEO at a 5-star restaurant.',
    cost: 2000,
    category: 'Experience',
    image: 'https://picsum.photos/id/429/400/300',
    stock: 2,
  },
  {
    id: 'r3',
    title: 'Noise Cancelling Headphones',
    description: 'The latest Sony WH-1000XM5 headphones for focused work.',
    cost: 1500,
    category: 'Merchandise',
    image: 'https://picsum.photos/id/21/400/300',
    stock: 5,
  },
  {
    id: 'r4',
    title: 'Professional Course Stipend',
    description: 'Up to 2,000,000 VND for any Udemy or Coursera course.',
    cost: 800,
    category: 'Experience',
    image: 'https://picsum.photos/id/1/400/300',
    stock: 20,
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: 'Bug Hunter',
    icon: 'fa-bug',
    points: 100,
    description: 'Resolved 5 high-priority bugs in one week.',
    category: 'Performance',
  },
  {
    id: 'a2',
    title: 'Team Player',
    icon: 'fa-users',
    points: 150,
    description: 'Received positive feedback from 3 cross-functional team members.',
    category: 'Soft Skills',
  },
  {
    id: 'a3',
    title: 'Early Bird',
    icon: 'fa-sun',
    points: 50,
    description: 'Logged in before 8:30 AM for 10 consecutive days.',
    category: 'Discipline',
  },
];

export const TRANSACTIONS: Transaction[] = [
  { id: 't1', userId: 'u1', type: 'earn', amount: 150, description: 'Project Alpha Deployment', timestamp: '2023-10-25T10:00:00Z' },
  { id: 't2', userId: 'u1', type: 'redeem', amount: 500, description: 'Starbucks Voucher Redemtion', timestamp: '2023-10-22T15:30:00Z' },
  { id: 't3', userId: 'u1', type: 'earn', amount: 200, description: 'Quarterly OKR Completion', timestamp: '2023-10-15T09:15:00Z' },
];
