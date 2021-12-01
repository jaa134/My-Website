import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { pdfjs, Document, Page } from 'react-pdf';
import { SizeMe } from 'react-sizeme';
import {
  PDF_MAX_WIDTH,
  PDF_RATIO,
  PDF_PADDING,
  PDF_SPACING
} from '../../../constants';
import defineBlock from '../../../utils/defineBlock';
import PdfViewToolbar from './PdfViewToolbar';
import PdfViewLoading from './PdfViewLoading';
import PdfViewError from './PdfViewError';
import './PdfView.scss';

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
const getPdfSize = (availableWidth) => {
  const width = Math.min(availableWidth - PDF_PADDING, PDF_MAX_WIDTH);
  return { width, height: width * PDF_RATIO };
};

const bem = defineBlock('PdfView');

const PdfView = ({
  document: {
    name: docName,
    numPages
  }
}) => {
  const [hasError, setHasError] = useState(true);
  const onDocLoadError = () => {
    setHasError(true);
  };
  return (
    <div className={bem()}>
      <PdfViewToolbar />
      <SizeMe
        monitorWidth
        refreshRate={128}
        refreshMode="debounce"
      >
        {({ size }) => {
          const { width, height } = getPdfSize(size.width);
          const totalHeight = (numPages * height)
            + ((numPages - 1) * PDF_SPACING)
            + PDF_PADDING;
          return (
            <div style={{ height: hasError ? 'unset' : totalHeight }}>
              <Document
                file={`documents/${docName}`}
                loading={<PdfViewLoading numPages={numPages} width={width} height={height} />}
                error={<PdfViewError />}
                onLoadError={onDocLoadError}
              >
                {Array.from(new Array(numPages), (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    renderTextLayer={false}
                    pageNumber={index + 1}
                    width={width}
                  />
                ))}
              </Document>
            </div>
          );
        }}
      </SizeMe>
    </div>
  );
};

PdfView.propTypes = {
  document: PropTypes.shape({
    name: PropTypes.string.isRequired,
    numPages: PropTypes.number.isRequired
  }).isRequired
};

export default PdfView;