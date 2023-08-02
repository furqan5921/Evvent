import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const AuthRoute = () => {
  return (
    <>
      <Link to={"/login"}>
        <Text
          fontSize="16px"
          fontWeight="bold"
          color="blue.500"
          _hover={{ color: "blue.700", textDecoration: "underline" }}
        >
          Login
        </Text>
      </Link>
      <Link to={"/signup"}>
        <Text
          fontSize="16px"
          fontWeight="bold"
          color="blue.500"
          _hover={{ color: "blue.700", textDecoration: "underline" }}
        >
          Signup
        </Text>
      </Link>
    </>
  );
};

export default AuthRoute;
