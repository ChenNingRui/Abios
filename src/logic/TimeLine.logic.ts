import Roster from '../types/Roster.type'
import Serie, { Participant } from '../types/Serie.type'
import Team from '../types/Team.type'

function getRosterById(id: number, rosters: Roster[]): Roster | undefined {
  return rosters.find((roster) => roster.id === id)
}

function getTeamById(id: number, teams: Team[]): Team | undefined {
  return teams.find((team) => team.id === id)
}

export function getTeamsBySerie(serie: Serie, rosters: Roster[], teams: Team[]): Team[] | null {
  if (!serie.participants[0] || !serie.participants[1]) return null

  const roster1 = getRosterById(serie.participants[0].roster.id, rosters)
  const roster2 = getRosterById(serie.participants[1].roster.id, rosters)

  if (roster1 && roster2) {
    const team1 = getTeamById(roster1.team.id, teams)
    const team2 = getTeamById(roster2.team.id, teams)

    if (team1 && team2) return [team1, team2]
    else return null
  }
  return null
}

export function formatStringToDate(val: string | null | undefined): string {
  if (!val) return 'unknow'
  const parse = Date.parse(val)
  const date = new Date(parse)
  return date.toLocaleString()
}

export function getParticipantsStr(teams: Team[] | null): string {
  if (!teams) return 'unknow'
  else {
    return teams[0].name + ' VS ' + teams[1].name
  }
}

export function getWinnerStr(participants: Participant[], teams: Team[] | null): string {
  if (!participants || participants.length === 0) return 'unknow'
  if (participants[0].winner && teams) return teams[0].name
  if (participants[1].winner && teams) return teams[1].name
  return 'no'
}

export function getMatchScore(participants: Participant[]): string {
  if (participants.length) return participants[0].score + ' : ' + participants[1].score
  return 'unknow'
}

export function getTeamMatchScorePercentage(participant: Participant): number {
  if (participant.score === 1) return 50
  if (participant.score === 2) return 100
  return 0
}
