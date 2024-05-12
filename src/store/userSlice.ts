import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  loggedIn: boolean;
  username: string;
  email: string;
  password: string;
}

const initialState: UserState = {
  loggedIn: false,
  username: '',
  email: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      state.loggedIn = true;
      state.username = action.payload.username;
    },
    registerUser: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.loggedIn = true;
      state.username = action.payload.email;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { loginUser, registerUser, updateEmail, updatePassword } =
  userSlice.actions;

export default userSlice.reducer;
