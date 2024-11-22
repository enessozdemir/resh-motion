import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  loading: boolean;
  error: string | null;
  currentUser: any | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart(state) {
      state.loading = true;
      state.error = null;
    },
    signInSuccess(state, action) {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = null;
    },

    signInFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload; // Hata mesajı
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, clearError } =
  userSlice.actions;
export default userSlice.reducer;
