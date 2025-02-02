export type Gender = 'Male' | 'Female';

export type GenderOption = Gender | 'Both';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: Gender;
}
