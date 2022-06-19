import React from 'react'
import styled from 'styled-components'

import Serie from '../types/Serie.type'
import Player from '../types/Player.type'
import Roster from '../types/Roster.type'
import Team from '../types/Team.type'

import TimeLine from '../components/TimeLine'
import RankList from '../components/RankTable'
import TeamInfo from '../components/TeamInfo'

import { createTeamTableRows, sortTeamsByDPC } from '../logic/RankList.logic'
import {
  createTeamInfo,
  createTeamListData,
  findTeamsById,
  getPlayersByTeamId,
} from '../logic/TeamList.logic'

const MainWapper = styled.div`
  display: flex;
  flex-direction: row;
`

const TimeLineWapper = styled.div`
  height: 100vh;
  width: 120vh;
  border: 1px solid #ccc;
  overflow: auto;
`

const RankTableWapper = styled.div`
  height: 100vh;
  width: 50vh;
  border: 1px solid #ccc;
  overflow: auto;
`

const TeamsTablesWapper = styled.div`
  height: 100vh;
  width: 100%;
  border: 1px solid #ccc;
  overflow: auto;
`

interface IProps {
  series: Serie[]
  players: Player[]
  rosters: Roster[]
  teams: Team[]
}

const MainPage = (props: IProps) => {
  const [selectedTeams, setSelectedTeams] = React.useState<number[]>()

  const res: Team[] = sortTeamsByDPC(props.teams)
  const rows = createTeamTableRows(res)

  const playersList = getPlayersByTeamId(selectedTeams, props.players, props.rosters)
  const targetTeams = findTeamsById(selectedTeams, props.teams)
  const teamInfo = createTeamInfo(targetTeams)
  const data = createTeamListData(playersList)

  return (
    <MainWapper>
      <TimeLineWapper>
        <TimeLine
          series={props.series}
          rosters={props.rosters}
          teams={props.teams}
          setSelectedTeams={setSelectedTeams}
        ></TimeLine>
      </TimeLineWapper>
      <RankTableWapper>
        <RankList
          columns={['Rank', 'DPC', 'Team']}
          rows={rows}
          setSelectedTeams={setSelectedTeams}
        />
      </RankTableWapper>
      <TeamsTablesWapper>
        {data && <TeamInfo data={{ teamInfo: teamInfo, players: data }} />}
      </TeamsTablesWapper>
    </MainWapper>
  )
}

export default MainPage
