import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LocationPerson24 from '@carbon/icons-react/lib/location--person/24';
import Phone24 from '@carbon/icons-react/lib/phone/24';
import Email24 from '@carbon/icons-react/lib/email/24';
import LogoGithub24 from '@carbon/icons-react/lib/logo--github/24';
import LogoFacebook24 from '@carbon/icons-react/lib/logo--facebook/24';
import LogoLinkedin24 from '@carbon/icons-react/lib/logo--linkedin/24';
import {
  Content,
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
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

const App = () => (
  <div className={bem()}>
    <Header className={bem('header')} aria-label="Jacob Alspaw">
      <HeaderName href={`#${Paths.HOME}`} prefix="Jacob">
        [Alspaw]
      </HeaderName>
      <HeaderNavigation aria-label="Jacob Alspaw">
        <HeaderMenuItem href={`#${Paths.HOME}`}>Profile</HeaderMenuItem>
        <HeaderMenu aria-label="Experience" menuLinkName="Experience">
          <HeaderMenuItem href={`#${Paths.SKILLS}`}>Technical skills</HeaderMenuItem>
          <HeaderMenuItem href={`#${Paths.PROJECTS}`}>Employment</HeaderMenuItem>
          <HeaderMenuItem href={`#${Paths.PROJECTS}`}>Projects</HeaderMenuItem>
          <HeaderMenuItem href={`#${Paths.EDUCATION}`}>Education</HeaderMenuItem>
        </HeaderMenu>
        <HeaderMenu aria-label="Documents" menuLinkName="Documents">
          <HeaderMenuItem href={`#${Paths.DOCUMENTS}`}>Resume</HeaderMenuItem>
          <HeaderMenuItem href={`#${Paths.DOCUMENTS}`}>Curriculum vitae</HeaderMenuItem>
        </HeaderMenu>
        <HeaderMenuItem href={`#${Paths.CONTACTS}`}>Contact</HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Location" onClick={() => {}}>
          <LocationPerson24 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Phone" onClick={() => {}}>
          <Phone24 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Email" onClick={() => {}}>
          <Email24 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Github" onClick={() => {}}>
          <LogoGithub24 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Facebook" onClick={() => {}}>
          <LogoFacebook24 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="LinkedIn" onClick={() => {}}>
          <LogoLinkedin24 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
    <Content id="main-content">
      <Routes>
        <Route path={Paths.HOME} element={<HomePage />} exact />
        <Route path={Paths.EDUCATION} element={<EducationPage />} />
        <Route path={Paths.SKILLS} element={<SkillsPage />} />
        <Route path={Paths.PROJECTS} element={<ProjectsPage />} />
        <Route path={Paths.DOCUMENTS} element={<DocumentsPage />} />
        <Route path={Paths.CONTACTS} element={<ContactsPage />} />
        <Route path="*" element={<Navigate replace to={Paths.HOME} />} />
      </Routes>
    </Content>
  </div>
);

export default App;
