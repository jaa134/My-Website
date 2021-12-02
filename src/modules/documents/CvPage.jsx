import React from 'react';
import { Documents } from '../../constants';
import PageBase from '../../PageBase';
import PdfView from './documentViewer/PdfView';
import './ResumePage.scss';

const ResumePage = () => (
  <PageBase title="Curriculum vitae" wip>
    <PdfView document={Documents.CV} />
  </PageBase>
);

export default ResumePage;
