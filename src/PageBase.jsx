import React from 'react';
import PropTypes from 'prop-types';
import { InlineNotification } from 'carbon-components-react';
import defineBlock from './utils/defineBlock';
import './PageBase.scss';

const bem = defineBlock('PageBase');

const PageBase = ({
  title,
  children
}) => (
  <div className={bem()}>
    <h1 className={bem('title')}>{title}</h1>
    <div className={bem('content')}>
      {children || (
        <InlineNotification
          className={bem('construction-notification')}
          kind="info"
          title="Heads up!"
          subtitle="This page is actively being developed."
          statusIconDescription="Information"
          role="alert"
          hideCloseButton
          lowContrast
        />
      )}
    </div>
  </div>
);

PageBase.defaultProps = {
  children: null
};

PageBase.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default PageBase;