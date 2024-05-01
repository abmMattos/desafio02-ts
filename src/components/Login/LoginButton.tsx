import { Button } from "@chakra-ui/react";

interface Login {
  event: () => void
}

export const LoginButton = ({ event }: Login): any => {
  return (
    <Button
      onClick={event}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      Button
    </Button>
  );
};