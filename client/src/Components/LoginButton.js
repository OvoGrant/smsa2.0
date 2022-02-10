import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => { 
  const { loginWithRedirect } = useAuth0();

  return <button className="border-2 text-green-500 border-green-500 rounded p-2" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
