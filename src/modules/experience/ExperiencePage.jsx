import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Paths } from '../../constants';
import PageBase from '../../common/PageBase';
import SkillsPage from './skills/SkillsPage';
import EmploymentPage from './employment/EmploymentPage';
import ProjectsPage from './projects/ProjectsPage';
import EducationPage from './education/EducationPage';

const ExperiencePage = () => (
  <PageBase
    title="Experience"
    subtitle="Take a closer look at what I've been up to"
    tabs={[{
      text: 'Skills',
      href: `${Paths.EXPERIENCE}${Paths.SKILLS}`
    }, {
      text: 'Employment',
      href: `${Paths.EXPERIENCE}${Paths.EMPLOYMENT}`
    }, {
      text: 'Projects',
      href: `${Paths.EXPERIENCE}${Paths.PROJECTS}`
    }, {
      text: 'Education',
      href: `${Paths.EXPERIENCE}${Paths.EDUCATION}`
    }]}
  >
    <Routes>
      <Route path="/" element={<Navigate replace to={`${Paths.EXPERIENCE}${Paths.SKILLS}`} />} />
      <Route path={Paths.SKILLS} element={<SkillsPage />} />
      <Route path={Paths.EMPLOYMENT} element={<EmploymentPage />} />
      <Route path={Paths.PROJECTS} element={<ProjectsPage />} />
      <Route path={Paths.EDUCATION} element={<EducationPage />} />
      <Route path="*" element={<Navigate replace to={Paths.HOME} />} />
    </Routes>
  </PageBase>
);

export default ExperiencePage;
