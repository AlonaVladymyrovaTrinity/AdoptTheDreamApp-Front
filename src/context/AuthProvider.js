import { useEffect, useMemo, useReducer, useState } from 'react';
import Cookies from 'js-cookie';
import AuthContext from './auth-context';
import { login, logout, register } from '../actions/userAction';
import { initialState, userReducer } from '../reducers/userReducer';

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [userId, setUserId] = useState(Cookies.get('user-id') || null);
  const [userName, setUserName] = useState(Cookies.get('user-name') || null);

  useEffect(() => {
    if (userId !== Cookies.get('user-id')) {
      setUserId(Cookies.get('user-id') || null);
      setUserName(Cookies.get('user-name') || null);
    }
  }, [state, userId]);

  const value = useMemo(
    () => ({
      state,
      login,
      logout,
      register,
      userId,
      userName,
      dispatch,
    }),
    [userId, userName, state]
  );
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
