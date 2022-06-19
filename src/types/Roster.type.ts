import Game from './Game.type'

interface Team {
  id: number
}

interface Player {
  id: number
}

interface LineUp {
  id: number
  players: Player[]
}

export default interface Roster {
  id: number
  team: Team
  line_up: LineUp
  game: Game
}
