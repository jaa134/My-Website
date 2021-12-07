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
import './ProjectsPage.scss';

const bem = defineBlock('ProjectsPage');

const ProjectsPage = () => (
  <div className={bem()}>
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
          title="Personal projects"
          description="Find below the details of my personal projects"
          {...getTableContainerProps()}
        >
          <TableToolbar {...getToolbarProps()}>
            <TableToolbarContent>
              <TableToolbarSearch
                persistent
                onChange={onInputChange}
              />
              <Button
                onClick={() => { window.open(links.REPOS, '_blank'); }}
                size="small"
                kind="primary"
                renderIcon={Launch20}
              >
                View GitHub repos
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
                  startedDisplayText, finishedDisplayText, outline, tags, links: rowLinks
                } = rowDataExtended[id];
                return (
                  <Fragment key={id}>
                    <TableExpandRow {...getRowProps({ row })}>
                      <TableCell key={cells[0].id}>
                        {!!cells[0].value && (
                          <div title="Favorite project">
                            <StarFilled20 />
                          </div>
                        )}
                      </TableCell>
                      <TableCell key={cells[1].id}>
                        {cells[1].value}
                      </TableCell>
                      <TableCell key={cells[2].id} className={bem('description')}>
                        {cells[2].value}
                      </TableCell>
                      <TableCell key={cells[3].id}>
                        {startedDisplayText}
                      </TableCell>
                      <TableCell key={cells[4].id}>
                        {finishedDisplayText}
                      </TableCell>
                      <TableCell key={cells[5].id}>
                        <div className={bem('status-container')}>
                          <span className={bem('status', cells[5].value)} />{cells[5].value}
                        </div>
                      </TableCell>
                    </TableExpandRow>
                    <TableExpandedRow
                      colSpan={headers.length + 1}
                      className="demo-expanded-td"
                    >
                      <div className={bem('extended-project-info')}>
                        {outline && (
                          <div className={bem('row')}>
                            <h6>Outline</h6>
                            <div>{outline}</div>
                          </div>
                        )}
                        {tags.length > 0 && (
                          <div className={bem('row')}>
                            <h6>Tags</h6>
                            <div className={bem('tags-container')}>
                              {tags.map(({ name, type }) => (
                                <span key={name} className={bem('tag', type)}>{name}</span>
                              ))}
                            </div>
                          </div>
                        )}
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

export default ProjectsPage;
