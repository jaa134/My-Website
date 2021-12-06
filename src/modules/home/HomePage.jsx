import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import defineBlock from '../../utils/defineBlock';
import PageBase from '../../common/PageBase';
import { interests, photos } from './constants';
import './HomePage.scss';
import { paths } from '../../constants';

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
          <div style={{ flex: 1 }}>
            <div className={bem('name')}>Jacob Alspaw</div>
            <div className={bem('jobs')}>
              <div className={bem('title')}>UI/UX Lead Developer,</div>
              <div className={bem('title')}>Full-Stack Software Developer</div>
            </div>
            <div className={bem('detail-label')}>Origin</div>
            <div className={bem('detail-value')}>St. Louis, Missouri - 1996</div>
            <div className={bem('detail-label')}>Interests</div>
            <div className={bem('detail-tags')}>
              {interests.map((interest) => (
                <div key={interest} className={bem('tag')}>{interest}</div>
              ))}
            </div>
          </div>
          <div className={bem('divider')} />
          <div className={bem('statement')}>

            <div className={bem('paragraph')}>
              Hello, my name is Jacob!
            </div>
            <div className={bem('paragraph')}>
              I&apos;m an enthusiastic and creative technologist
              with hands-on skills in a wide range of software, tools, and programming languages.
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
