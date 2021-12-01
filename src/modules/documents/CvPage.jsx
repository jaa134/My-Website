import React from 'react';
import { Documents } from '../../constants';
import PageBase from '../../PageBase';
import PdfView from './PdfView';
import './ResumePage.scss';

const ResumePage = () => (
  <PageBase title="Curriculum vitae">
    <PdfView document={Documents.CV} />
  </PageBase>
);

export default ResumePage;
