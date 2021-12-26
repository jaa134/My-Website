import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { pdfjs, Document, Page } from 'react-pdf';
import { SizeMe } from 'react-sizeme';
import defineBlock from '../../../utils/defineBlock';
import {
  PDF_MAX_WIDTH,
  PDF_RATIO,
  PDF_PADDING,
  PDF_SPACING
} from './constants';
import PdfViewToolbar from './PdfViewToolbar';
import PdfViewLoading from './PdfViewLoading';
import PdfViewError from './PdfViewError';
import './PdfView.scss';

pdfjs.GlobalWorkerOptions.workerSrc = 'static/js/pdf.worker.min.js';
const getPdfSize = (availableWidth) => {
  const width = Math.min(availableWidth - PDF_PADDING, PDF_MAX_WIDTH);
  return { width, height: width * PDF_RATIO };
};

const bem = defineBlock('PdfView');

const PdfView = ({
  docName,
  numPages
}) => {
  const [hasError, setHasError] = useState(false);
  const onDocLoadError = () => {
    setHasError(true);
  };
  const documentUrl = `static/documents/${docName}`;
  return (
    <div className={bem()}>
      <PdfViewToolbar documentUrl={documentUrl} numPages={numPages} />
      <SizeMe
        monitorWidth
        refreshRate={128}
        refreshMode="debounce"
      >
        {({ size }) => {
          const availableWidth = size.width;
          const { width, height } = getPdfSize(availableWidth);
          let mainStyle;
          if (!hasError) {
            mainStyle = {
              height: (numPages * height)
                + ((numPages - 1) * PDF_SPACING)
                + PDF_PADDING
            };
          }
          return (
            <div style={mainStyle}>
              <Document
                file={documentUrl}
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
  docName: PropTypes.string.isRequired,
  numPages: PropTypes.number.isRequired
};

export default PdfView;
