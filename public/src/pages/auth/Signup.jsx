import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import Signin from "../../assets/Signup.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const initialData = {
  name: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const [signinData, setSigninData] = useState(initialData);
  console.log(signinData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8081/users/signup",
        signinData
      );

      if (res.status === 201) {
        setLoading(false);
        toast({
          title: "User Created Succesfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
      toast({
        title: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninData({
      ...signinData,
      [name]: value,
    });
  };
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection={["column", "column", "column", "row"]}
    >
      <Stack
        width={[1 / 2, 2 / 3, 2 / 3, 1 / 2]}
        justify="center"
        alignSelf="center"
      >
        <Image objectFit="cover" src={Signin} alt="Signup" />
      </Stack>
      <Box width="100%">
        <Stack
          direction="row"
          pl={16}
          pr={16}
          pt={8}
          pb={10}
          align="center"
          justify="flex-end"
        >
          <Text
            fontSize="xs"
            color="gray.400"
            lineHeight="tall"
            fontFamily="body"
          >
            Already have an account?
          </Text>
          <Link to={"/login"}>
            <Button
              size="xs"
              bg="white"
              color="gray.500"
              border="1px"
              borderColor="gray.300"
              borderRadius="full"
              py={3}
              px={4}
              fontWeight="medium"
              cursor="pointer"
              _focus={{
                outline: "none",
              }}
              _hover={{
                bg: "white",
              }}
            >
              SIGN IN
            </Button>
          </Link>
        </Stack>
        <Stack pl={16} pr={16} mb={10}>
          <Text m={0} fontSize="3xl" fontWeight="bold" fontFamily="body">
            Hello there!
          </Text>
          <Text
            m={0}
            fontSize="sm"
            fontFamily="body"
            color="gray.400"
            lineHeight="tall"
          >
            Register your account
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack pl={16} pr={24} spacing={6}>
            <FormControl id="name">
              <FormLabel
                fontSize="sm"
                lineHeight="tall"
                fontFamily="body"
                fontWeight="normal"
                pb={"0.5rem"}
              >
                Name
              </FormLabel>
              <Input
                isRequired
                onChange={handleChange}
                value={signinData.name}
                type="text"
                size="sm"
                borderColor="gray.200"
                focusBorderColor="purple.500"
                text="sm"
                name="name"
                lineHeight="tall"
                placeholder="Apoorva Sharma"
                fontFamily="body"
                _placeholder={{ color: "gray.400" }}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel
                fontSize="sm"
                lineHeight="tall"
                fontFamily="body"
                fontWeight="normal"
                pb={"0.5rem"}
              >
                Email{" "}
              </FormLabel>
              <Input
                isRequired
                onChange={handleChange}
                value={signinData.email}
                type="email"
                name="email"
                size="sm"
                borderColor="gray.200"
                focusBorderColor="purple.500"
                text="sm"
                lineHeight="tall"
                placeholder="apoorvas@gmail.com"
                fontFamily="body"
                _placeholder={{ color: "gray.400" }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel
                fontSize="sm"
                lineHeight="tall"
                fontFamily="body"
                fontWeight="normal"
                pb={"0.5rem"}
              >
                Password{" "}
              </FormLabel>
              <Input
                isRequired
                onChange={handleChange}
                value={signinData.password}
                type="password"
                size="sm"
                borderColor="gray.200"
                focusBorderColor="purple.500"
                text="sm"
                name="password"
                lineHeight="tall"
                placeholder="8+ characters"
                fontFamily="body"
                _placeholder={{ color: "gray.400" }}
              />
            </FormControl>
            <Button
              type="submit"
              my={3}
              size="md"
              w={170}
              h={45}
              borderRadius="40px"
              bg="purple.500"
              color="white"
              border="0"
              fontWeight="400"
              fontFamily="body"
              fontSize="sm"
              cursor="pointer"
              _focus={{
                outline: "none",
              }}
              _hover={{
                bg: "purple.500",
              }}
              boxShadow="lg"
              isLoading={loading}
            >
              Signup
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
