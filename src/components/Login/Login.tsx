import { Center, ChakraProvider, Input, Box } from "@chakra-ui/react";
import { login } from "../../services/login";
import { LoginButton } from "./LoginButton";

export const CardLogin = () => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
          <Center>
            <h2>Faça o login</h2>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />          
          <LoginButton event={login} />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
