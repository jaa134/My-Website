import React, { Fragment } from 'react';
import { Link } from 'carbon-components-react';
import defineBlock from '../../../utils/defineBlock';
import {
  devPractices,
  languages,
  other,
  services,
  technologies
} from './constants';
import './SkillsPage.scss';

const bem = defineBlock('SkillsPage');

const renderSkills = (skills) => (
  skills.map(({ displayText, imagePath, href }) => {
    const content = (
      <>
        <img
          className={bem('image')}
          src={imagePath}
          alt="logo"
          height="80"
          width="80"
        />
        <div className={bem('name')}>{displayText}</div>
      </>
    );
    return href
      ? (
        <Link
          key={displayText}
          className={bem('skill')}
          href={href}
          target="_blank"
          rel="noreferrer"
          size="lg"
        >
          {content}
        </Link>
      ) : (
        <div
          key={displayText}
          className={bem('skill')}
        >
          {content}
        </div>
      );
  })
);

const renderSkillsSection = (title, skills) => (
  <div className={bem('section')}>
    <h3 className={bem('title')}>
      {title}
    </h3>
    <div className={bem('skills')}>
      {renderSkills(skills)}
    </div>
  </div>
);

const SkillsPage = () => (
  <div className={bem()}>
    {renderSkillsSection('Languages', languages)}
    {renderSkillsSection('Technologies', technologies)}
    {renderSkillsSection('Services', services)}
    {renderSkillsSection('Development practices', devPractices)}
    {renderSkillsSection('Other', other)}
  </div>
);

export default SkillsPage;
