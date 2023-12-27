import Profile from "@/components/profile";
import Sidebar from "@/components/sidebar";
import Sidefooter from "@/components/sidefooter";
import Suggestion from "@/components/suggestion";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const DetailThread = () => {
  return (
    <>
      <Flex>
        <Box w={"20%"}>
          <Sidebar />
        </Box>
        <Box w={"50%"}>
          <Box>
            <Avatar />
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
