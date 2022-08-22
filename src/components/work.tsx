import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

interface WorkTitleProps {
  children: React.ReactNode;
}

interface WorkImageProps {
  src: string;
  alt: string;
}

interface WorkMetaProps {
  children: React.ReactNode;
}

export const Title = ({ children }: WorkTitleProps) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>Works</Link>
    </NextLink>
    <span>
      {` `}
      <ChevronRightIcon />
      {` `}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }: WorkImageProps) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }: WorkMetaProps) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
