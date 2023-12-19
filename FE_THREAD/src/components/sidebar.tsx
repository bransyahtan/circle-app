import {
  Box,
  Stack,
  Heading,
  List,
  ListItem,
  Button,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import {
  BiHomeCircle,
  BiSearchAlt,
  BiHeart,
  BiUserCircle,
  BiLogOut,
  BiSun,
  BiMoon,
} from "react-icons/bi";

const items = [
  { icon: BiHomeCircle, text: "Home" },
  { icon: BiSearchAlt, text: "Search" },
  { icon: BiHeart, text: "Follows" },
  { icon: BiUserCircle, text: "Profile" },
];

export default function Sidebar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack h="100vh" justifyContent="space-between" p={8} position={"fixed"}>
      <Box>
        <Box>
          <Heading size={"2xl"} color={"#04a51e"} pb={8}>
            Circle
            <Button
              onClick={toggleColorMode}
              _hover={{ bg: "transparent" }}
              bg={"transparent"}
            >
              <Icon as={colorMode === "dark" ? BiMoon : BiSun} />
            </Button>
          </Heading>
        </Box>
        <List fontSize="1.5rem" spacing={4} cursor={"pointer"}>
          {items.map((item, index) => (
            <Box key={index} display="flex" alignItems="center">
              <item.icon />
              <ListItem ms={3}>{item.text}</ListItem>
            </Box>
          ))}
        </List>
        <Stack pt="10">
          <Button
            rounded="full"
            bgColor={"#04a51e"}
            _hover={{ bg: "#019119" }}
            w="200px"
          >
            Create Post
          </Button>
        </Stack>
      </Box>
      <Button leftIcon={<BiLogOut />} variant="unstyled">
        Logout
      </Button>
    </Stack>
  );
}
