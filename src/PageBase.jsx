import React from 'react';
import PropTypes from 'prop-types';
import { InlineNotification } from 'carbon-components-react';
import defineBlock from './utils/defineBlock';
import './PageBase.scss';

const bem = defineBlock('PageBase');

const PageBase = ({
  title,
  subtitle,
  wip,
  children
}) => (
  <div className={bem()}>
    <div className={bem('heading')}>
      {wip && (
        <InlineNotification
          className={bem('construction-notification')}
          kind="info"
          title="Heads up!"
          subtitle="This content is still being developed."
          statusIconDescription="Information"
          role="alert"
          hideCloseButton
          lowContrast
        />
      )}
      <h1 className={bem('title')}>{title}</h1>
      {subtitle && <h4 className={bem('subtitle')}>{subtitle}</h4>}
    </div>
    <div className={bem('content')}>
      {children}
    </div>
  </div>
);

PageBase.defaultProps = {
  subtitle: null,
  children: null,
  wip: false
};

PageBase.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  wip: PropTypes.bool,
  children: PropTypes.node
};

export default PageBase;
