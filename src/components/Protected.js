import React from "react";
import BelumLogin from "../pages/BelumLogin";

const Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <BelumLogin />;

  return children;
};

export default Protected;
