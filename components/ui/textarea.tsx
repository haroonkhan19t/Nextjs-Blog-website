import React from 'react';

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea className='border border-black'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;