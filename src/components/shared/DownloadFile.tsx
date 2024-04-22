import React from 'react';
import { DownloadButtonProps } from '../type';

const DownloadButton: React.FC<DownloadButtonProps> = ({ src, fileName }) => {
  const downloadFile = () => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <button
      className={`bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md mb-4 focus:outline-none`}
      onClick={downloadFile}
    >
      Download Sample
    </button>
  );
};

export default DownloadButton;
