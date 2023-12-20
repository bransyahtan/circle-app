import { Box, Flex } from "@chakra-ui/react";
import Profile from "@/components/profile";
import Sidebar from "@/components/sidebar";
import Suggestion from "@/components/suggestion";
import Sidefooter from "@/components/sidefooter";
import Feed from "@/components/feed";
import Post from "@/components/post";
import IFeed from "@/types/feed";
import { useEffect, useState } from "react";
import data from "@/mocks/feed.json";

const Home = () => {
  const [feed, setFeed] = useState<IFeed[]>([]);
  useEffect(() => {
    setFeed(data);
  }, []);
  return (
    <Flex>
      <Box w={"20%"}>
        <Sidebar />
      </Box>
      <Box w={"50%"}>
        <Post />
        {feed.map((item) => (
          <Feed key={item.id} {...item} />
        ))}
      </Box>
      <Box w={"30%"} right={0} h={"fit-content"}>
        <Profile />
        <Suggestion />
        <Sidefooter />
      </Box>
    </Flex>
  );
};

export default Home;
