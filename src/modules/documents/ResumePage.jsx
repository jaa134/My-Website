import React from 'react';
import { documents } from '../../constants';
import PdfView from './documentViewer/PdfView';

const ResumePage = () => <PdfView document={documents.RESUME} />;

export default ResumePage;
