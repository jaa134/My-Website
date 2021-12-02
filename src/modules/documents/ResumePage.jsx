import React from 'react';
import { Documents } from '../../constants';
import PageBase from '../../PageBase';
import PdfView from './documentViewer/PdfView';
import './ResumePage.scss';

const ResumePage = () => (
  <PageBase title="Resume" wip>
    <PdfView document={Documents.RESUME} />
  </PageBase>
);

export default ResumePage;
