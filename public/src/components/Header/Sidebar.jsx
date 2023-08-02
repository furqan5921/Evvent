
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Heading,
  Box,
  Flex,
  Stack,
  Text,
  Divider,
} = require("@chakra-ui/react");
const Sidebar = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box display={{ base: "block", md: "none" }} p={"14px"} bg="gray.100">
      <Flex justifyContent={"space-between"}>
        <Heading
          fontSize={{ base: "20px", md: "24px", lg: "28px" }}
          fontWeight="bold"
          color="purple.600"
          letterSpacing="wide"
        >
          Task App
        </Heading>
        <HamburgerIcon
          color={"purple.600"}
          onClick={onOpen}
          fontSize={25}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading
              fontSize={{ base: "20px", md: "24px", lg: "28px" }}
              fontWeight="bold"
              color="purple.600"
              letterSpacing="wide"
            >
              Task App
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <Stack h={"full"} align={"center"} justify={"space-around"}>
              {data.map(({ link, destination }, i) => (
                <Box key={i}>
                  <Link to={link}>
                    <Text
                      onClick={onClose}
                      fontSize="16px"
                      fontWeight="bold"
                      color="blue.500"
                      _hover={{
                        color: "blue.700",
                        textDecoration: "underline",
                      }}
                    >
                      {destination}
                    </Text>
                  </Link>
                  <Divider />
                </Box>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
