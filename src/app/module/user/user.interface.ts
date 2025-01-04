export type TUser = {
  name: string;
  age: number;
  email: string;
  photo?: string | null;
  role: 'user' | 'admin';
  userState: 'active' | 'in-active';
};
