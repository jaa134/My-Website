import React from 'react';
import PropTypes from 'prop-types';
import {
  PDF_MAX_WIDTH
} from '../../../constants';
import defineBlock from '../../../utils/defineBlock';
import './PdfViewToolbar.scss';

const bem = defineBlock('PdfViewToolbar');

const PdfViewToolbar = ({
  documentName
}) => (
  <div className={bem()}>
    <div className={bem('controls')} style={{ maxWidth: PDF_MAX_WIDTH }}>
      {documentName}
    </div>
  </div>
);

PdfViewToolbar.propTypes = {
  documentName: PropTypes.string.isRequired
};

export default PdfViewToolbar;
