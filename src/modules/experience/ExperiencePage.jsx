import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { paths } from '../../constants';
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
      href: `${paths.EXPERIENCE}${paths.SKILLS}`
    }, {
      text: 'Employment',
      href: `${paths.EXPERIENCE}${paths.EMPLOYMENT}`
    }, {
      text: 'Projects',
      href: `${paths.EXPERIENCE}${paths.PROJECTS}`
    }, {
      text: 'Education',
      href: `${paths.EXPERIENCE}${paths.EDUCATION}`
    }]}
  >
    <Routes>
      <Route path="/" element={<Navigate replace to={`${paths.EXPERIENCE}${paths.SKILLS}`} />} />
      <Route path={paths.SKILLS} element={<SkillsPage />} />
      <Route path={paths.EMPLOYMENT} element={<EmploymentPage />} />
      <Route path={paths.PROJECTS} element={<ProjectsPage />} />
      <Route path={paths.EDUCATION} element={<EducationPage />} />
      <Route path="*" element={<Navigate replace to={paths.HOME} />} />
    </Routes>
  </PageBase>
);

export default ExperiencePage;
