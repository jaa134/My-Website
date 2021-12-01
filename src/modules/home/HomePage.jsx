import React from 'react';
import defineBlock from '../../utils/defineBlock';
import './HomePage.scss';

const bem = defineBlock('HomePage');

const HomePage = () => (
  <div className={bem()}>
    <img
      className={bem('profile-image')}
      src="images/profile-circle--small.png"
      alt="profile"
    />
  </div>
);

export default HomePage;
