import React from 'react';
import PropTypes from 'prop-types';
import defineBlock from '../utils/defineBlock';
import Tabs, { TabPropType } from './Tabs';
import './PageBase.scss';

const bem = defineBlock('PageBase');

const PageBase = ({
  title,
  subtitle,
  tabs,
  children
}) => (
  <div className={bem()}>
    <div className={bem('heading')}>
      <div className={bem('page-info')}>
        <h1 className={bem('title')}>{title}</h1>
        {subtitle && <h4 className={bem('subtitle')}>{subtitle}</h4>}
      </div>
      {tabs?.length > 0 && (
        <Tabs tabs={tabs} />
      )}
    </div>
    <div className={bem('content')}>
      {children}
    </div>
  </div>
);

PageBase.defaultProps = {
  subtitle: null,
  children: null,
  tabs: null
};

PageBase.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  tabs: PropTypes.arrayOf(TabPropType),
  children: PropTypes.node
};

export default PageBase;
