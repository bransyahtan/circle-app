import React, { useState } from "react";
import { FormControl, Input, Text, Button, Flex } from "@chakra-ui/react";
// import apiConfig from "../api/apiConfig";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store/store";
import { register } from "@/redux/slices/authSlice";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleRegister = async () => {
    // hehe
    dispatch(register({ fullName, username, email, password }))
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: error.message,
        });
      });
  };
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <form>
        <FormControl
          isRequired
          display="flex"
          flexDirection="column"
          gap={3}
          width="350px"
          bg="transparent"
          color="white"
          borderRadius={10}
          padding={5}
        >
          <Text fontSize="2xl" fontWeight="bold" color="#04a51e">
            Create Account Circle
          </Text>
          <Input
            placeholder="Your Name"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            // test
          />
          <Input
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
            backgroundColor="#04a51e"
            color="white"
            onClick={handleRegister}
          >
            Create
          </Button>
          <Text>
            Already have an Account? <Link to="/login">Login</Link>
          </Text>
        </FormControl>
      </form>
    </Flex>
  );
};

export default Register;
