import React from 'react';
import PropTypes from 'prop-types';
import { InlineNotification } from 'carbon-components-react';
import defineBlock from './utils/defineBlock';
import './Construction.scss';

const bem = defineBlock('Construction');

const Construction = ({
  title
}) => (
  <div className={bem()}>
    <h1 className={bem('title')}>{title}</h1>
    <InlineNotification
      kind="info"
      title="Heads up!"
      subtitle="This page is actively being developed."
      statusIconDescription="Information"
      role="alert"
      hideCloseButton
      lowContrast
    />
  </div>
);

Construction.propTypes = {
  title: PropTypes.string.isRequired
};

export default Construction;
