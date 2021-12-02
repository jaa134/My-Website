import React from 'react';
import defineBlock from '../../utils/defineBlock';
import PageBase from '../../PageBase';
import './HomePage.scss';

const bem = defineBlock('HomePage');

const HomePage = () => (
  <PageBase title="Profile" wip>
    <div className={bem()}>
      <img
        className={bem('profile-image')}
        src="images/profile-circle--small.png"
        alt="profile"
      />
    </div>
  </PageBase>
);

export default HomePage;
