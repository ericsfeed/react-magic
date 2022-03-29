import React from "react";
import { useNavigate } from "react-router-dom";

import { trackAuth } from "../services/trackAuth";

const ProtectedPage = ({ x }) => {
  const navigate = useNavigate();
  return (
    <div>
      <p>You are logged in. Welcome to the Protected page! 
        The value of x is {x}</p>
      <button
        onClick={() => {
          trackAuth.logout(() =>
            navigate("/login", { state: { from: { pathname: "/protected" } } })
          );
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default ProtectedPage;
