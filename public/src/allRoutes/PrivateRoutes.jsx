import { useToast } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateComponent = ({ children }) => {
  const toast = useToast();
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  } else {
    toast({
      title: "Please Sign In",
      description: "Sign In to avail the services",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
    return <Navigate to={"/login"} />;
  }
};

export default PrivateComponent;
