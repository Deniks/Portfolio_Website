import React from 'react';

import Resume from '../../Components/Resume';
import { PDFViewer } from '@react-pdf/renderer';

export const ResumePage = () => {
  return (
    <PDFViewer
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <Resume />
    </PDFViewer>
  );
};
