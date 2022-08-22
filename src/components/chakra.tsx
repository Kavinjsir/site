interface ChakraServerSideProps {
  req: {
    headers: {
      cookie: string;
    };
  };
}

export async function getServerSideProps({ req }: ChakraServerSideProps) {
  return {
    props: {
      cookies: req.headers.cookie ?? ``,
    },
  };
}
