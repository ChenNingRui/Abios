import React from 'react'
import styled from 'styled-components'
import { RankTableRow } from '../../logic/RankList.logic'
import { StyledTable } from '../Table/index'

const Img = styled.img`
  width: 30%;
  height: 30%;
`

interface IProps {
  title?: string
  columns: string[]
  rows: RankTableRow[]
  setSelectedTeams: React.Dispatch<React.SetStateAction<number[] | undefined>>
}

const isQualified = 4
const isSecured = 500
function RankTable({ title, columns, rows, setSelectedTeams }: IProps) {
  const handleClick = (val: number) => {
    setSelectedTeams([val])
  }

  return (
    <StyledTable>
      {title && <caption>{title}</caption>}
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
        {rows.map((row: RankTableRow, rIndex) => (
          <tr key={rIndex}>
            {columns.map((column, cIndex) => {
              return (
                <td key={cIndex} onClick={() => handleClick(row['ID'])}>
                  {column === 'Team' ? (
                    <Img src={row[column]} />
                  ) : (
                    row[column as keyof RankTableRow]
                  )}
                  {column === 'Team' && rIndex < isQualified && <div>Qualified</div>}
                  {column === 'Team' && row['DPC' as keyof RankTableRow] >= isSecured && (
                    <div>Secured</div>
                  )}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default RankTable
