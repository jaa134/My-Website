import React from 'react';
import PropTypes from 'prop-types';
import { Modal, CopyButton } from 'carbon-components-react';
import { EMAIL_ADDRESS } from '../../constants';
import defineBlock from '../../utils/defineBlock';
import './EmailModal.scss';

const bem = defineBlock('EmailModal');

const EmailModal = ({
  open,
  close
}) => (
  <Modal
    className={bem()}
    open={open}
    modalLabel="Contact information"
    modalHeading="My email address"
    primaryButtonText="Send email"
    secondaryButtonText="Close"
    onRequestClose={close}
    onSecondarySubmit={close}
    onRequestSubmit={() => { window.open(`mailto:${EMAIL_ADDRESS}`); }}
  >
    <div className={bem('email')}>
      {EMAIL_ADDRESS}
      <CopyButton onClick={() => { navigator.clipboard.writeText(EMAIL_ADDRESS); }} />
    </div>
  </Modal>
);

EmailModal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default EmailModal;
