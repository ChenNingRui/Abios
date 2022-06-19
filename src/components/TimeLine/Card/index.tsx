import React from 'react'
import styled from 'styled-components'
import Serie from '../../../types/Serie.type'
import Team from '../../../types/Team.type'
import {
  formatStringToDate,
  getMatchScore,
  getParticipantsStr,
  getTeamMatchScorePercentage,
  getWinnerStr,
} from '../../../logic/TimeLine.logic'

const CardWrapper = styled.div<{ visibility: number }>`
  position: relative;
  width: 45vh;
  padding: 10px;
  left: 50px;
  top: -150px;
  color: #f5f5f5;
  background: #888484;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  visibility: ${({ visibility }) => (visibility ? 'visible' : 'hidden')};
  &:before {
    content: '';
    position: absolute;
    bottom: 100px;
    width: 0;
    height: 0;
    border-style: solid;
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent #8a797b transparent transparent;
  }
`

const CardHeader = styled.header`
  padding-top: 5px;
  padding-bottom: 5px;
`

const CardHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`

const CardBody = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`

const CardFieldset = styled.div`
  text-align: start;
  padding: 0;
  margin: 0;
  border: 0;
`

const MatchBar = styled.div<{ team1: number; team2: number }>`
  height: 30px;
  width: 200px;
  border: 2px solid #000;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background-image: linear-gradient(red, red), linear-gradient(blue, blue);
  background-size: ${({ team1 }) => team1}% 100%, ${({ team1, team2 }) => team2 + team1}% 100%;
  background-repeat: no-repeat;
`

interface IProps {
  visibility: boolean
  serie: Serie
  teams: Team[] | null
}
const MainCard = (props: IProps) => {
  return (
    <CardWrapper visibility={+props.visibility}>
      <CardHeader>
        <CardHeading>{props.serie.tournament.name}</CardHeading>
      </CardHeader>
      <CardBody>
        <CardFieldset>{`Title: ${props.serie.title}`}</CardFieldset>
        <CardFieldset>{`Start: ${formatStringToDate(props.serie.start)}`}</CardFieldset>
        <CardFieldset>{`End: ${formatStringToDate(props.serie.end)}`}</CardFieldset>
        <CardFieldset>{`Status: ${props.serie.lifecycle}`}</CardFieldset>
        <CardFieldset>{`Participants: ${getParticipantsStr(props.teams)}`}</CardFieldset>
        {props.serie.participants.length > 0 && (
          <CardFieldset>
            Match:
            <MatchBar
              team1={getTeamMatchScorePercentage(props.serie.participants[0])}
              team2={getTeamMatchScorePercentage(props.serie.participants[1])}
            >{`${getMatchScore(props.serie.participants)}`}</MatchBar>
          </CardFieldset>
        )}
        <CardFieldset>{`Winner: ${getWinnerStr(
          props.serie.participants,
          props.teams,
        )}`}</CardFieldset>
      </CardBody>
    </CardWrapper>
  )
}

export default MainCard
