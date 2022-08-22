import NextLink from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

interface ItemProps {
  children: React.ReactNode;
  title: string;
  thumbnail: StaticImageData;
}

type GridItemProps = ItemProps & {
  href: string;
};

type WorkGridItemProps = ItemProps & {
  id: string;
};

export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
}: GridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: WorkGridItemProps) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global styles={`.grid-item-thumbnail { border-radius: 12px; }`} />
);
