import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import defineBlock from '../utils/defineBlock';
import './Tabs.scss';
import { isPathMatch } from '../utils/pathUtils';

const bem = defineBlock('Tabs');

const Tabs = ({
  tabs
}) => {
  const location = useLocation();
  return (
    <div className={bem()}>
      {tabs.map((tab) => (
        <Link
          className={bem('tab', { active: isPathMatch(tab.href, location.pathname) })}
          to={tab.href}
          onClick={() => { console.error('hi'); }}
        >
          {tab.text}
        </Link>
      ))}
    </div>
  );
};

export const TabPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabPropType).isRequired
};

export default Tabs;
