interface Company {
  name: string;
}

export interface Contact {
  id: number;
  name: string;
  city: string;
  email: string;
  phone: string;
  company: Company;
}
