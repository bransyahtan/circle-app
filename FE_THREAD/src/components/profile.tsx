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
import { BiEdit } from "react-icons/bi";
// import { useSelector } from "react-redux";

export default function Profile() {
  // // Use useSelector to get the profile data from the Redux store
  // const { profilePicture, username, fullName, bio} =
  //   useSelector((state) => state.auth);
  return (
    <Box>
      <Card variant={"filled"} m={4}>
        <CardHeader pb={0}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            My Profile
          </Text>
        </CardHeader>
        <CardBody>
          <Box
            w={"full"}
            h={"150px"}
            bgGradient={"linear(to-r, red.400, pink.600)"}
            borderRadius={"10"}
            position={"relative"}
          >
            <Image
              className="profilePicture"
              src="https://img.freepik.com/free-photo/beauty-people-emotions-summer-leisure-vacation-concept-tender-beautiful-asian-girl-white-dress-pointing-finger-upper-left-corner-inviting-take-look-new-promo-offer-pink-background_1258-59482.jpg?w=740&t=st=1702991448~exp=1702992048~hmac=a39b6e9640c658470fdcc3eb1bfee932a55425862f14b86dbf3aedef82fac833https://img.freepik.com/free-photo/beauty-people-emotions-summer-leisure-vacation-concept-tender-beautiful-asian-girl-white-dress-pointing-finger-upper-left-corner-inviting-take-look-new-promo-offer-pink-background_1258-59482.jpg?w=740&t=st=1702991448~exp=1702992048~hmac=a39b6e9640c658470fdcc3eb1bfee932a55425862f14b86dbf3aedef82fac833"
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
            ✨Bransyah Sultan✨
          </Text>
          <Text className="username" fontSize={"sm"} color={"gray.500"}>
            @separuhkafir
          </Text>
          <Text className="bio">
            picked over by the worms, and weird fishes
          </Text>
        </CardBody>
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
