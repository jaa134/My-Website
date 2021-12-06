import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { paths } from '../../constants';
import PageBase from '../../common/PageBase';
import ResumePage from './ResumePage';
import CvPage from './CvPage';

const DocumentsPage = () => (
  <PageBase
    title="Documents"
    subtitle="Review a summary of my greatest achievements"
    tabs={[{
      text: 'Resume',
      href: `${paths.DOCUMENTS}${paths.RESUME}`
    }, {
      text: 'CV',
      href: `${paths.DOCUMENTS}${paths.CV}`
    }]}
  >
    <Routes>
      <Route path="/" element={<Navigate replace to={`${paths.DOCUMENTS}${paths.RESUME}`} />} />
      <Route path={paths.RESUME} element={<ResumePage />} />
      <Route path={paths.CV} element={<CvPage />} />
      <Route path="*" element={<Navigate replace to={paths.HOME} />} />
    </Routes>
  </PageBase>
);

export default DocumentsPage;
