import React from 'react';
import PDFViewer from '../../Components/PDFViewer';

import PDF from '../../Assets/DenissRezanovicsCV.pdf';

export const ResumePage = () => {
  return <PDFViewer src={PDF} />;
};
