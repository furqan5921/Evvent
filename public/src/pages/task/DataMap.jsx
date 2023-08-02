import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";
import LoaderComponent from "../../components/LoaderSpinner";

const DataMap = ({ param }) => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log(data);
  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8081/${param}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  if (loading) return <LoaderComponent />;
  return (
    <Box p={"14px"}>
      {data && data.length > 0 ? (
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2,1fr)",
            lg: "repeat(5,1fr)",
          }}
        >
          {data.map((el) => (
            <SingleTask
              title={el.title}
              description={el.description}
              category={el.category.category}
              key={el._id}
              username={el.user.name}
              isCompleted={el.completed}
              id={el._id}
            />
          ))}
        </Grid>
      ) : (
        <Flex
          w={"100%"}
          gap={5}
          minHeight="90vh"
          justify={"center"}
          align={"center"}
        >
          <Heading fontSize={"36px"} color="purple.600">
            No Tasks you have created yet
          </Heading>
        </Flex>
      )}
    </Box>
  );
};

export default DataMap;
