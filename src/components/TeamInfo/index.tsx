import React from 'react'
import styled from 'styled-components'
import { TeamInfoData } from '../../logic/TeamList.logic'

import TeamInfoTable from './TeamInfoTable'
import TeamPlayersTable from './TeamPlayersTable'

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TeamsInfoTableWapper = styled.div`
  margin-bottom: 20px;
`

const TeamsPlayerTableWapper = styled.div``

interface IProps {
  data: TeamInfoData
}

const TeamInfo = ({ data }: IProps) => {
  return (
    <Wapper>
      <TeamsInfoTableWapper>
        <TeamInfoTable
          columns={['name', 'DPC', 'icon', 'region', 'socialMedia']}
          rows={data.teamInfo}
        />
      </TeamsInfoTableWapper>
      <TeamsPlayerTableWapper>
        {data.teamInfo &&
          data.teamInfo.map((val, index) => (
            <TeamPlayersTable
              key={index}
              title={val.name}
              columns={['name', 'age', 'nation', 'avatar', 'socialMedia']}
              rows={data.players[index]}
            />
          ))}
      </TeamsPlayerTableWapper>
    </Wapper>
  )
}

export default TeamInfo
