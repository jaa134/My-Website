import React from 'react';
import defineBlock from '../../utils/defineBlock';
import PageBase from '../../common/PageBase';
import PhotoAlbum from './PhotoAlbum';
import './HomePage.scss';

const bem = defineBlock('HomePage');

const HomePage = () => (
  <PageBase
    title="Profile"
    subtitle="Here's what you should know about me"
  >
    <div className={bem()}>
      <div className={bem('about')}>
        <img
          className={bem('profile-image')}
          src="images/profile.jpg"
          alt="profile"
        />
        <div className={bem('info')}>
          <div className={bem('name')}>Jacob Alspaw</div>
          <div className={bem('jobs')}>
            <div className={bem('title')}>UI/UX LEAD DEVELOPER</div>
            <div className={bem('title')}>FULL-STACK SOFTWARE DEVELOPER</div>
          </div>
          <div className={bem('statement')}>
            I have not really considered what to put here yet, so...
            This is me. I am a software developer. I like to code and I do it fast.
            This is me. I am a software developer. I like to code and I do it fast.
            This is me. I am a software developer. I like to code and I do it fast.
            This is me. I am a software developer. I like to code and I do it fast.
          </div>
        </div>
      </div>
      <PhotoAlbum />
    </div>
  </PageBase>
);

export default HomePage;
