"use client";

import AuthContextProvider from "@/contexts/AuthContext";
import React, { useEffect, useMemo, useReducer } from "react";
import Login from "./Login";

const AuthLayout = ({ children }) => {
  const initialLoginState = {
    isLoading: true,
    id: null,
    userToken: null,
  };

  const loginReducer = (state, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...state,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...state,
          id: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...state,
          id: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (token, email) => {
        let userToken = String(token);
        let userEmail = String(email);

        try {
          await useStorage.setItem("userToken", userToken);
          await useStorage.setItem("email", userEmail);
        } catch (e) {
          console.log(e);
        }

        dispatch({ type: "LOGIN", id: userEmail, token: userToken });
      },
      signOut: async () => {
        try {
          await useStorage.removeItem("userToken");
          await useStorage.removeItem("email");
          await useStorage.removeItem("user");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;

      try {
        userToken = await useStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 500);
  }, []);

  return (
    <AuthContextProvider authContext={authContext} loginState={loginState}>
      {loginState?.userToken !== null ? <Login /> : children}
    </AuthContextProvider>
  );
};

export default AuthLayout;
