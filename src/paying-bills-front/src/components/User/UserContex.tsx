import React, { useContext } from 'react';

export type AuthContextUser = {
  email : string | null;
  setEmail: (u: string | null) => void;
};

export const AuthContext = React.createContext<AuthContextUser>({
  email: null,
  setEmail: () => {},
});

export const useAuthContext = () => useContext(AuthContext);