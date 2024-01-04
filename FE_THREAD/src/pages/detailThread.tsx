import Profile from "@/components/profile";
import Sidebar from "@/components/sidebar";
import Sidefooter from "@/components/sidefooter";
import Suggestion from "@/components/suggestion";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { BiRadioCircleMarked } from "react-icons/bi";

export const DetailThread = () => {
  return (
    <>
      <Flex>
        <Box w={"20%"}>
          <Sidebar />
        </Box>
        <Box w={"50%"}>
          <Box borderBottom={"1px"} borderX={"1px"} borderColor={"gray.500"}>
            <Button
              // onClick={handleNavigate}
              colorScheme={"green"}
              rounded={"full"}
              p={5}
              m={"4"}
              gap={2}
            >
              {/* <BiArrowBack size={20} /> Status */}
            </Button>
            <Flex p={4}>
              <Avatar
                // name={props.user.fullname}
                size="md"
                // src={props.user.photo_profile}
              />
              <Card w={"full"} variant={"unstyled"} pl={4}>
                <CardHeader>
                  <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
                    <Box>
                      <Heading size="sm">hey</Heading>
                    </Box>
                    <Box>
                      <Text color={"gray.500"}>@hey</Text>
                    </Box>
                    <Box>
                      <Flex align={"center"}>
                        <Icon as={BiRadioCircleMarked} color={"gray.500"} />
                        <Text color={"gray.500"}>10 hour ago</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody py={4}>
                  <Text>lah</Text>
                </CardBody>

                {/* {isPicture ? (
            <Image
              borderRadius={20}
              objectFit="cover"
              src={picture}
              width={"full"}
              height={"300px"}
              alt="Chakra UI"
            />
          ) : null} */}
              </Card>
            </Flex>
          </Box>
        </Box>
        <Box w={"30%"} right={0} h={"fit-content"}>
          <Profile />
          <Suggestion />
          <Sidefooter />
        </Box>
      </Flex>
    </>
  );
};
