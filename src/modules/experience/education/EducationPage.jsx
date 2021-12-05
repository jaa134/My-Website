import React from 'react';
import {
  Link,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell
} from 'carbon-components-react';
import StarFilled20 from '@carbon/icons-react/lib/star--filled/20';
import { Links } from '../../../constants';
import defineBlock from '../../../utils/defineBlock';
import './EducationPage.scss';

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
  id: 'c1',
  term: 'Fall 2014',
  code: 'CHEM 111',
  name: 'Principles of Chemistry for Engineers',
  letterGrade: 'B',
  department: 'Chemistry',
  instructor: 'Drew Meyer',
  description: 'A first course in university chemistry emphasizing chemistry of materials for engineering students. Atomic theory and quantitative relationships; gas laws and kinetic theory; solutions, acid-base properties and pH; thermodynamics and equilibrium; kinetics, catalysis, and mechanisms; molecular structure and bonding. Recommended preparation: One year of high school chemistry or permission of department.',
  links: [],
  isFavorite: false,
  comment: ''
}, {
  id: 'c2',
  term: 'Fall 2014',
  code: 'EECS 132',
  name: 'Introduction to Programming in Java',
  letterGrade: 'B',
  department: 'Electrical Engr & Comp Sci',
  instructor: 'Harold Connamacher',
  description: 'Introduction to computer programming and problem solving with the Java language. Computers, operating systems, and Java applications; software development; conditional statements; loops; methods; arrays; classes and objects; object-oriented design; unit testing; strings and text I/O; inheritance and polymorphism; GUI components; application testing; abstract classes and interfaces; exception handling; files and streams; GUI event handling; generics; collections; threads; comparison of Java to C, C++, and C#.',
  links: [],
  isFavorite: true,
  comment: '"Introduction to Programming in Java" is the course in which I decided to pursue a degree in computer science. Harold Connamacher is the best professor/lecturer I have had the pleasure to take a course from.'
}, {
  id: 'c3',
  term: 'Fall 2014',
  code: 'FSNA 148',
  name: 'Science or Pseudoscience? Exploring Extraordinary Claims',
  letterGrade: 'A',
  department: 'First Seminar Natural World',
  instructor: 'Michele Hanks',
  description: 'In the contemporary world, extraordinary claims about ghosts, aliens, and the nature of the universe appear on popular television shows, on the Internet, and in the press. Many of these claims are framed as science. In this seminar, we critically examine the nature of these understandings of the world around us. We will ask if these claims are scientific and, if not, whether they constitute a form of pseudoscience. We will explore the role of demarcation, evidence, scientific progress, and fallacies of reasoning in pseudoscience. We will also consider the historical and sociocultural currents that give rise to these pseudoscientific claims as well as their social and political implications. Drawing on anthropological, philosophical, and historical case studies, we will consider topics such as cryptozoology, astrology, ancient aliens, parapsychology, the Nemesis theory of dinosaur extinctions, theories of intelligence, and other extraordinary claims.',
  links: [],
  isFavorite: false,
  comment: ''
}, {
  id: 'c4',
  term: 'Fall 2014',
  code: 'MATH 224',
  name: 'Elementary Differential Equations',
  letterGrade: 'A',
  department: 'Mathematics',
  instructor: 'David Gurarie',
  description: 'A first course in ordinary differential equations. First order equations and applications, linear equations with constant coefficients, linear systems, Laplace transforms, numerical methods of solution.',
  links: [],
  isFavorite: false,
  comment: ''
}, {
  id: 'c5',
  term: 'Fall 2014',
  code: 'PHED 182',
  name: 'Varsity Swimming',
  letterGrade: 'P',
  department: 'Physical Education',
  instructor: 'Douglas Milliken',
  description: 'A course that varsity swimming athletes can take to meet university requirments on physical health and education. Swimmers will practice up to 11 sessions a week for 2 hours with weekly competitions against local D3 colleges and universities. Expect to be in the pool for 20+ hours each week.',
  links: [
    {
      name: 'CWRU Athletics - Swimming',
      href: 'https://athletics.case.edu/sports/mswimdive/index'
    }
  ],
  isFavorite: false,
  comment: ''
}];

const bem = defineBlock('EducationPage');

const EducationPage = () => (
  <div className={bem()}>
    <div className={bem('info')}>
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
      <div className={bem(['row', 'graduation'])}>Graduated in spring 2019</div>
      <div className={bem(['row', 'degree'])}>
        B.S. in computer science<span className={bem('gpa')}>(3.634 / 4.0)</span>
      </div>
      <div className={bem(['row', 'intent'])}>Intent for software engineering in industry</div>
    </div>
    <DataTable headers={headerData} rows={rowData}>
      {({
        rows, headers, getHeaderProps, getTableProps
      }) => (
        <TableContainer title="Courses taken">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell key={row.cells[0].id}>
                    {!!row.cells[0].value && <StarFilled20 />}
                  </TableCell>
                  <TableCell key={row.cells[1].id}>
                    {row.cells[1].value}
                  </TableCell>
                  <TableCell key={row.cells[2].id}>
                    {row.cells[2].value}
                  </TableCell>
                  <TableCell key={row.cells[3].id}>
                    {row.cells[3].value}
                  </TableCell>
                  <TableCell key={row.cells[4].id}>
                    <span className={bem('grade', row.cells[4].value)}>
                      {row.cells[4].value}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
  </div>
);

export default EducationPage;
