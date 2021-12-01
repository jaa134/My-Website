import React from 'react';
import { InlineNotification } from 'carbon-components-react';
import defineBlock from '../../../utils/defineBlock';
import './PdfViewError.scss';

const bem = defineBlock('PdfViewError');

const PdfView = () => (
  <InlineNotification
    className={bem()}
    kind="error"
    title="Oops! Something went wrong."
    subtitle="The requested document could not be retrieved."
    statusIconDescription="Information"
    role="alert"
    hideCloseButton
    lowContrast
  />
);

export default PdfView;
