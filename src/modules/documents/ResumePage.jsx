import React from 'react';
import { Documents } from '../../constants';
import PdfView from './documentViewer/PdfView';

const ResumePage = () => <PdfView document={Documents.RESUME} />;

export default ResumePage;
