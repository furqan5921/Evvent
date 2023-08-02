import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const SingleTask = ({
  title,
  description,
  category,
  username,
  isCompleted,
  id,
}) => {
  const handleUpdate = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:8081/tasks/${id}`);
    } catch (error) {}
  };
  return (
    <GridItem>
      <Card>
        <CardHeader>
          <Heading
            fontSize={{ base: "20px", md: "24px", lg: "28px" }}
            fontWeight="bold"
            color="purple.600"
            letterSpacing="wide"
            size="md"
          >
            Task Details
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading color="purple.600" size="xs" textTransform="uppercase">
                Title : {title}
              </Heading>
              <Text color="purple.600" pt="2" fontSize="sm">
                Description : {description}
              </Text>
              <Text
                color="purple.600"
                pt="2"
                textTransform={"capitalize"}
                fontSize="sm"
              >
                Category : {category}
              </Text>
              <Text
                color="purple.600"
                pt="2"
                textTransform={"capitalize"}
                fontSize="xs"
              >
                Created By : {username}
              </Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <Button
                w={"100%"}
                size="md"
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
                onClick={() => handleUpdate(id)}
              >
                {isCompleted ? "Mark as Pending" : "Mark as Completed"}
              </Button>
              <Button
                w={"100%"}
                size="md"
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
              >
                Delete Task
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default SingleTask;
