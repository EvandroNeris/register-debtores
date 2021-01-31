import { useState } from 'react';

const UseModal = (): any => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);

  return {
    isShown,
    toggle
  };
};

export default UseModal;
