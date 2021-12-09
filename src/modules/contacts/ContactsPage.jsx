import React from 'react';
import Email32 from '@carbon/icons-react/lib/email/24';
import Phone32 from '@carbon/icons-react/lib/phone/24';
import LocationPerson32 from '@carbon/icons-react/lib/location--person/24';
import AppSwitcher32 from '@carbon/icons-react/lib/app-switcher/24';
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
  links,
  handles
} from '../../constants';
import PageBase from '../../common/PageBase';
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
    subtitle="Want to get in touch? Here's how you can reach me"
  >
    <div className={bem()}>
      <ContactOption
        title="Email"
        image={<Email32 />}
      >
        {getContactOptionContent(EMAIL_ADDRESS)}
      </ContactOption>
      <ContactOption
        title="Phone"
        image={<Phone32 />}
      >
        {getContactOptionContent(PHONE_NUMBER)}
      </ContactOption>
      <ContactOption
        title="In person"
        image={<LocationPerson32 />}
      >
        {getContactOptionContent(LOCATION)}
      </ContactOption>
      <ContactOption
        title="Social media"
        image={<AppSwitcher32 />}
      >
        <div className={bem('socials')}>
          {getSocialMediaTile(links.LINKEDIN, handles.LINKEDIN, <LogoLinkedin32 />)}
          {getSocialMediaTile(links.GITHUB, handles.GITHUB, <LogoGithub32 />)}
          {getSocialMediaTile(links.FACEBOOK, handles.FACEBOOK, <LogoFacebook32 />)}
          {getSocialMediaTile(links.INSTAGRAM, handles.INSTAGRAM, <LogoInstagram32 />)}
          {getSocialMediaTile(links.TWITTER, handles.TWITTER, <LogoTwitter32 />)}
        </div>
      </ContactOption>
    </div>
  </PageBase>
);

export default ContactsPage;
