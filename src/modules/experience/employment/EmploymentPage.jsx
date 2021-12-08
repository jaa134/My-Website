import React from 'react';
import defineBlock from '../../../utils/defineBlock';
import { achievements, jobs } from './constants';
import './EmploymentPage.scss';

const bem = defineBlock('EmploymentPage');

const renderSection = ({
  isAcademic, company, start, end, tags, roles
}) => (
  <div className={bem('section')}>
    {isAcademic && (
      <div className={bem('academic')}>*Academic exercise only</div>
    )}
    <div className={bem('dates')}>
      {start} - {end}
    </div>
    <h3 className={bem('company')}>
      {company}
    </h3>
    {roles.map(({ name, duties }) => (
      <div key={name} className={bem('role')}>
        <h4 className={bem('name')}>
          {name}
        </h4>
        <ul className={bem('duties')}>
          {duties.map((duty) => (
            <li key={duty} className={bem('duty')}>{duty}</li>
          ))}
        </ul>
      </div>
    ))}
    {tags.length > 0 && (
      <div className={bem('row')}>
        <div className={bem('tags')}>
          {tags.map(({ name, type }) => (
            <span key={name} className={bem('tag', type)}>{name}</span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const EmploymentPage = () => (
  <div className={bem()}>
    <div className={bem('intro')}>
      <h3>Career achievements and highlights</h3>
      <ul className={bem('achievements')}>
        {achievements.map((achievement) => (
          <li key={achievement} className={bem('achievement')}>{achievement}</li>
        ))}
      </ul>
    </div>
    {renderSection(jobs.ACCELERATE)}
    {renderSection(jobs.LAUNCH)}
    {renderSection(jobs.L3_SUPPORT)}
    {renderSection(jobs.MATRIX)}
    {renderSection(jobs.CWRUDED)}
    {renderSection(jobs.SYNCHRONY)}
    {renderSection(jobs.PICLOCK)}
    {renderSection(jobs.LYGENT)}
    {renderSection(jobs.TUTOR)}
    {renderSection(jobs.WEBMASTER)}
  </div>
);

export default EmploymentPage;
