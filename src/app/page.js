"use client";

import Menu from "@/components/menu";
import Login from "@/components/screen/Auth/Login";
import Dashboard from "@/components/screen/Dashboard";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export default function Home() {
  const { loginState } = useContext(AuthContext);

  return (
    <>
      {loginState?.userToken !== null ? (
        <Login />
      ) : (
        <>
          <Menu />
          <Dashboard />
        </>
      )}
    </>
  );
}
