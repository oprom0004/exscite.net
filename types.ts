export interface NavItem {
  label: string;
  path: string;
}

export interface PageMeta {
  title: string;
  description: string;
  h1: string;
}

export enum SafetyLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}