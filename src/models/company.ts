import { Address } from './Address';

export interface Company {
  _id?: string;
  companyId?: string;
  name: string;
  address?: Address;
  contacts?: {
    name: string;
    phoneNumber?: string;
  }[];
  accountManagers?: {
    employeeId: string;
    name: string;
    budget: number;
  }[];
}
