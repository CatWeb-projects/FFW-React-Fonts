import React from 'react';

interface Props {
  text: string;
}

export const FontText: React.FC<Props> = ({ text }) => {
  return <span>{text}</span>;
};
