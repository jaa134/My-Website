import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { pdfjs, Document, Page } from 'react-pdf';
import { SizeMe } from 'react-sizeme';
import { Loading, InlineNotification } from 'carbon-components-react';
import defineBlock from '../../utils/defineBlock';
import './PdfView.scss';

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const bem = defineBlock('PdfView');

const PdfView = ({
  documentUrl
}) => {
  const [curPdf, setCurPdf] = useState(null);
  const onDocumentLoadSuccess = (pdf) => {
    setCurPdf(pdf);
  };
  const loadingComponent = <Loading withOverlay={false} />;
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
    <SizeMe
      monitorWidth
      refreshRate={128}
      refreshMode="debounce"
    >
      {({ size }) => (
        <div className={bem()}>
          <div className={bem('toolbar')} />
          <Document
            file={documentUrl}
            loading={loadingComponent}
            error={errorComponent}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(curPdf?.numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                renderTextLayer={false}
                pageNumber={index + 1}
                width={Math.min(size.width, 1000)}
              />
            ))}
          </Document>
        </div>
      )}
    </SizeMe>
  );
};

PdfView.propTypes = {
  documentUrl: PropTypes.string.isRequired
};

export default PdfView;
