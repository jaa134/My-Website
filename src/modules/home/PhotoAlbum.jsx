import React from 'react';
import defineBlock from '../../utils/defineBlock';
import { Photos } from './constants';
import './PhotoAlbum.scss';

const bem = defineBlock('PhotoAlbum');

const PhotoAlbum = () => (
  <div className={bem()}>
    {Photos.map((path) => (
      <img
        className={bem('image')}
        src={path}
        alt="profile"
      />
    ))}
  </div>
);

export default PhotoAlbum;
