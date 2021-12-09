import React from 'react';
import PropTypes from 'prop-types';
import defineBlock from '../../utils/defineBlock';
import './ContactOption.scss';

const bem = defineBlock('ContactOption');

const ContactOption = ({
  image,
  title,
  children
}) => (
  <div className={bem()}>
    <div className={bem('title')}>
      <div className={bem('image')}>
        {image}
      </div>
      <div className={bem('name')}>{title}</div>
    </div>
    <div className={bem('content')}>
      {children}
    </div>
  </div>
);

ContactOption.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ContactOption;
