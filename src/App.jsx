import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import HomePage from './modules/home/HomePage';
import EducationPage from './modules/education/EducationPage';
import SkillsPage from './modules/skills/SkillsPage';
import ProjectsPage from './modules/projects/ProjectsPage';
import DocumentsPage from './modules/documents/DocumentsPage';
import './App.scss';

const App = () => (
  <div className="App">
    <Header aria-label="IBM Platform Name">
      <HeaderName href={`#${Paths.HOME}`} prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem href={`#${Paths.HOME}`}>About</HeaderMenuItem>
        <HeaderMenu aria-label="Experience" menuLinkName="Experience">
          <HeaderMenuItem href={`#${Paths.EDUCATION}`}>Education</HeaderMenuItem>
          <HeaderMenuItem href={`#${Paths.SKILLS}`}>Skills</HeaderMenuItem>
          <HeaderMenuItem href={`#${Paths.PROJECTS}`}>Projects</HeaderMenuItem>
          <HeaderMenuItem href={`#${Paths.DOCUMENTS}`}>Documents</HeaderMenuItem>
        </HeaderMenu>
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
      </Routes>
    </Content>
  </div>
);

export default App;
