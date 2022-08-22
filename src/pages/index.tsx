import { Container, Box, Button, Heading, chakra } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/link';

import Section from '@/components/section';
import Paragraph from '@/components/paragraph';
import { BioSection, BioYear } from '@/components/bio';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => [`width`, `height`, `src`, `alt`].includes(prop),
});

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="teal" p={3} mb={6}>
        Waaaarning! Waaaarning!! 哇宁!!!
      </Box>

      <Box display={{ md: `flex` }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tony Gu
          </Heading>
          <p>To Be Pragmatic( Developer / Student / Contributor )</p>
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

        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay="0.2">
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in Shanghai (上海), China.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the Bachelor&apos;s Program in the Software School of SJTU
          (上海交通大学)
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Worked at Morgan Stanley
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2021</BioYear>
          Worked at SecondSpectrum
        </BioSection>
        <BioSection>
          <BioYear>2022 -</BioYear>
          Studying at BU; Open-source Contribution
        </BioSection>
      </Section>

      <Section delay="0.3">
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Running, Classical Music, Programming</Paragraph>
      </Section>
    </Container>
  );
};

export default Page;
