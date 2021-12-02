import React from 'react';
import PropTypes from 'prop-types';
import defineBlock from '../../utils/defineBlock';
import './ContactOption.scss';

const bem = defineBlock('ContactOption');

const ContactOption = ({
  image,
  title,
  subtitle,
  children
}) => (
  <div className={bem()}>
    <div className={bem('title')}>
      <div className={bem('image')}>
        {image}
      </div>
      <h3 className={bem('name')}>{title}</h3>
    </div>
    <div className={bem('content')}>
      <h4>{subtitle}</h4>
      {children}
    </div>
  </div>
);

ContactOption.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ContactOption;
