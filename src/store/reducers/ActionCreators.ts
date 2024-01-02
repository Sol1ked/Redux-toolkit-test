import axios from 'axios';
import { AppDispatch } from '../store';
import { IUser } from '../../models/IUser';
import { userSlice } from './UserSlice';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetchingLoading());
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    dispatch(userSlice.actions.usersFetchingSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.usersFetchingError(getErrorMessage(e)));
  }
};
