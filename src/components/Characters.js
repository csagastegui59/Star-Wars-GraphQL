import React from 'react'
import {gql, useQuery} from "@apollo/client"
import { H2Default, P1LowEmphasis } from '../TextStyles';
import { Card, PersonCell } from '../components/index.js';
import arrow from '../assets/images/Arrow.svg';

const GET_CHARACTERS = gql`
{
  allPeople {
    people {
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
  if (loading) return 'Loading';
  if (error) return `Error! ${error.message}`
  return (
    <div>
      {data.allPeople.people.map(e=>{
        return <Card>
          <PersonCell>
            <H2Default>{e.name}</H2Default>
            <P1LowEmphasis>{defaultHuman(e.species)} from {e.homeworld.name}</P1LowEmphasis>
          </PersonCell>
        <img src={arrow}/>
        </Card>
      })}
    </div>
  )
}