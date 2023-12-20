import { FormControl, Input, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <form>
        <FormControl
          isRequired
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          width={"350px"}
          bg={"transparent"}
          color={"white"}
          borderRadius={10}
          padding={5}
        >
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"#04a51e"}>
            Create Account Circle
          </Text>
          <Input placeholder="Your Name" name="fullname" />
          <Input placeholder="Username" name="username" />
          <Input placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
          <Button backgroundColor={"#04a51e"} color={"white"}>
            Create
          </Button>
          <Text>
            Already have an Account? <Link to="/login">Login</Link>
          </Text>
        </FormControl>
      </form>
    </Flex>
  );
}
