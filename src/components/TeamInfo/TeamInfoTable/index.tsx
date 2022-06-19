import React from 'react'
import styled from 'styled-components'
import { socialMedia, TeamInfo } from '../../../logic/TeamList.logic'
import { StyledTable } from '../../Table'

const Img = styled.img`
  width: 20%;
  height: 20%;
`

const HpLink = styled.a`
  margin-right: 5px;
`

interface IProps {
  columns: string[]
  rows: TeamInfo[] | null
}

function createElByColumn(column: string, row: TeamInfo): any {
  switch (column) {
    case 'region':
    case 'icon':
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
      return row[column as keyof TeamInfo]
  }
}

const TeamInfoTable = ({ columns, rows }: IProps) => {
  return (
    <StyledTable>
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
  )
}

export default TeamInfoTable
