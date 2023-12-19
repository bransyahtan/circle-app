import { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
  Avatar,
  Button,
} from "@chakra-ui/react";

interface SuggestionItem {
  id: number;
  avatar: string;
  fullname: string;
  username: string;
}

export default function Suggestion() {
  const suggest: SuggestionItem[] = [
    {
      id: 1,
      avatar: "https://bit.ly/dan-abramov",
      fullname: "Dan Abramov",
      username: "@danabra",
    },
    {
      id: 2,
      avatar: "https://bit.ly/dan-abramov",
      fullname: "Dan Abramov",
      username: "@danabra",
    },
    {
      id: 3,
      avatar: "https://bit.ly/dan-abramov",
      fullname: "Dan Abramov",
      username: "@danabra",
    },
    {
      id: 4,
      avatar: "https://bit.ly/dan-abramov",
      fullname: "Dan Abramov",
      username: "@danabra",
    },
  ];

  const [followStates, setFollowStates] = useState<boolean[]>(
    Array<boolean>(suggest.length).fill(false)
  );

  const handleFollowToggle = (index: number) => {
    const newFollowStates = [...followStates];
    newFollowStates[index] = !newFollowStates[index];
    setFollowStates(newFollowStates);
  };

  return (
    <Box>
      <Card variant={"filled"} m={4}>
        <CardHeader pb={0}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Suggested for you
          </Text>
        </CardHeader>
        <CardBody pt={2} overflow={"hidden"}>
          <Box
            h={"300px"}
            overflowY={"scroll"}
            pr={2}
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {suggest.map((item, index) => (
              <Flex gap={2} key={item.id} w={"full"} my={"3"}>
                <Avatar name={item.fullname} src={item.avatar} />
                <Box>
                  <Text fontWeight={"bold"}>{item.fullname}</Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    {item.username}
                  </Text>
                </Box>
                <Button
                  ml={"auto"}
                  border={"1px"}
                  borderColor={"gray.500"}
                  onClick={() => handleFollowToggle(index)}
                >
                  {followStates[index] ? "Following" : "Follow"}
                </Button>
              </Flex>
            ))}
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
