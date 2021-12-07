import React from 'react';
import defineBlock from '../../../utils/defineBlock';
import { achievements, jobs } from './constants';
import './EmploymentPage.scss';

const bem = defineBlock('EmploymentPage');

const renderSection = ({
  company, start, end, roles
}) => (
  <div className={bem('section')}>
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
  </div>
);

const EmploymentPage = () => (
  <div className={bem()}>
    <div className={bem('intro')}>
      <h3>My career achievements</h3>
      <ul className={bem('achievements')}>
        {achievements.map((achievement) => (
          <li key={achievement} className={bem('achievement')}>{achievement}</li>
        ))}
      </ul>
    </div>
    {renderSection(jobs.ACCELERATE)}
    {renderSection(jobs.LAUNCH)}
  </div>
);

export default EmploymentPage;
