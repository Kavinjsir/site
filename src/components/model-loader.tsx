import { forwardRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

/* eslint-disable react/display-name */
export const ModelContainer = forwardRef((props: any, ref: any) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={[`-20px`, `-60px`, `-120px`]}
    mb={[`-40px`, `-140px`, `-200px`]}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {props.children}
  </Box>
));

const Loader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
};

export default Loader;
