import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {isLoading && 'loading...'}
      {error && 'error...'}
      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
