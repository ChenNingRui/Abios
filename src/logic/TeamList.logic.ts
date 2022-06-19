import Player from '../types/Player.type'
import Roster from '../types/Roster.type'
import SocialMediaAccount from '../types/SocialMediaAccount.type'
import Team from '../types/Team.type'

function getRosterByTeamId(teamID: number, rosters: Roster[]): Roster | undefined {
  return rosters.find((roster) => roster.team.id === teamID)
}

function getPlayersById(roster: Roster, players: Player[]): Player[] {
  const res: Player[] = []
  roster.line_up.players.map((val) => {
    const player = players.find((player) => player.id === val.id)
    if (player) res.push(player)
  })
  return res
}

export function getPlayersByTeamId(
  teamID: number[] | undefined,
  players: Player[],
  rosters: Roster[],
) {
  if (!teamID) return null
  const res: Player[][] = []
  teamID.map((val) => {
    const roster = getRosterByTeamId(val, rosters)
    if (!roster) return null
    res.push(getPlayersById(roster, players))
  })
  return res
}

export interface socialMedia {
  platform: string
  url: string
}

export interface TeamListData {
  name: string
  age: string
  avatar: string | undefined
  nation: string
  socialMedia: socialMedia[]
}

export function createTeamListData(playersList: Player[][] | null): TeamListData[][] | null {
  if (!playersList) return null

  const res: TeamListData[][] = []
  playersList.map((players) => {
    const temp: TeamListData[] = []
    players.map((player) => {
      const socialMedia: socialMedia[] = []
      player.social_media_accounts.map((val: SocialMediaAccount) => {
        socialMedia.push({ platform: val.platform.name, url: val.url })
      })
      temp.push({
        name: `${player.first_name} ${player.last_name}`,
        age: player.age ? player.age.years.toString() : 'unknow',
        avatar: player.images.length > 0 ? player.images[0].url : undefined,
        nation: player.region.country.images[0].url,
        socialMedia: socialMedia,
      })
    })
    res.push(temp)
  })
  return res
}

export interface TeamInfo {
  name: string
  DPC: number
  icon: string
  region: string
  socialMedia: socialMedia[]
}

export interface TeamInfoData {
  teamInfo: TeamInfo[] | null
  players: Array<TeamListData[]>
}

export function findTeamsById(teamsID: number[] | undefined, teams: Team[]) {
  if (!teamsID) return null
  const res: Team[] = []
  teamsID.map((id) => {
    const item = teams.find((team) => team.id === id)
    if (item) res.push(item)
  })
  return res
}

export function createTeamInfo(teams: Team[] | null): TeamInfo[] | null {
  if (!teams) return null
  const res: TeamInfo[] | null = []
  teams.map((team) => {
    const socialMedia: socialMedia[] = []
    team.social_media_accounts.map((val: SocialMediaAccount) => {
      socialMedia.push({ platform: val.platform.name, url: val.url })
    })
    res.push({
      name: team.name,
      DPC: team.dpc_points,
      icon: team.images[0].url,
      region: team.region.country.images[0].url,
      socialMedia: socialMedia,
    })
  })
  return res
}
