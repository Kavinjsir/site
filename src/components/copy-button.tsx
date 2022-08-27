import { Button } from '@chakra-ui/react';
import { IoMail } from 'react-icons/io5';

import { debounceLead } from '@/lib/debounce-button-onclick';

interface CopyButtonProps {
  content: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ content }) => {
  const handleOnClick = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <Button
      variant="ghost"
      colorScheme="teal"
      leftIcon={<IoMail />}
      onClick={debounceLead(handleOnClick)}
    >
      @Tony J
    </Button>
  );
};

export default CopyButton;
