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
import { links } from '../../../constants';
import defineBlock from '../../../utils/defineBlock';
import { headerData, rowData, rowDataExtended } from './constants';
import './EducationPage.scss';

const bem = defineBlock('EducationPage');

const EducationPage = () => (
  <div className={bem()}>
    <div className={bem('universities')}>
      <div className={bem('uni-info', 'CWRU')}>
        <Link
          className={bem('uni-logo')}
          href={links.CWRU}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="images/CWRU_logo.svg"
            alt="CWRU logo"
          />
        </Link>
        <div className={bem(['uni-row', 'graduation'])}>Graduated in spring 2019, Cum Laude</div>
        <div className={bem(['uni-row', 'degree'])}>
          B.S. in computer science<span className={bem('gpa')}>(3.634 / 4.0)</span>
        </div>
        <div className={bem(['uni-row', 'intent'])}>Intent for software engineering in industry</div>
      </div>
      <div className={bem('uni-spacer')} />
      <div className={bem('uni-info', 'UCT')}>
        <Link
          className={bem('uni-logo')}
          href={links.UCT}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="images/UCT_logo.png"
            alt="UCT logo"
          />
        </Link>
        <div className={bem(['uni-row', 'reason'])}>
          <Link
            href={links.IES}
            target="_blank"
            rel="noreferrer"
          >
            IES Study Abroad
          </Link> program in South Africa
        </div>
        <div className={bem(['uni-row', 'attendance'])}>Attended in spring 2017</div>
        <div className={bem(['uni-row', 'intent'])}>Studied humanities and environmental sciences</div>
      </div>
    </div>
    <DataTable headers={headerData} rows={rowData} isSortable>
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
                persistent
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
                  termDisplayText, department, instructor, description, links: rowLinks, comment
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
                        {termDisplayText}
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
                        {rowLinks.length > 0 && (
                          <div className={bem('row')}>
                            <h6>Links</h6>
                            <ul className={bem('row-links')}>
                              {rowLinks.map(({ displayText, href }) => (
                                <li key={displayText}>
                                  <Link
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {displayText}
                                  </Link>
                                </li>
                              ))}
                            </ul>
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
