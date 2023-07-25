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
import { forwardRef } from 'react';

import Logo from '@/components/logo';
import ToggleThemeButton from '@/components/toggle-theme-button';

interface LinkItemProps {
  href: string;
  path: string;
  children: React.ReactNode;
}

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue(`gray200`, `whiteAlpha.900`);

  return (
    <ChakraLink
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? `grassTeal` : undefined}
      color={active ? `#202023` : inactiveColor}
    >
      {children}
    </ChakraLink>
  );
};

const MenuLink = forwardRef<HTMLAnchorElement, { href: string }>(
  (props, ref) => <ChakraLink ref={ref} as={NextLink} {...props} />,
);
MenuLink.displayName = `MyMenuLink`;

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
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        /*
        wrap="wrap"
        align="center"
        justify="space-betweeen"
         */
      >
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

        <Box flex={1} align="right">
          <ToggleThemeButton />

          <Box ml={2} display={{ base: `inline-block`, md: `none` }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
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
