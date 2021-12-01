import React from 'react';
import { Documents } from '../../constants';
import PageBase from '../../PageBase';
import PdfView from './PdfView';
import './ResumePage.scss';

const ResumePage = () => (
  <PageBase title="Resume">
    <PdfView documentUrl={Documents.RESUME} />
  </PageBase>
);

export default ResumePage;
