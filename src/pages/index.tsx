import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="teal" p={3} mb={6} align="center">
        Waaaarning! Waaaarning!! 哇宁!!!
      </Box>

      <Box display={{ md: `flex` }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tony Gu
          </Heading>
        </Box>
      </Box>
      <p>TODO: shuoshuo ni zi ji</p>
    </Container>
  );
};

export default Page;
