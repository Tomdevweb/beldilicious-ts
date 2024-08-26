export type CustomUser = {
  uid: string;
  displayName: string | null;
  email: string | null;
};

export type AuthState = {
  user: CustomUser | null;
  isLoading: Boolean;
};

export type Restaurant = {
  id: string;
  name: string;
  address: string;
  city: string;
  description: string;
  menu: {
    starters: { name: string; price: number }[];
    maincourses: { name: string; price: number }[];
    desserts: { name: string; price: number }[];
    drinks: { name: string; price: number }[];
  };
};

export type Product = {
  name: string;
  price: number;
};
