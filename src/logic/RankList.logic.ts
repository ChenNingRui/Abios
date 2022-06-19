import Team from '../types/Team.type'

export function sortTeamsByDPC(teams: Team[]) {
  return teams.sort((pre: Team, next: Team) => next.dpc_points - pre.dpc_points)
}

export interface RankTableRow {
  ID: number
  Rank: number
  Team: string
}

export function createTeamTableRows(teams: Team[]): RankTableRow[] {
  const res: RankTableRow[] = []

  teams.map((team: Team, index: number) => {
    const temp = { ID: team.id, Rank: index + 1, Team: team.images[0].url, DPC: team.dpc_points }
    res.push(temp)
  })

  return res
}
