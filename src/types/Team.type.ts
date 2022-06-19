import Image from './Image.type'
import Game from './Game.type'
import Country from './Country.type'

interface Region {
  id: number
  name: string
  abbreviation: string
  country: Country
}

interface Platform {
  id: number
  name: string
  slug: string
}

interface SocialMediaAccount {
  handle: string
  url: string
  platform: Platform
}

interface Roster {
  id: number
}

interface StandingRoster {
  id: number
  from: Date
  to?: any
  roster: Roster
  deleted_at?: any
}

interface Organisation {
  id: number
}

export default interface Team {
  id: number
  name: string
  abbreviation: string
  dpc_points: number
  also_known_as: any[]
  deleted_at?: any
  active: boolean
  images: Image[]
  region: Region
  social_media_accounts: SocialMediaAccount[]
  standing_roster: StandingRoster
  game: Game
  organisation: Organisation
}
