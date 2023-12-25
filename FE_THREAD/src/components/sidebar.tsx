import { logout } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store/store";
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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const items = [
  { icon: BiHomeCircle, text: "Home" },
  { icon: BiSearchAlt, text: "Search" },
  { icon: BiHeart, text: "Follows" },
  { icon: BiUserCircle, text: "Profile" },
];

export default function Sidebar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "sukses",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        })
      );
  };

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
      <Button
        onClick={() => {
          handleLogout();
        }}
        leftIcon={<BiLogOut />}
        variant="unstyled"
      >
        Logout
      </Button>
    </Stack>
  );
}
