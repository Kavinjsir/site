import Head from 'next/head';
import type { NextRouter } from 'next/router';
import { Box, Container } from '@chakra-ui/react';

import Navbar from '@/components/navbar';

interface MainProps {
  children: React.ReactNode;
  router: NextRouter;
}

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tony - Site</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
