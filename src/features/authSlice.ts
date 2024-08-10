import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, CustomUser } from "../utils/types";
// import { User } from "firebase/auth";

// Type User = type par défaut Firebase pour représenter un utilisateur authentifié.
// Utilisation d'un type custom CustomUser au lieu de User de firebase a trop de propriétés attendue dont on a pas besoin et cela cause des erreurs de typage dans mon router (voir types.ts)

const initialState: AuthState = {
  user: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<CustomUser>) => {
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
