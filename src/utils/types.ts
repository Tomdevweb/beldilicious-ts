export type CustomUser = {
  uid: string;
  displayName: string | null;
  email: string | null;
};

export type AuthState = {
  user: CustomUser | null;
  isLoading: Boolean;
};
