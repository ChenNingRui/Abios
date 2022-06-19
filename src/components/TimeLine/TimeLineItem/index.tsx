import React from 'react'
import styled from 'styled-components'
import Serie from '../../../types/Serie.type'
import Team from '../../../types/Team.type'
import Card from '../Card'

const Item = styled.li<{ position: number }>`
  list-style-type: none;
  position: relative;
  width: 3px;
  margin: 0 auto;
  padding-bottom: 40px;
  background: black;
  height: ${({ position }) => position + 40}px;
`
const Img = styled.img`
  position: absolute;
  width: 60px;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
`

const LeftImg = styled(Img)`
  clip-path: polygon(0 0, 0% 100%, 100% 0);
`

const RightImg = styled(Img)`
  clip-path: polygon(100% 100%, 0% 100%, 100% 0);
`

interface IProps {
  serie: Serie
  teams: Team[] | null
  position: number
  id: number
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
  setSelectedTeams: React.Dispatch<React.SetStateAction<number[] | undefined>>
}

const errorUrl =
  'https://www.nicepng.com/png/full/128-1280990_reach-the-hyperstone-dota-2-logo-transparent.png'

const TimeLineItem = (props: IProps) => {
  function handleMouseEnter() {
    // console.log(props.position)
  }

  function handleClick() {
    props.setSelected(props.id)
    if (props.teams) props.setSelectedTeams([props.teams[0].id, props.teams[1].id])
  }

  return (
    <>
      <Item
        position={props.position}
        title={props.teams ? `${props.teams[0].name} VS ${props.teams[1].name}` : 'unknow'}
        onClick={handleClick}
      >
        <div onMouseEnter={handleMouseEnter}>
          <LeftImg src={props.teams ? props.teams[0].images[0].url : errorUrl} />
          <RightImg src={props.teams ? props.teams[1].images[0].url : errorUrl} />
        </div>
        <Card visibility={props.id === props.selected} serie={props.serie} teams={props.teams} />
      </Item>
    </>
  )
}

export default TimeLineItem
