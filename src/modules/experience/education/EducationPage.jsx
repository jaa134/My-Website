import React, { Fragment } from 'react';
import {
  Link,
  Button,
  DataTable,
  TableContainer,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  Table,
  TableHead,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableRow,
  TableExpandRow,
  TableExpandedRow,
  TableCell
} from 'carbon-components-react';
import Launch20 from '@carbon/icons-react/lib/launch/20';
import StarFilled20 from '@carbon/icons-react/lib/star--filled/20';
import { Links } from '../../../constants';
import defineBlock from '../../../utils/defineBlock';
import './EducationPage.scss';

const courses = {
  CHEM_111: 'CHEM 111',
  EECS_132: 'EECS 132',
  FSNA_148: 'FSNA 148',
  MATH_224: 'MATH 224',
  PHED_182: 'PHED 182'
};

const headerData = [{
  key: 'isFavorite',
  header: ''
}, {
  key: 'term',
  header: 'Term'
}, {
  key: 'code',
  header: 'Code'
}, {
  key: 'name',
  header: 'Name'
}, {
  key: 'letterGrade',
  header: 'Letter grade'
}];

const rowData = [{
  id: courses.CHEM_111,
  code: courses.CHEM_111,
  term: 'Fall 2014',
  name: 'Principles of Chemistry for Engineers',
  letterGrade: 'B',
  isFavorite: false
}, {
  id: courses.EECS_132,
  code: courses.EECS_132,
  term: 'Fall 2014',
  name: 'Introduction to Programming in Java',
  letterGrade: 'B',
  isFavorite: true
}, {
  id: courses.FSNA_148,
  code: courses.FSNA_148,
  term: 'Fall 2014',
  name: 'Science or Pseudoscience? Exploring Extraordinary Claims',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.MATH_224,
  code: courses.MATH_224,
  term: 'Fall 2014',
  name: 'Elementary Differential Equations',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.PHED_182,
  code: courses.PHED_182,
  term: 'Fall 2014',
  name: 'Varsity Swimming',
  letterGrade: 'P',
  isFavorite: false
}];

const rowDataExtended = {
  [courses.CHEM_111]: {
    department: 'Chemistry',
    instructor: 'Drew Meyer',
    description: 'A first course in university chemistry emphasizing chemistry of materials for engineering students. Atomic theory and quantitative relationships; gas laws and kinetic theory; solutions, acid-base properties and pH; thermodynamics and equilibrium; kinetics, catalysis, and mechanisms; molecular structure and bonding. Recommended preparation: One year of high school chemistry or permission of department.',
    links: [],
    comment: ''
  },
  [courses.EECS_132]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Harold Connamacher',
    description: 'Introduction to computer programming and problem solving with the Java language. Computers, operating systems, and Java applications; software development; conditional statements; loops; methods; arrays; classes and objects; object-oriented design; unit testing; strings and text I/O; inheritance and polymorphism; GUI components; application testing; abstract classes and interfaces; exception handling; files and streams; GUI event handling; generics; collections; threads; comparison of Java to C, C++, and C#.',
    links: [],
    comment: '"Introduction to Programming in Java" is the course in which I decided to pursue a degree in computer science. Harold Connamacher is the best professor/lecturer I have had the pleasure to take a course from. His lectures are engaging and his asignments are challenging, but not impossible.'
  },
  [courses.FSNA_148]: {
    department: 'First Seminar Natural World',
    instructor: 'Michele Hanks',
    description: 'In the contemporary world, extraordinary claims about ghosts, aliens, and the nature of the universe appear on popular television shows, on the Internet, and in the press. Many of these claims are framed as science. In this seminar, we critically examine the nature of these understandings of the world around us. We will ask if these claims are scientific and, if not, whether they constitute a form of pseudoscience. We will explore the role of demarcation, evidence, scientific progress, and fallacies of reasoning in pseudoscience. We will also consider the historical and sociocultural currents that give rise to these pseudoscientific claims as well as their social and political implications. Drawing on anthropological, philosophical, and historical case studies, we will consider topics such as cryptozoology, astrology, ancient aliens, parapsychology, the Nemesis theory of dinosaur extinctions, theories of intelligence, and other extraordinary claims.',
    links: [],
    comment: ''
  },
  [courses.MATH_224]: {
    department: 'Mathematics',
    instructor: 'David Gurarie',
    description: 'A first course in ordinary differential equations. First order equations and applications, linear equations with constant coefficients, linear systems, Laplace transforms, numerical methods of solution.',
    links: [],
    comment: ''
  },
  [courses.PHED_182]: {
    department: 'Physical Education',
    instructor: 'Douglas Milliken',
    description: 'A course that varsity swimming athletes can take to meet university requirments on physical health and education. Swimmers will practice up to 11 sessions a week for 2 hours with weekly competitions against local D3 colleges and universities. Expect to be in the pool for 20+ hours each week.',
    links: [
      {
        displayText: 'CWRU Athletics - Swimming',
        href: 'https://athletics.case.edu/sports/mswimdive/index'
      }
    ],
    comment: ''
  }
};

const bem = defineBlock('EducationPage');

const EducationPage = () => (
  <div className={bem()}>
    <div className={bem('uni-info')}>
      <Link
        className={bem('uni-logo')}
        href={Links.CWRU}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="images/CWRU_logo.svg"
          alt="profile"
        />
      </Link>
      <div className={bem(['uni-row', 'graduation'])}>Graduated in spring 2019</div>
      <div className={bem(['uni-row', 'degree'])}>
        B.S. in computer science<span className={bem('gpa')}>(3.634 / 4.0)</span>
      </div>
      <div className={bem(['uni-row', 'intent'])}>Intent for software engineering in industry</div>
    </div>
    <DataTable headers={headerData} rows={rowData}>
      {({
        rows,
        headers,
        getToolbarProps,
        onInputChange,
        getExpandHeaderProps,
        getHeaderProps,
        getRowProps,
        getTableProps,
        getTableContainerProps
      }) => (
        <TableContainer
          title="Courses taken"
          description="Find below the details of my university courses"
          {...getTableContainerProps()}
        >
          <TableToolbar {...getToolbarProps()}>
            <TableToolbarContent>
              <TableToolbarSearch
                persistent="true"
                onChange={onInputChange}
              />
              <Button
                onClick={() => { window.open('https://github.com/jaa134/Education-CWRU', '_blank'); }}
                size="small"
                kind="primary"
                renderIcon={Launch20}
              >
                View course work
              </Button>
            </TableToolbarContent>
          </TableToolbar>
          <Table {...getTableProps()} size="lg">
            <TableHead>
              <TableRow>
                <TableExpandHeader enableExpando {...getExpandHeaderProps()} />
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                const { id, cells } = row;
                const {
                  department, instructor, description, links, comment
                } = rowDataExtended[id];
                return (
                  <Fragment key={id}>
                    <TableExpandRow {...getRowProps({ row })}>
                      <TableCell key={cells[0].id}>
                        {!!cells[0].value && (
                          <div title="Favorite class">
                            <StarFilled20 />
                          </div>
                        )}
                      </TableCell>
                      <TableCell key={cells[1].id}>
                        {cells[1].value}
                      </TableCell>
                      <TableCell key={cells[2].id}>
                        {cells[2].value}
                      </TableCell>
                      <TableCell key={cells[3].id}>
                        {cells[3].value}
                      </TableCell>
                      <TableCell key={cells[4].id}>
                        <span className={bem('grade', cells[4].value)}>
                          {cells[4].value}
                        </span>
                      </TableCell>
                    </TableExpandRow>
                    <TableExpandedRow
                      colSpan={headers.length + 1}
                      className="demo-expanded-td"
                    >
                      <div className={bem('extended-course-info')}>
                        <div className={bem('row')}>
                          <div className={bem('quick-detail')}>
                            <h6>Department</h6>
                            <div className={bem('value')}>{department}</div>
                          </div>
                          <div className={bem('quick-detail')}>
                            <h6>Instructor</h6>
                            <div className={bem('value')}>{instructor}</div>
                          </div>
                        </div>
                        <div className={bem('row')}>
                          <h6>Description</h6>
                          <div>{description}</div>
                        </div>
                        {links.length > 0 && (
                          <div className={bem('row')}>
                            <h6>Links</h6>
                            <div>
                              {links.map(({ displayText, href }) => (
                                <Link
                                  href={href}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {displayText}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                        {comment && (
                          <div className={bem('row')}>
                            <h6>Comments</h6>
                            <div>{comment}</div>
                          </div>
                        )}
                      </div>
                    </TableExpandedRow>
                  </Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
  </div>
);

export default EducationPage;
