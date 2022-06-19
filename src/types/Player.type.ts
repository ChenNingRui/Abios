import Image from './Image.type'
import Game from './Game.type'
import Country from './Country.type'
import SocialMediaAccount from './SocialMediaAccount.type'

interface Age {
  precision: string
  years: number
}

interface Region {
  id: number
  name: string
  abbreviation: string
  country: Country
}

interface Role {
  id: number
}

interface Team {
  id: number
}

export default interface Player {
  id: number
  first_name: string
  last_name: string
  nick_name: string
  also_known_as: string[]
  age: Age
  deleted_at?: any
  active: boolean
  images: Array<Image>
  region: Region
  game: Game
  race?: any
  role: Role
  teams: Team[]
  social_media_accounts: SocialMediaAccount[]
}
