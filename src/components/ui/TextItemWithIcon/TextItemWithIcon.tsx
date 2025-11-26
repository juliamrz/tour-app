// Internal deps
import type { ReactNode } from 'react';

// Local deps
import './TextItemWithIcon.css';

interface TextItemWithIconProps {
  text: string;
  icon?: ReactNode;
}

const TextItemWithIcon = (props: TextItemWithIconProps) => {
  const {
    text,
    icon,
  } = props;

  return (
    <div className="textItemWithIcon">
      {icon}
      <span>{text}</span>
    </div>
  )
}

export default TextItemWithIcon;
