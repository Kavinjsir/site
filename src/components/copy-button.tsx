import { Button, useClipboard, useToast } from '@chakra-ui/react';
import { IoMail } from 'react-icons/io5';
import { useEffect } from 'react';

interface CopyButtonProps {
  content: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ content }) => {
  const { hasCopied, onCopy } = useClipboard(content);
  const toast = useToast();

  useEffect(() => {
    if (!hasCopied) return;
    toast({
      title: `"${content}" copied.`,
      status: `success`,
      isClosable: true,
      duration: 1500,
    });
  }, [hasCopied]);

  return (
    <Button
      variant="ghost"
      colorScheme="teal"
      leftIcon={<IoMail />}
      onClick={onCopy}
    >
      @Tony J
    </Button>
  );
};

export default CopyButton;
