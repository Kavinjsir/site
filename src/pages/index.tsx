import { Container, Box, Heading, chakra } from '@chakra-ui/react';
import Image from 'next/image';

import Section from '@/components/section';
import Paragraph from '@/components/paragraph';

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
      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hi, I&apos;m Tony, currently studying for MSCS in Boston University.
          Before that, I worked in SecondSpectrum as a DevOps Engineer for 2
          yrs. There, I built infrastructure based on K8s, Prometheus, Grafana.
          Prior to that, I worked in Morgan Stanley where I developed the
          clearing system for Sydney Future Exchange. I&apos;d be interested in
          open source contribution especially in the field of cloud native.
          Recently, I&apos;ve been developing the Kubebuilder Community. You can
          meet me on @Kubernetes channel.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Page;
