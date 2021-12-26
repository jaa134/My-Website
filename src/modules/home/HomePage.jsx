import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { paths } from '../../constants';
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
      title="About"
      subtitle="Here's what you should know about me"
    >
      <div className={bem()}>
        <div className={bem('info')}>
          <div className={bem('name')}>Jacob Alspaw</div>
          <div className={bem('jobs')}>
            <div className={bem('title')}>Front-End Lead,</div>
            <div className={bem('title')}>Full-Stack Software Developer</div>
          </div>
          <div className={bem('statement')}>
            <div className={bem('paragraph')} />
            <div className={bem('paragraph')}>
              I&apos;m an enthusiastic and creative technologist with hands-on skills in a wide
              range of software, tools, and programming languages.
              During my 5 years of industry experience as a full-stack developer and front-end
              lead, I have designed, developed, and launched highly responsive websites and mobile
              applications across a variety of market sectors. In addition, I have consistently met
              client expectations and project milestones while working in deadline-driven
              environments where communication and teamwork is required for success.
            </div>
            <div className={bem('paragraph')}>
              If you would like to further discuss my skills and demonstrate how I can be of
              service, find out how I can be contacted <Link to={paths.CONTACT}>here</Link>.
            </div>
          </div>
        </div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(({ src, ...rest }) => {
                  const extensionStart = src.indexOf('.');
                  const newSrc = `${src.substr(0, extensionStart)}--large${src.substr(extensionStart)}`;
                  return {
                    ...rest,
                    src: newSrc,
                    caption: rest.title
                  };
                })}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </PageBase>
  );
};

export default HomePage;
