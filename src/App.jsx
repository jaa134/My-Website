import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Search20 from '@carbon/icons-react/lib/search/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
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
    <Header aria-label="Jacob Alspaw">
      <HeaderName className={bem('header-name')} href={`#${Paths.HOME}`} prefix="Jacob">
        [Alspaw]
      </HeaderName>
      <HeaderNavigation aria-label="Jacob Alspaw">
        <HeaderMenuItem href={`#${Paths.HOME}`}>Profile</HeaderMenuItem>
        <HeaderMenu aria-label="Experience" menuLinkName="Experience">
          <HeaderMenuItem href={`#${Paths.EDUCATION}`}>Education</HeaderMenuItem>
          <HeaderMenuItem href={`#${Paths.SKILLS}`}>Skills</HeaderMenuItem>
          <HeaderMenuItem href={`#${Paths.PROJECTS}`}>Projects</HeaderMenuItem>
        </HeaderMenu>
        <HeaderMenuItem href={`#${Paths.DOCUMENTS}`}>Documents</HeaderMenuItem>
        <HeaderMenuItem href={`#${Paths.CONTACTS}`}>Contact</HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
          <Search20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
          <AppSwitcher20 />
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
