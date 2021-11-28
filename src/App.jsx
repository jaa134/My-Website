import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import { Paths } from './constants';
import defineBlock from './utils/defineBlock';
import HomePage from './modules/home/HomePage';
import EducationPage from './modules/education/EducationPage';
import SkillsPage from './modules/skills/SkillsPage';
import ProjectsPage from './modules/projects/ProjectsPage';
import DocumentsPage from './modules/documents/DocumentsPage';
import ContactsPage from './modules/contacts/ContactsPage';
import './App.scss';

const bem = defineBlock('App');

const App = () => {
  const [rightPanelExpanded, setRightPanelExpanded] = useState(false);
  const toggleRightPanel = () => {
    setRightPanelExpanded(!rightPanelExpanded);
  };
  return (
    <div className={bem()}>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header className={bem('header')} aria-label="Jacob Alspaw">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="Jacob">
                [Alspaw]
              </HeaderName>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Location" onClick={() => {}}>
                  <LocationPerson20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Phone" onClick={() => {}}>
                  <Phone20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Email" onClick={() => {}}>
                  <Email20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Applications"
                  tooltipAlignment="end"
                  isActive={rightPanelExpanded}
                  onClick={toggleRightPanel}
                >
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                <SideNavItems>
                  <SideNavLink large renderIcon={UserAvatar20} href={`#${Paths.HOME}`}>
                    Profile
                  </SideNavLink>
                  <SideNavMenu large renderIcon={Cognitive20} title="Experience">
                    <SideNavMenuItem href={`#${Paths.SKILLS}`}>
                      Technical skills
                    </SideNavMenuItem>
                    <SideNavMenuItem href={`#${Paths.PROJECTS}`}>
                      Employment
                    </SideNavMenuItem>
                    <SideNavMenuItem href={`#${Paths.PROJECTS}`}>
                      Projects
                    </SideNavMenuItem>
                    <SideNavMenuItem href={`#${Paths.EDUCATION}`}>
                      Education
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu large renderIcon={Document20} title="Documents">
                    <SideNavMenuItem href={`#${Paths.DOCUMENTS}`}>
                      Resume
                    </SideNavMenuItem>
                    <SideNavMenuItem href={`#${Paths.DOCUMENTS}`}>
                      Curriculum vitae
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavLink large renderIcon={Chat20} href={`#${Paths.CONTACT}`}>
                    Contact
                  </SideNavLink>
                </SideNavItems>
              </SideNav>
              <HeaderPanel aria-label="Header panel" expanded={rightPanelExpanded}>
                <Switcher aria-label="Switcher container">
                  <SwitcherItem aria-label="Linkedin" href="#">
                    <LogoLinkedin24 /> Linkedin
                  </SwitcherItem>
                  <SwitcherItem aria-label="Github" href="#">
                    <LogoGithub24 /> Github
                  </SwitcherItem>
                  <SwitcherItem aria-label="Facebook" href="#">
                    <LogoFacebook24 /> Facebook
                  </SwitcherItem>
                  <SwitcherItem aria-label="Instagram" href="#">
                    <LogoInstagram24 /> Instagram
                  </SwitcherItem>
                </Switcher>
              </HeaderPanel>
            </Header>
            <Content id="main-content">
              <Routes>
                <Route path={Paths.HOME} element={<HomePage />} exact />
                <Route path={Paths.EDUCATION} element={<EducationPage />} />
                <Route path={Paths.SKILLS} element={<SkillsPage />} />
                <Route path={Paths.PROJECTS} element={<ProjectsPage />} />
                <Route path={Paths.DOCUMENTS} element={<DocumentsPage />} />
                <Route path={Paths.CONTACT} element={<ContactsPage />} />
                <Route path="*" element={<Navigate replace to={Paths.HOME} />} />
              </Routes>
            </Content>
          </>
        )}
      />
    </div>
  );
};

export default App;
