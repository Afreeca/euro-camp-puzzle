import React from 'react';
import { FileInputProps } from '../type';

const UploadFileInput: React.FC<FileInputProps> = ({ onFileProcessed }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const text = event.target?.result as string;
        const lines = text.split('\n');
        onFileProcessed(lines);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default UploadFileInput;
