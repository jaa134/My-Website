import React, { useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';
import LocationPerson20 from '@carbon/icons-react/lib/location--person/20';
import Phone20 from '@carbon/icons-react/lib/phone/20';
import Email20 from '@carbon/icons-react/lib/email/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import LogoLinkedin24 from '@carbon/icons-react/lib/logo--linkedin/24';
import LogoGithub24 from '@carbon/icons-react/lib/logo--github/24';
import LogoFacebook24 from '@carbon/icons-react/lib/logo--facebook/24';
import LogoInstagram24 from '@carbon/icons-react/lib/logo--instagram/24';
import LogoTwitter24 from '@carbon/icons-react/lib/logo--twitter/24';
import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer';
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalAction,
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems
} from 'carbon-components-react/lib/components/UIShell';
import { Paths, Links } from './constants';
import defineBlock from './utils/defineBlock';
import { isParentPath } from './utils/pathUtils';
import MapModal from './modules/modals/MapModal';
import PhoneModal from './modules/modals/PhoneModal';
import EmailModal from './modules/modals/EmailModal';
import HomePage from './modules/home/HomePage';
import ExperiencePage from './modules/experience/ExperiencePage';
import DocumentsPage from './modules/documents/DocumentsPage';
import ContactsPage from './modules/contacts/ContactsPage';
import './App.scss';

const bem = defineBlock('App');

const App = () => (
  <div className={bem()}>
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => {
        const { pathname: currentPath } = useLocation();
        const [isMapModalOpen, setMapModalOpen] = useState(false);
        const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
        const [isEmailModalOpen, setEmailModalOpen] = useState(false);
        const [rightPanelExpanded, setRightPanelExpanded] = useState(false);
        const getLinkProps = (baseClassName, path) => ({
          className: bem(baseClassName, { active: isParentPath(path, currentPath) }),
          href: `#${path}`
        });
        return (
          <>
            <Header className={bem('header')} aria-label="Jacob Alspaw">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <img
                className={bem('profile-image')}
                src="images/profile-circle--small.png"
                alt="profile"
              />
              <HeaderName href="#" prefix="Jacob">
                [Alspaw]
              </HeaderName>
              <HeaderNavigation aria-label="Jacob [Alspaw]">
                <HeaderMenuItem {...getLinkProps('main-link', Paths.HOME)}>Profile</HeaderMenuItem>
                <HeaderMenuItem {...getLinkProps('main-link', Paths.EXPERIENCE)}>Experience</HeaderMenuItem>
                <HeaderMenuItem {...getLinkProps('main-link', Paths.DOCUMENTS)}>Documents</HeaderMenuItem>
                <HeaderMenuItem {...getLinkProps('main-link', Paths.CONTACT)}>Contact</HeaderMenuItem>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Location" onClick={() => { setMapModalOpen(true); }}>
                  <LocationPerson20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Phone" onClick={() => { setPhoneModalOpen(true); }}>
                  <Phone20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Email" onClick={() => { setEmailModalOpen(true); }}>
                  <Email20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Applications"
                  tooltipAlignment="end"
                  isActive={rightPanelExpanded}
                  onClick={() => { setRightPanelExpanded(!rightPanelExpanded); }}
                >
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
                isPersistent={false}
              >
                <SideNavItems>
                  <HeaderSideNavItems>
                    <HeaderMenuItem {...getLinkProps('side-link', Paths.HOME)}>Profile</HeaderMenuItem>
                    <HeaderMenuItem {...getLinkProps('side-link', Paths.EXPERIENCE)}>Experience</HeaderMenuItem>
                    <HeaderMenuItem {...getLinkProps('side-link', Paths.DOCUMENTS)}>Documents</HeaderMenuItem>
                    <HeaderMenuItem {...getLinkProps('side-link', Paths.CONTACT)}>Contact</HeaderMenuItem>
                  </HeaderSideNavItems>
                </SideNavItems>
              </SideNav>
              <HeaderPanel aria-label="Header panel" expanded={rightPanelExpanded}>
                <Switcher aria-label="Switcher container">
                  <SwitcherItem aria-label="Linkedin" target="_blank" href={Links.LINKEDIN}>
                    <LogoLinkedin24 /> Linkedin
                  </SwitcherItem>
                  <SwitcherItem aria-label="Github" target="_blank" href={Links.GITHUB}>
                    <LogoGithub24 /> Github
                  </SwitcherItem>
                  <SwitcherItem aria-label="Facebook" target="_blank" href={Links.FACEBOOK}>
                    <LogoFacebook24 /> Facebook
                  </SwitcherItem>
                  <SwitcherItem aria-label="Instagram" target="_blank" href={Links.INSTAGRAM}>
                    <LogoInstagram24 /> Instagram
                  </SwitcherItem>
                  <SwitcherItem aria-label="Twitter" target="_blank" href={Links.TWITTER}>
                    <LogoTwitter24 /> Twitter
                  </SwitcherItem>
                </Switcher>
              </HeaderPanel>
            </Header>
            <Content id="main-content">
              <Routes>
                <Route path={Paths.HOME} element={<HomePage />} exact />
                <Route path={`${Paths.EXPERIENCE}/*`} element={<ExperiencePage />} />
                <Route path={`${Paths.DOCUMENTS}/*`} element={<DocumentsPage />} />
                <Route path={Paths.CONTACT} element={<ContactsPage />} />
                <Route path="*" element={<Navigate replace to={Paths.HOME} />} />
              </Routes>
              <MapModal open={isMapModalOpen} close={() => { setMapModalOpen(false); }} />
              <PhoneModal open={isPhoneModalOpen} close={() => { setPhoneModalOpen(false); }} />
              <EmailModal open={isEmailModalOpen} close={() => { setEmailModalOpen(false); }} />
            </Content>
          </>
        );
      }}
    />
  </div>
);

export default App;
