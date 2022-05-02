import { AuthData } from './auth-data';
import { Contact } from './contact';

export interface Data {
  contacts: Contact[];
  users: AuthData[];
}
