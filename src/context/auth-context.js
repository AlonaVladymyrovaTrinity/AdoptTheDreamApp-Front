import { createContext } from 'react';

const AuthContext = createContext({
  userId: null,
  userName: null,
});

export default AuthContext;
