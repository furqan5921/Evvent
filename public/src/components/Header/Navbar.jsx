import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box w={"100%"} p={"14px"} pr={"18px"} bg="gray.100" marginTop={"0px"}>
      <Flex justify={"space-between"}>
        <Heading
          fontSize={{ base: "20px", md: "24px", lg: "28px" }}
          fontWeight="bold"
          color="purple.600"
          letterSpacing="wide"
        >
          Task App
        </Heading>
        <Flex align={"center"} w={"60%"} justify={"space-between"}>
          <Link to={"/"}>
            <Text
              fontSize="16px"
              fontWeight="bold"
              color="blue.500"
              _hover={{ color: "blue.700", textDecoration: "underline" }}
            >
              Tasks
            </Text>
          </Link>
          <Link to={"/completed"}>
            <Text
              fontSize="16px"
              fontWeight="bold"
              color="blue.500"
              _hover={{ color: "blue.700", textDecoration: "underline" }}
            >
              Completed
            </Text>
          </Link>
          <Link to={"/pending"}>
            <Text
              fontSize="16px"
              fontWeight="bold"
              color="blue.500"
              _hover={{ color: "blue.700", textDecoration: "underline" }}
            >
              Pending
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
