import React, { useState } from 'react'
import {gql, useQuery} from "@apollo/client"
import { H2Default, P1LowEmphasis } from '../TextStyles';
import { Card, PersonCell, CharactersWrapper } from '../components/index.js';
import arrow from '../assets/images/Arrow.svg';
import InfoTable from './InfoTable.js';

const GET_CHARACTERS = gql`
{
  allPeople {
    people {
      id
      name
      species {
        name
      }
      homeworld {
        name
      }
    }
  }
}
`

function defaultHuman(specie){
  if (specie != null) {
    return specie.name
  }
  return "Human"
}

export default function Characters() {
  const {loading, error, data} = useQuery(GET_CHARACTERS)
  const [ id, setId] = useState("");
  if (loading) return 'Loading';
  if (error) return `Error! ${error.message}`
  return (
    <CharactersWrapper>
    <div>
      {data.allPeople.people.map(e=>{
        return <Card onClick={ () => setId(e.id) }>
          <PersonCell>
            <H2Default>{e.name}</H2Default>
            <P1LowEmphasis>{defaultHuman(e.species)} from {e.homeworld.name}</P1LowEmphasis>
          </PersonCell>
        <img src={arrow}/>
        </Card>
      })}
    </div>
    { id == "" ? null :
    <InfoTable id={id}></InfoTable>}
    </CharactersWrapper>
  )
}