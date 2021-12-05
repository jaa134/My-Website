import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Paths } from '../../constants';
import PageBase from '../../common/PageBase';
import ResumePage from './ResumePage';
import CvPage from './CvPage';

const DocumentsPage = () => (
  <PageBase
    title="Documents"
    subtitle="Review a summary of my greatest achievements"
    tabs={[{
      text: 'Resume',
      href: `${Paths.DOCUMENTS}${Paths.RESUME}`
    }, {
      text: 'CV',
      href: `${Paths.DOCUMENTS}${Paths.CV}`
    }]}
  >
    <Routes>
      <Route path="/" element={<Navigate replace to={`${Paths.DOCUMENTS}${Paths.RESUME}`} />} />
      <Route path={Paths.RESUME} element={<ResumePage />} />
      <Route path={Paths.CV} element={<CvPage />} />
      <Route path="*" element={<Navigate replace to={Paths.HOME} />} />
    </Routes>
  </PageBase>
);

export default DocumentsPage;
