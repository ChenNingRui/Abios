import React from 'react'
import './App.css'

import Serie from './types/Serie.type'
import Player from './types/Player.type'
import Roster from './types/Roster.type'
import Team from './types/Team.type'

import Players from './json/players.json'
import Rosters from './json/rosters.json'
import Series from './json/series.json'
import Teams from './json/teams.json'
import MainPage from './MainPage'

const convertJsonToSeries = (json: any) => {
  const res: Serie[] = json
  return res
}
const converJsonToPlayers = (json: any) => {
  const res: Player[] = json
  return res
}

const converJsonToRosters = (json: any) => {
  const res: Roster[] = json
  return res
}

const converJsonToTeams = (json: any) => {
  const res: Team[] = json
  return res
}

function App() {
  const [series] = React.useState(convertJsonToSeries(Series))
  const [players] = React.useState(converJsonToPlayers(Players))
  const [rosters] = React.useState(converJsonToRosters(Rosters))
  const [teams] = React.useState(converJsonToTeams(Teams))

  return (
    <div className='App'>
      <MainPage series={series} players={players} rosters={rosters} teams={teams}></MainPage>
    </div>
  )
}

export default App
