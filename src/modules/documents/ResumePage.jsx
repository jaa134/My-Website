import React from 'react';
import PageBase from '../../common/PageBase';
import PdfView from './documentViewer/PdfView';

const ResumePage = () => (
  <PageBase
    title="Resume"
    subtitle="Review a summary of my greatest achievements"
    tabs={[]}
  >
    <PdfView docName="Alspaw-Jacob Resume.pdf" numPages={2} />
  </PageBase>
);

export default ResumePage;
