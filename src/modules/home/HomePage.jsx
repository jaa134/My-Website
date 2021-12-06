import React, { useCallback, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import defineBlock from '../../utils/defineBlock';
import PageBase from '../../common/PageBase';
import { photos } from './constants';
import './HomePage.scss';

const bem = defineBlock('HomePage');

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <PageBase
      title="Profile"
      subtitle="Here's what you should know about me"
    >
      <div className={bem()}>
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
        <Gallery photos={photos} onClick={openLightbox} />;
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </PageBase>
  );
};

export default HomePage;
