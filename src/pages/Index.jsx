import { Box, Flex, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Index = () => {
  const bg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');
  const color = useColorModeValue('gray.700', 'whiteAlpha.900');

  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      bgGradient="linear(to-br, gray.800, gray.900)"
    >
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg={bg}
        color={color}
        backdropFilter="blur(10px)"
      >
        <Box textAlign="center">
          <Heading mb={6}>Welcome to Verbatim</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <Text>
            Verbatim is your new go-to social media platform. Connect, share, and engage with content that matters to you.
          </Text>
        </Box>
        <Flex align="center" justify="center" mt={8}>
          <Button leftIcon={<FaFacebook />} colorScheme="facebook" mr={2}>
            Facebook
          </Button>
          <Button leftIcon={<FaTwitter />} colorScheme="twitter" mr={2}>
            Twitter
          </Button>
          <Button leftIcon={<FaInstagram />} colorScheme="pink">
            Instagram
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;