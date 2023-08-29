"use client";

import React, { createContext, useEffect, useMemo, useReducer } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ authContext, loginState, children }) => {
  const { signIn, signOut } = authContext;
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        loginState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
