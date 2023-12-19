import { Box, Flex } from "@chakra-ui/react";
import Profile from "@/components/profile";
import Sidebar from "@/components/sidebar";
import Suggestion from "@/components/suggestion";
import Sidefooter from "@/components/sidefooter";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <Flex>
      <Box w={"20%"}>
        <Sidebar />
      </Box>
      <Box w={"50%"}>
        <Outlet />
      </Box>
      <Box w={"30%"} right={0} h={"fit-content"}>
        <Profile />
        <Suggestion />
        <Sidefooter />
      </Box>
    </Flex>
  );
};

export default HomeLayout;
