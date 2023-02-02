import { useState } from 'react';
import Button from '../Button';

const CustomButton = ({label, textval}) => {
  const [text, setText] = useState(label || "button default");

  const handleClick = () => {
    setText(textval);
  }

  return (
    <Button label={text} onClick={handleClick} />
  )
}

export default CustomButton;