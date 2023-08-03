import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const initialData = {
  title: "",
  description: "",
  category: "",
  isCompleted: false,
};
const CreateTask = () => {
  const toast = useToast();
  const token = localStorage.getItem("token");
  const [taskData, setTaskData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://evvent-backend.onrender.com/post",
        taskData,
        header
      );
      console.log(res);
      if (res.data) {
        setLoading(false);
        toast({
          title: "Task created Succesfully.",
          description:
            "Congratulations! You have successfully created your task",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setTaskData(initialData);
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
  const getAllCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8081/categories", header);
      if (res.data) {
        setCategories(res.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAllCategories();
    // eslint-disable-next-line
  }, []);
  console.log(taskData);
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection={["column", "column", "column", "row"]}
    >
      <Box width="100%">
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
            Create your Tasks!
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
                Title{" "}
              </FormLabel>
              <Input
                onChange={handleChange}
                value={taskData.title}
                type="text"
                name="title"
                size="sm"
                isRequired
                borderColor="gray.200"
                focusBorderColor="purple.500"
                text="sm"
                lineHeight="tall"
                placeholder="Enter title"
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
                Descripton{" "}
              </FormLabel>
              <Input
                type="text"
                isRequired
                onChange={handleChange}
                value={taskData.description}
                size="sm"
                borderColor="gray.200"
                focusBorderColor="purple.500"
                text="sm"
                name="description"
                lineHeight="tall"
                placeholder="Enter description"
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
                Category{" "}
              </FormLabel>
              <Select
                onChange={handleChange}
                value={taskData.category}
                type="text"
                isRequired
                size="sm"
                borderColor="gray.200"
                focusBorderColor="purple.500"
                text="sm"
                name="category"
                lineHeight="tall"
                placeholder="Choose a Category"
                fontFamily="body"
                _placeholder={{ color: "gray.400" }}
              >
                {categories &&
                  categories.map((el) => (
                    <option key={el._id} value={el._id}>
                      {el.category}
                    </option>
                  ))}
              </Select>
            </FormControl>
            <Button
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
              isLoading={loading}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default CreateTask;
