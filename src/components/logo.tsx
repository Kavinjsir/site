import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const imgSubPath = useColorModeValue(``, `-dark`);

  const textColor = useColorModeValue(`gray.800`, `whiteAlpha.900`);

  const footPrintImg = `/images/footprint${imgSubPath}.png`;

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image src={footPrintImg} width={20} height={20} alt="logo" />
        <Text color={textColor}>Tony J</Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
