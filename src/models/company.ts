export interface Company {
  _id?: string;
  companyId?: string;
  name: string;
  address?: {
    street: string;
    zipCode: string;
    city: string;
  };
  contacts?: {
    name: string;
    phoneNumber?: string;
  }[];
  accountManagers?: {
    name: string;
    budget: number;
  }[];
}
