import Image, { type StaticImageData } from 'next/image';
import NextLink from 'next/link';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

interface PostItemProps {
  children: React.ReactNode;
  title: string;
  thumbnail: StaticImageData;
  id: string;
  date: string;
}

export const PostItem = ({
  children,
  id,
  title,
  thumbnail,
  date,
}: PostItemProps) => (
  <Box w="100%" textAlign="left">
    <NextLink href={`/posts/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="post-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={`/posts/${id}`}>
          <Text mt={2} fontSize="2xl">
            {title}
          </Text>
          <Text mb={4} fontSize="md">
            {date}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>
          {children}
          {`...`}
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
);
