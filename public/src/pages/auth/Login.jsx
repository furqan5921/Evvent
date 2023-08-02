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
  email: "",
  password: "",
};
const Login = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState(initialData);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8081/users/login",
        loginData
      );
      console.log(res);
      if (res.status === 200) {
        const { token, refreshToken } = res.data;
        toast({
          title: "Logged In Succesfully.",
          description:
            "Welcome back! assures users that their login process was completed without any issues.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setLoading(false);
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/");
      }
      if (res.status === 401) {
        toast({
          title: "Password is incorrect",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
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
            Need an Account?
          </Text>
          <Link to={"/signup"}>
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
              SIGN UP
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
            Login your account
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack pl={16} pr={24} spacing={6}>
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
                type="email"
                name="email"
                onChange={handleChange}
                value={loginData.email}
                size="sm"
                isRequired
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
                onChange={handleChange}
                value={loginData.password}
                type="password"
                isRequired
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
              isLoading={loading}
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
              type="submit"
            >
              Signin
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
