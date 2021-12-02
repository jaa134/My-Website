import React from 'react';
import PropTypes from 'prop-types';
import { Modal, CopyButton } from 'carbon-components-react';
import { PHONE_NUMBER } from '../../constants';
import defineBlock from '../../utils/defineBlock';
import './PhoneModal.scss';

const bem = defineBlock('PhoneModal');

const PhoneModal = ({
  open,
  close
}) => (
  <Modal
    className={bem()}
    open={open}
    modalLabel="Contact information"
    modalHeading="My phone number"
    primaryButtonText="Call me"
    secondaryButtonText="Close"
    onRequestClose={close}
    onSecondarySubmit={close}
    onRequestSubmit={() => { window.open('tel:+16366997344'); }}
  >
    <div className={bem('phone')}>
      {PHONE_NUMBER}
      <CopyButton onClick={() => { navigator.clipboard.writeText(PHONE_NUMBER); }} />
    </div>
  </Modal>
);

PhoneModal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default PhoneModal;
