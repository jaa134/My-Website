import React from 'react';
import PropTypes from 'prop-types';
import { Modal, CopyButton, InlineNotification } from 'carbon-components-react';
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
    <InlineNotification
      kind="info"
      title="Heads up!"
      subtitle={(
        <span>
          If you have trouble reaching me at the above email,
          try my secondary email: <strong>jacob.alspaw@case.edu</strong>
        </span>
      )}
      statusIconDescription="Information"
      role="alert"
      hideCloseButton
      lowContrast
    />
  </Modal>
);

EmailModal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default EmailModal;
