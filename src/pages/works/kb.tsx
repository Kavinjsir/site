import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '@/components/work';
import P from '@/components/paragraph';
import Layout from '@/components/layouts/article';

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Kubebuilder Grafana Plugin <Badge>2022-</Badge>
      </Title>
      <P>
        A Kubebuilder plugin that scaffolds Grafana Dashboards to simpilify your
        operator observability through rich metrics from controller-runtime.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://book.kubebuilder.io/plugins/grafana-v1-alpha.html"
            target="_blank"
          >
            https://book.kubebuilder.io/plugins/grafana-v1-alpha.html{` `}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Kubernetes</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Golang, Grafana, Prometheus, Kubernetes</span>
        </ListItem>
        <ListItem>
          <Meta>Dev Logs</Meta>
          <Link
            href="https://github.com/kubernetes-sigs/kubebuilder/issues?q=author%3AKavinjsir+is%3Aclosed+grafana"
            target="_blank"
          >
            Commit History @Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-w_JjcV8jXc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
