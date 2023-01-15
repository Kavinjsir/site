import { Box, Container } from '@chakra-ui/react';
// import dynamic from 'next/dynamic';
import Head from 'next/head';
import type { NextRouter } from 'next/router';

// import ModelLoader from '@/components/model-loader';
import Navbar from '@/components/navbar';

/*
const LazyModel = dynamic(() => import(`@/components/model`), {
  ssr: false,
  loading: () => <ModelLoader />,
});
 */

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
        {/* <LazyModel /> */}

        {children}
      </Container>
    </Box>
  );
};

export default Main;
