"use client";

import React, { useContext, useState } from "react";
import Input from "@/components/Input";
import { AuthContext } from "@/contexts/AuthContext";
import call from "@/functions/call";
// import useStorage from "hooks/useStorage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      setLoading(true);
      try {
        await call.post("signin", { email, password }).then(async (data) => {
          if (data.data?.status) {
            const token = data.data?.token;
            useStorage.setItem("user", JSON.stringify(data.data?.user));
            signIn(token, email);
            setEmail("");
            setPassword("");
          } else {
            //alert
          }
        });
      } catch (err) {
        console.log("hello", err);
        setLoading(false);
      }
      setLoading(false);
    } else {
      //alert
    }
  };

  return (
    <>
      {/* <div
        style={{
          width: "100%",
          height: 300,
          position: "relative",
        }}
      >
        <Image
          src="/image/background.jpg"
          alt="Background Image"
          fill
          loader={imageLoader}
          style={65}
        />
        <div className={styles.cover} />
      </div> */}

      <form onSubmit={handleSignIn}>
        <Input placeholder="Email" value={email} setValue={setEmail} />
        <Input placeholder="Password" value={password} setValue={setPassword} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
