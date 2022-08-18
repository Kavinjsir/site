import Logo from './logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link as ChakraLink,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

interface LinkItemProps {
  href: string;
  path: string;
  children: React.ReactNode;
}

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue(`gray200`, `whiteAlpha.900`);

  return (
    <NextLink href={href} passHref scroll={false}>
      <ChakraLink
        p={2}
        bg={active ? `grassTeal` : undefined}
        color={active ? `#202023` : inactiveColor}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

interface NavbarProps {
  path: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue(`#ffffff40`, `#20202380`)}
      css={{ backdropFilter: `blur(10px)` }}
      zIndex={2}
      /*{...props}*/
    >
      <Container display="flex" p={2} maxW="container.md">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={`tighter`}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: `column`, md: `row` }}
          display={{ base: `none`, md: `flex` }}
          width={{ base: `full`, md: `auto` }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>

        <Box flex={1}>
          <Box ml={2} display={{ base: `inline-block`, md: `none` }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={ChakraLink}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={ChakraLink}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={ChakraLink}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={ChakraLink}
                  href="https://github.com/kavinjsir/site"
                  isExternal
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
