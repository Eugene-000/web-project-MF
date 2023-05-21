export interface IUser {
  id: string;
  full_name: string;
  email: string;
  password?: string;
  delivery_address?: string;
  phone?: string;
}

export interface IUserUpdate {
  full_name: string;
  email: string;
  delivery_address?: string;
  phone?: string;
}