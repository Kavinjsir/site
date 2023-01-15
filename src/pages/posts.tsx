import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

// import { PostItem } from '@/components/post-item';
import Layout from '@/components/layouts/article';
// import Section from '@/components/section';
// import thumbKb from '@/public/images/works/kubebuilder_logo.png';

const Posts = () => {
  return (
    <Layout title="posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Posts
        </Heading>
        <SimpleGrid columns={1} gap={6}>
          {/*
          <Section>
            <PostItem
              id="kb"
              title="Kubebuilder Grafana Plugin(Sample)"
              thumbnail={thumbKb}
              date="Jan 15, 2023"
            >
              A Grafana plugin for Kubebuilder to simplify operator
              observability.
            </PostItem>
          </Section>
          */}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Posts;
