import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'carbon-components-react';
import defineBlock from '../../../utils/defineBlock';
import './PdfViewLoading.scss';

const bem = defineBlock('PdfViewLoading');

const PdfViewLoading = ({
  numPages,
  width,
  height
}) => {
  const makePage = (_, index) => (
    <div
      key={`page_${index + 1}`}
      className={bem('page')}
      style={{ width, height }}
    >
      <Loading withOverlay={false} />
    </div>
  );
  return Array.from(new Array(numPages), makePage);
};

PdfViewLoading.propTypes = {
  numPages: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default PdfViewLoading;
