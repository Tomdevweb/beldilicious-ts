import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

// Type User = type par défaut Firebase pour représenter un utilisateur authentifié.
type AuthState = {
  user: User | null;
  isLoading: Boolean;
};

const initialState: AuthState = {
  user: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoading = false;
    },

    logoutUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<Boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
