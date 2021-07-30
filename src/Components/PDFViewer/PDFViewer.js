import React from 'react';

export const PDFViewer = ({ src }) => {
  return (
    <embed
      src={src}
      type="application/pdf"
      height="100%"
      width="100%"
      style={{ position: 'absolute', left: 0, top: 0 }}
    />
  );
};
