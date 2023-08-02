import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthRoute from "./AuthRoute";

const Navbar = ({ data }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    toast({
      title: "Logged Out Succesfully.",
      description: "Please Sign In back to avail the services",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/login");
  };
  return (
    <Box
      display={{ base: "none", md: "block" }}
      w={"100%"}
      p={"14px"}
      pr={"18px"}
      bg="gray.100"
      marginTop={"0px"}
    >
      <Flex justify={"space-between"}>
        <Heading
          fontSize={{ base: "20px", md: "24px", lg: "28px" }}
          fontWeight="bold"
          color="purple.600"
          letterSpacing="wide"
        >
          Task App
        </Heading>
        <Flex w={"60%"} justify={"space-between"}>
          <Flex align={"center"} w={"70%"} justify={"space-between"}>
            {data.map(({ link, destination }, i) => (
              <Link key={i} to={link}>
                <Text
                  fontSize="16px"
                  fontWeight="bold"
                  color="blue.500"
                  _hover={{ color: "blue.700", textDecoration: "underline" }}
                >
                  {destination}
                </Text>
              </Link>
            ))}
          </Flex>
          <Flex justify={"space-around"} w="38%" align={"center"}>
            {!token ? (
              <AuthRoute />
            ) : (
              <Button
                onClick={handleLogout}
                fontSize="16px"
                fontWeight="bold"
                color="blue.500"
                _hover={{ color: "blue.700", textDecoration: "underline" }}
              >
                Logout
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
