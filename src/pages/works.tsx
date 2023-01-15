import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import { WorkGridItem } from '@/components/grid-item';
import Layout from '@/components/layouts/article';
import Section from '@/components/section';
import thumbKb from '@/public/images/works/kubebuilder_logo.png';

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="kb"
              title="Kubebuilder Grafana Plugin"
              thumbnail={thumbKb}
            >
              A Grafana plugin for Kubebuilder to simpilify operator
              observability
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
