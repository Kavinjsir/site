import {
  Container,
  Box,
  Button,
  Heading,
  chakra,
  List,
  ListItem,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/legacy/image';
import NextLink from 'next/link';
import { IoLogoGithub, IoLogoSlack } from 'react-icons/io5';

import Section from '@/components/section';
import Paragraph from '@/components/paragraph';
import { BioSection, BioYear } from '@/components/bio';
import CopyButton from '@/components/copy-button';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => [`width`, `height`, `src`, `alt`].includes(prop),
});

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue(`whiteAlpha.500`, `whiteAlpha.200`)}
        css={{ backdropFilter: `blur(10px)` }}
      >
        Hello 👋, I&apos;m an open source programmer based in Boston.
      </Box>

      <Box display={{ md: `flex` }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tony J
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
              width="100"
              height="100"
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
          Before that, I worked in SecondSpectrum as a DevOps Engineer for 3
          yrs. There, I built infrastructure based on K8s, Prometheus, Grafana.
          Prior to that, I worked in Morgan Stanley where I developed the
          clearing system for Sydney Future Exchange. I&apos;d be interested in
          open source contribution especially in the field of cloud native.
          Recently, I&apos;ve been developing in the kubernetes-sigs community.
          You can meet me on @Kubernetes channel.
        </Paragraph>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Projects
          </Button>
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
        <Paragraph>
          Running, Classical Music, Programming, Japanese Animation
        </Paragraph>
      </Section>

      <Section delay="0.3">
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/kavinjsir" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @TianYi(Tony)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://kubernetes.slack.com/team/U0352A45K6K"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoSlack />}
              >
                @TianYi(Tony)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <CopyButton content="kavinjsir@gmail.com" />
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Page;
