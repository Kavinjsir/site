import {
  Container,
  Badge,
  Heading,
  Link,
  List,
  ListItem,
  ListIcon,
  AspectRatio,
  Divider,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon, CheckIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { Title, Meta } from '@/components/work';
import P from '@/components/paragraph';
import Layout from '@/components/layouts/article';
import Section from '@/components/section';
import thumbKb from '@/public/images/works/kubebuilder_logo.png';

const Work = () => (
  <Layout title="Grafana plugin">
    <Container>
      <Title>
        Kubebuilder Grafana Plugin <Badge>2022-</Badge>
      </Title>
      <Image
        src={thumbKb}
        alt="Kubebuilder Grafana Plugin"
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <P>
        A Kubebuilder plugin that scaffolds Grafana Dashboards to simpilify your
        operator observability through rich metrics from controller-runtime.
      </P>

      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://master.book.kubebuilder.io/plugins/grafana-v1-alpha.html"
              target="_blank"
            >
              master.book.kubebuilder.io{` `}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Origin</Meta>
            <Link
              href="https://github.com/kubernetes-sigs/kubebuilder/issues/2183"
              target="_blank"
            >
              kubernetes-sigs/kubebuilder/issues#2183{` `}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Golang, Grafana, Prometheus, Kubernetes</span>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link
              href="https://github.com/kubernetes-sigs/kubebuilder/tree/v3.6.0/pkg/plugins/optional/grafana/v1alpha"
              target="_blank"
            >
              kubernetes-sigs/kubebuilder:v3.6.0 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Section>

      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          RoadMap
        </Heading>

        <List ml={4} my={4} spacing={3}>
          <ListItem>
            <ListIcon as={CheckIcon} color="teal.500" />
            Phase 0: Documentation for Metrics References{` `}
            <Link
              href="https://github.com/kubernetes-sigs/kubebuilder/pull/2568"
              target="_blank"
            >
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Divider />
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="teal.500" />
            Phase 1.0: Initialize the Grafana Plugin{` `}
            <Link
              href="https://github.com/kubernetes-sigs/kubebuilder/pull/2718"
              target="_blank"
            >
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="teal.500" />
            Phase 1.1: Display CPU/Memory Usage{` `}
            <Link
              href="https://github.com/kubernetes-sigs/kubebuilder/pull/2797"
              target="_blank"
            >
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="teal.500" />
            Phase 1.2: Add WorkQueue Panels{` `}
            <Link
              href="https://github.com/kubernetes-sigs/kubebuilder/pull/2834"
              target="_blank"
            >
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Divider />
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="teal.500" />
            Phase 2.0: Support Scaffolding on Custom Metrics{` `}
            <Link
              href="https://github.com/kubernetes-sigs/kubebuilder/pull/2858"
              target="_blank"
            >
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Section>

      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          Mentors
        </Heading>

        <List ml={4} my={4}>
          <ListItem>
            <Link href="https://github.com/camilamacedo86" target="_blank">
              Camila{` `}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/varshaprasad96" target="_blank">
              Varsha{` `}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/rashmigottipati" target="_blank">
              Rashmi{` `}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          bg={useColorModeValue(`whiteAlpha.500`, `whiteAlpha.200`)}
          css={{ backdropFilter: `blur(10px)` }}
        >
          Special thanks for my mentors! Camila has helped me greatly on landing
          the community, managing our program and supporting me greatly on every
          perspective. Varsha is my direct leader that always brought me great
          ideas on coding, patterns, feature exploration. She&apos;s always
          reviewing my code carefully with rich guidance. And a big thanks to
          Rashmi where she has brought great ideas when we were facing
          challenges.
        </Box>
      </Section>

      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          Demo I: Basic Usages
        </Heading>
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-w_JjcV8jXc"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Section>
      <Section delay="0.1">
        <Heading as="h3" variant="section-title">
          Demo II: Render Custom Metrics
        </Heading>
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/x_0FHta2HXc"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Section>
    </Container>
  </Layout>
);

export default Work;
// export { getServerSideProps } from '../../components/chakra';
