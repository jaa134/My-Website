import React from 'react';
import Email32 from '@carbon/icons-react/lib/email/32';
import Phone32 from '@carbon/icons-react/lib/phone/32';
import LocationPerson32 from '@carbon/icons-react/lib/location--person/32';
import AppSwitcher32 from '@carbon/icons-react/lib/app-switcher/32';
import LogoLinkedin32 from '@carbon/icons-react/lib/logo--linkedin/32';
import LogoGithub32 from '@carbon/icons-react/lib/logo--github/32';
import LogoFacebook32 from '@carbon/icons-react/lib/logo--facebook/32';
import LogoInstagram32 from '@carbon/icons-react/lib/logo--instagram/32';
import LogoTwitter32 from '@carbon/icons-react/lib/logo--twitter/32';
import { CopyButton, Link } from 'carbon-components-react';
import {
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  LOCATION,
  Links,
  Handles
} from '../../constants';
import PageBase from '../../PageBase';
import defineBlock from '../../utils/defineBlock';
import ContactOption from './ContactOption';
import './ContactsPage.scss';

const bem = defineBlock('ContactsPage');

const getContactOptionContent = (text) => (
  <div className={bem('info-wrapper')}>
    <span>{text}</span>
    <CopyButton onClick={() => { navigator.clipboard.writeText(text); }} />
  </div>
);

const getSocialMediaTile = (url, handle, image) => (
  <Link
    className={bem('social-tile')}
    href={url}
    target="_blank"
    rel="noreferrer"
    size="lg"
  >
    {image}
    <div className={bem('social-handle')}>{handle}</div>
  </Link>
);

const ContactsPage = () => (
  <PageBase
    title="Contacts"
    subtitle="Want to get in touch? Here's how you can reach me..."
  >
    <div className={bem()}>
      <ContactOption
        title="Email"
        subtitle="Check out this cool email address"
        image={<Email32 />}
      >
        {getContactOptionContent(EMAIL_ADDRESS)}
      </ContactOption>
      <ContactOption
        title="Phone"
        subtitle="My phone is always on and in reach"
        image={<Phone32 />}
      >
        {getContactOptionContent(PHONE_NUMBER)}
      </ContactOption>
      <ContactOption
        title="In person"
        subtitle="I'm always open to meeting in person"
        image={<LocationPerson32 />}
      >
        {getContactOptionContent(LOCATION)}
      </ContactOption>
      <ContactOption
        title="Social media"
        subtitle="Here are some links to my socials"
        image={<AppSwitcher32 />}
      >
        <div className={bem('socials')}>
          {getSocialMediaTile(Links.LINKEDIN, Handles.LINKEDIN, <LogoLinkedin32 />)}
          {getSocialMediaTile(Links.GITHUB, Handles.GITHUB, <LogoGithub32 />)}
          {getSocialMediaTile(Links.FACEBOOK, Handles.FACEBOOK, <LogoFacebook32 />)}
          {getSocialMediaTile(Links.INSTAGRAM, Handles.INSTAGRAM, <LogoInstagram32 />)}
          {getSocialMediaTile(Links.TWITTER, Handles.TWITTER, <LogoTwitter32 />)}
        </div>
      </ContactOption>
    </div>
  </PageBase>
);

export default ContactsPage;
