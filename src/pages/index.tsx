import { Container, Box, Heading, chakra } from '@chakra-ui/react';
import Image from 'next/image';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => [`width`, `height`, `src`, `alt`].includes(prop),
});

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="teal" p={3} mb={6}>
        Waaaarning! Waaaarning!! 哇宁!!!
      </Box>

      <Box display="flex">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tony Gu
          </Heading>
          <p>TODO: lalalalala</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
