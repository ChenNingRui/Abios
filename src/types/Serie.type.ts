import Game from './Game.type'
import Data from './Data.type'

interface BracketPosition {
  part: string
  col: number
  offset: number
}

interface Roster {
  id: number
}

export interface Participant {
  seed: number
  score: number
  forfeit: boolean
  roster: Roster
  winner: boolean
  stats?: any
}

interface Tournament {
  name: string
  id: number
}

interface Substage {
  id: number
}

interface Match {
  id: number
}

interface Caster {
  primary: boolean
  caster: Caster
}

interface Coverage {
  data: Data
}

interface Format {
  best_of: number
}

export default interface Serie {
  id: number
  title: string
  start: string
  end?: string | null
  postponed_from?: any
  deleted_at?: Date
  lifecycle: string
  tier: number
  best_of: number
  chain: any[]
  streamed: boolean
  bracket_position: BracketPosition
  participants: Array<Participant>
  tournament: Tournament
  substage: Substage
  game: Game
  matches: Array<Match>
  casters: Array<Caster>
  has_incident_report: boolean
  coverage: Coverage
  format: Format
}
