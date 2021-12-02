import React, { useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';
import LocationPerson20 from '@carbon/icons-react/lib/location--person/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import Cognitive20 from '@carbon/icons-react/lib/cognitive/20';
import Document20 from '@carbon/icons-react/lib/document/20';
import Chat20 from '@carbon/icons-react/lib/chat/20';
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
  HeaderGlobalAction,
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem
} from 'carbon-components-react/lib/components/UIShell';
import { Paths, Links } from './constants';
import defineBlock from './utils/defineBlock';
import { isPathMatch } from './utils/pathUtils';
import MapModal from './modules/modals/MapModal';
import PhoneModal from './modules/modals/PhoneModal';
import EmailModal from './modules/modals/EmailModal';
import HomePage from './modules/home/HomePage';
import SkillsPage from './modules/skills/SkillsPage';
import EmploymentPage from './modules/employment/EmploymentPage';
import ProjectsPage from './modules/projects/ProjectsPage';
import EducationPage from './modules/education/EducationPage';
import ResumePage from './modules/documents/ResumePage';
import CvPage from './modules/documents/CvPage';
import ContactsPage from './modules/contacts/ContactsPage';
import './App.scss';

const bem = defineBlock('App');

const App = () => (
  <div className={bem()}>
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => {
        const location = useLocation();
        const [isMapModalOpen, setMapModalOpen] = useState(false);
        const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
        const [isEmailModalOpen, setEmailModalOpen] = useState(false);
        const [rightPanelExpanded, setRightPanelExpanded] = useState(false);
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
              <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                <SideNavItems>
                  <SideNavLink
                    large
                    renderIcon={UserAvatar20}
                    href={`#${Paths.HOME}`}
                    isActive={isPathMatch(Paths.HOME, location.pathname)}
                  >
                    Profile
                  </SideNavLink>
                  <SideNavMenu large renderIcon={Cognitive20} title="Experience">
                    <SideNavMenuItem href={`#${Paths.SKILLS}`} isActive={isPathMatch(Paths.SKILLS, location.pathname)}>
                      Technical skills
                    </SideNavMenuItem>
                    <SideNavMenuItem href={`#${Paths.EMPLOYMENT}`} isActive={isPathMatch(Paths.EMPLOYMENT, location.pathname)}>
                      Employment
                    </SideNavMenuItem>
                    <SideNavMenuItem href={`#${Paths.PROJECTS}`} isActive={isPathMatch(Paths.PROJECTS, location.pathname)}>
                      Projects
                    </SideNavMenuItem>
                    <SideNavMenuItem href={`#${Paths.EDUCATION}`} isActive={isPathMatch(Paths.EDUCATION, location.pathname)}>
                      Education
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu large renderIcon={Document20} title="Documents">
                    <SideNavMenuItem href={`#${Paths.RESUME}`} isActive={isPathMatch(Paths.RESUME, location.pathname)}>
                      Resume
                    </SideNavMenuItem>
                    <SideNavMenuItem href={`#${Paths.CV}`} isActive={isPathMatch(Paths.CV, location.pathname)}>
                      Curriculum vitae
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavLink
                    large
                    renderIcon={Chat20}
                    href={`#${Paths.CONTACT}`}
                    isActive={isPathMatch(Paths.CONTACT, location.pathname)}
                  >
                    Contact
                  </SideNavLink>
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
                <Route path={Paths.SKILLS} element={<SkillsPage />} />
                <Route path={Paths.EMPLOYMENT} element={<EmploymentPage />} />
                <Route path={Paths.PROJECTS} element={<ProjectsPage />} />
                <Route path={Paths.EDUCATION} element={<EducationPage />} />
                <Route path={Paths.RESUME} element={<ResumePage />} />
                <Route path={Paths.CV} element={<CvPage />} />
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
