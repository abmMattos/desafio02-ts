import { Box, Center, ChakraProvider } from '@chakra-ui/react'

export const Header = () => {
  return(
    <ChakraProvider>
      <Box 
      display="flex" 
      h="70px" 
      padding="0% 10%">
      <Center fontWeight='semibold' fontSize="1.5em" >
        DIO CHALLENGE
      </Center>
    </Box>
    </ChakraProvider>
    
  )
}
