import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'carbon-components-react';
import Maximize24 from '@carbon/icons-react/lib/maximize/20';
import DocumentDownload24 from '@carbon/icons-react/lib/document--download/20';
import defineBlock from '../../../utils/defineBlock';
import { PDF_MAX_WIDTH } from './constants';
import './PdfViewToolbar.scss';

const bem = defineBlock('PdfViewToolbar');

const PdfViewToolbar = ({
  documentUrl,
  numPages
}) => (
  <div className={bem()}>
    <div className={bem('wrapper')} style={{ maxWidth: PDF_MAX_WIDTH }}>
      <div className={bem('pagination-count')}>{numPages} {numPages > 1 ? 'pages' : 'page'}</div>
      <div className={bem('controls')}>
        <Link
          className={bem('button')}
          href={documentUrl}
          target="_blank"
          rel="noreferrer"
          size="lg"
        >
          <Maximize24 /> Full screen
        </Link>
        <Link
          className={bem('button')}
          href={documentUrl}
          download
          size="lg"
        >
          <DocumentDownload24 /> Download
        </Link>
      </div>
    </div>
  </div>
);

PdfViewToolbar.propTypes = {
  documentUrl: PropTypes.string.isRequired,
  numPages: PropTypes.number.isRequired
};

export default PdfViewToolbar;
