import React from 'react'
import styled from 'styled-components'
import Roster from '../../types/Roster.type'
import Serie from '../../types/Serie.type'
import Team from '../../types/Team.type'
import { getTeamsBySerie } from '../../logic/TimeLine.logic'
import TimeLineItem from './TimeLineItem'

const Wrapper = styled.section`
  white-space: nowrap;
  overflow-x: hidden;
  margin: auto;
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  padding-right: 600px;
`

const List = styled.ul`
  width: 10vw;
  padding: 140px 0;
  transition: all 1s;
`

interface IProps {
  series: Serie[]
  teams: Team[]
  rosters: Roster[]
  setSelectedTeams: React.Dispatch<React.SetStateAction<number[] | undefined>>
}

// const scrollDistance = 15

const TimeLine = (props: IProps) => {
  const [selected, setSelected] = React.useState(-1)
  // const [preScrollY, setPreScrollY] = React.useState(0)
  // const timerRef1: any = React.useRef(null)
  // const timerRef2: any = React.useRef(null)

  // React.useEffect(() => {
  //   setPreScrollY(window.scrollY)
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //     clearTimeout(timerRef1)
  //     clearTimeout(timerRef2)
  //   }
  // }, [handleScroll])

  // function handleScroll() {
  //   console.log('okay')
  //   const distance = Math.abs(window.scrollY - preScrollY)
  //   if (window.scrollY > preScrollY && distance >= scrollDistance) {
  //     timerRef1.current = setTimeout(() => {
  //       setSelected(Math.min(selected + 1, props.series.length - 1))
  //       setPreScrollY(window.scrollY)
  //     }, 100)
  //   } else if (window.scrollY < preScrollY && distance >= scrollDistance) {
  //     timerRef2.current = setTimeout(() => {
  //       setSelected(Math.max(selected - 1, 0))
  //       setPreScrollY(window.scrollY)
  //     }, 100)
  //   }
  // }

  return (
    <Wrapper>
      <List>
        {props.series.map((serie: Serie, index: number) => {
          const teams: Team[] | null = getTeamsBySerie(serie, props.rosters, props.teams)
          return (
            <TimeLineItem
              key={serie.id}
              id={index}
              selected={selected}
              setSelected={setSelected}
              serie={serie}
              teams={teams}
              position={0}
              setSelectedTeams={props.setSelectedTeams}
            />
          )
        })}
      </List>
    </Wrapper>
  )
}

export default TimeLine
