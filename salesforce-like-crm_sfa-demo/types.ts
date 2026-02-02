
export type PageType = 'home' | 'accounts' | 'account_detail' | 'opportunities' | 'opportunity_detail' | 'reports' | 'dashboards' | 'leads' | 'tasks';

export interface Account {
  id: string;
  name: string;
  industry: string;
  phone: string;
  owner: string;
  lastActivity: string;
  address: string;
  description: string;
}

export interface Contact {
  id: string;
  accountId: string;
  name: string;
  title: string;
  email: string;
  phone: string;
}

export type OpportunityStage = 'Lead' | 'Proposal' | 'Negotiation' | 'Contract' | 'Closed Won' | 'Closed Lost';

export interface Opportunity {
  id: string;
  name: string;
  accountId: string;
  accountName: string;
  amount: number;
  stage: OpportunityStage;
  probability: number;
  closeDate: string;
  owner: string;
}

export interface Activity {
  id: string;
  type: 'email' | 'call' | 'visit' | 'meeting';
  subject: string;
  date: string;
  description: string;
  targetId: string; // Account or Opp ID
}
