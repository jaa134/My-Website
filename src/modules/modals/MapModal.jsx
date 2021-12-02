import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'carbon-components-react';
import defineBlock from '../../utils/defineBlock';
import './MapModal.scss';

const bem = defineBlock('MapModal');

const MapModal = ({
  open,
  close
}) => (
  <Modal
    className={bem()}
    open={open}
    modalLabel="Contact information"
    modalHeading="Where I'm located"
    primaryButtonText="Open in Google Maps"
    secondaryButtonText="Close"
    onRequestClose={close}
    onSecondarySubmit={close}
    onRequestSubmit={() => { window.open('https://www.google.com/maps/place/Littleton,+CO', '_blank'); }}
  >
    <iframe
      title="gmap-frame"
      height="500"
      id="gmap_canvas"
      src="https://maps.google.com/maps?hl=en&amp;q=Ken%20Caryl%20Ranch%20Community%20Park%20Littleton+(Littleton,%20Colorado)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
    />
  </Modal>
);

MapModal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default MapModal;
