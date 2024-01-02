import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { fetchUsers } from './ActionCreators';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetchingLoading(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchUsers.pending, (state) => {})

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.users = action.payload;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
