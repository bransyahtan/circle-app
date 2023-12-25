/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Text,
  Icon,
  Flex,
  CardFooter,
} from "@chakra-ui/react";
import { RootState } from "../redux/store/store";
import { useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "@/redux/slices/userSlice";
import { jwtDecode } from "jwt-decode";

export default function Profile() {
  const dataUser = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch();
  const userId: any = localStorage.getItem("token");
  const token: any = jwtDecode(userId);

  console.log(token.user.id);
  useEffect(() => {
    console.log(userId);
    dispatch(getAllUser());
  }, [userId]);

  const userLogin = dataUser?.filter(
    (user: any) => Number(token.user.id) === user.id
  );
  useEffect(() => {
    if (dataUser) {
      console.log(dataUser);
      console.log(userLogin);
    }
  }, [dataUser, userLogin]);

  return (
    <Box>
      <Card variant={"filled"} m={4}>
        <CardHeader pb={0}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            My Profile
          </Text>
        </CardHeader>

        {userLogin.map((user: any, index: number) => {
          return (
            <CardBody key={index}>
              <Box
                w={"full"}
                h={"150px"}
                bgGradient={"linear(to-r, red.400, pink.600)"}
                borderRadius={"10"}
                position={"relative"}
              >
                <Image
                  className="profilePicture"
                  src={user.profilePicture}
                  boxSize={"70px"}
                  rounded={"full"}
                  borderWidth={2}
                  borderColor={"gray.200"}
                  borderStyle={"solid"}
                  position={"absolute"}
                  bottom={"-40px"}
                  left={"30px"}
                />
              </Box>
              <Button
                bgColor={"#04a51e"}
                _hover={{ bg: "#019119" }}
                display={"block"}
                ml={"auto"}
                borderRadius={"20"}
                size={"sm"}
                mt={2}
                border={"1px"}
                borderColor={"gray.500"}
              >
                <Flex alignItems={"center"} gap={2}>
                  <Icon as={BiEdit} /> Edit Profile
                </Flex>
              </Button>
              <Text
                className="fullName"
                fontWeight={"bold"}
                fontSize={"2xl"}
                mt={4}
              >
                ✨{user.fullName}✨
              </Text>
              <Text className="username" fontSize={"sm"} color={"gray.500"}>
                @{user.username}
              </Text>
              <Text className="bio">{user.profileDescription}</Text>
            </CardBody>
          );
        })}
        <CardFooter justifyContent={"start"} gap={4} pt={0}>
          <Flex gap={2}>
            <Text fontWeight={"bold"}>666</Text>
            <Text color={"gray.500"}>Following</Text>
          </Flex>
          <Flex gap={2}>
            <Text fontWeight={"bold"}>999</Text>
            <Text color={"gray.500"}>Followers</Text>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
  );
}
