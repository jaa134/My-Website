import React from 'react';
import PropTypes from 'prop-types';
import { pdfjs, Document, Page } from 'react-pdf';
import { SizeMe } from 'react-sizeme';
import { Loading, InlineNotification } from 'carbon-components-react';
import defineBlock from '../../utils/defineBlock';
import './PdfView.scss';

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
const MAX_PDF_WIDTH = 1000;
const PDF_RATIO = 1.357;
const getPdfSize = (availableWidth) => {
  const width = Math.min(availableWidth, MAX_PDF_WIDTH);
  return { width, height: width * PDF_RATIO };
};

const bem = defineBlock('PdfView');

const PdfView = ({
  document
}) => {
  const getLoadingComponents = (width, height) => (
    () => Array.from(new Array(document.numPages), (_, index) => (
      <div
        key={`loading_${index + 1}`}
        className={bem('loading-page-wrapper', { })}
        style={{ width, height }}
      >
        <div className={bem('loading-page')}>
          <Loading withOverlay={false} />
        </div>
      </div>
    )));
  const errorComponent = (
    <InlineNotification
      className={bem('error-notification')}
      kind="error"
      title="Oops! Something went wrong."
      subtitle="The requested document could not be retrieved."
      statusIconDescription="Information"
      role="alert"
      hideCloseButton
      lowContrast
    />
  );
  return (
    <div className={bem()}>
      <div className={bem('toolbar')} />
      <SizeMe
        monitorWidth
        refreshRate={128}
        refreshMode="debounce"
      >
        {({ size }) => {
          const { width, height } = getPdfSize(size.width);
          return (
            <Document
              file={document.name}
              loading={getLoadingComponents(width, height)}
              error={errorComponent}
            >
              {Array.from(new Array(document.numPages), (_, index) => (
                <Page
                  key={`page_${index + 1}`}
                  renderTextLayer={false}
                  pageNumber={index + 1}
                  width={width}
                />
              ))}
            </Document>
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
