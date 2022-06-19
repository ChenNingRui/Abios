import React from 'react'
import styled from 'styled-components'
import { socialMedia, TeamListData } from '../../../logic/TeamList.logic'
import { StyledTable } from '../../Table'

const Img = styled.img`
  width: 30%;
  height: 30%;
`

const HpLink = styled.a`
  margin-right: 5px;
`

interface IProps {
  title: string
  columns: string[]
  rows: TeamListData[]
}

function createElByColumn(column: string, row: TeamListData): any {
  switch (column) {
    case 'nation':
    case 'avatar':
      return <Img src={row[column]} />
    case 'socialMedia':
      // eslint-disable-next-line no-case-declarations
      const linkList: JSX.Element[] = []
      row[column].map((val: socialMedia, index: number) => {
        linkList.push(
          <HpLink key={index} href={val.url} target='_blank'>
            {val.platform}
          </HpLink>,
        )
      })
      return linkList
    default:
      return row[column as keyof TeamListData]
  }
}

const TeamPlayersTable = ({ title, columns, rows }: IProps) => {
  return (
    <>
      <StyledTable>
        <caption>{title}</caption>
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.map((row, rIndex) => (
              <tr key={rIndex}>
                {columns.map((column, cIndex) => {
                  return <td key={cIndex}>{createElByColumn(column, row)}</td>
                })}
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </>
  )
}

export default TeamPlayersTable
