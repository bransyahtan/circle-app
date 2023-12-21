import apiConfig from "@/api/apiConfig";
import { FormControl, Input, Text, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password:""
  // })

  const handleLogin = async () => {
    try {
      const response = await apiConfig.post("/login", {
        email,
        password,
      });

      const data = response.data;
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
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
            Login Account Circle
          </Text>

          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            backgroundColor={"#04a51e"}
            color={"white"}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Text>
            Dont Have an Account? <Link to="/register">Register</Link>
          </Text>
        </FormControl>
      </form>
    </Flex>
  );
};

export default Login;
