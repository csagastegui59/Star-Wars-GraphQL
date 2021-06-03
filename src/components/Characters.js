import React, { useState } from 'react'
import {gql, useQuery} from "@apollo/client"
import { H2Default, P1LowEmphasis, H2LowEmphasis, H2HighEmphasis } from '../TextStyles';
import { Sticky, Icon, Card, PersonCell, CharactersWrapper, LoadingCell, NoticeCell, LoadingWrapper } from '../components/index.js';
import arrow from '../assets/images/Arrow.svg';
import InfoTable from './InfoTable.js';
import Spinner from '../assets/images/spinner.svg';

const GET_CHARACTERS = gql`
query charQuery($after: String) {
    allPeople(first: 5, after: $after) {
      totalCount
      edges {
        node {
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
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

function defaultHuman(specie){
  return specie == null ? "Human" : specie.name;
}

function loadData(data, fetchMore) {
  setTimeout(() => {
    const { endCursor } = data.allPeople.pageInfo;
    fetchMore({
      variables: { after: endCursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.allPeople.edges = [
          ...prevResult.allPeople.edges,
          ...fetchMoreResult.allPeople.edges,
        ];
        return fetchMoreResult;
      },
    });
  }, 1000);
}

export default function Characters() {
  const {loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { after: null },
  });
  const [ id, setId] = useState("");
  if (loading)  return (
    <LoadingWrapper>
      <LoadingCell>
        <Icon>
          <img src={Spinner} alt="loadingIcon"/>
        </Icon>
        <H2LowEmphasis>Loading</H2LowEmphasis>
      </LoadingCell>
    </LoadingWrapper>
  );

  if (error) return (
    <NoticeCell>
      <H2HighEmphasis>
        Failed to load data
      </H2HighEmphasis>
    </NoticeCell>
    );

  return (
    <CharactersWrapper>
      <Sticky>
        {data.allPeople.edges.map(({ node })=>{
          return (<Card onClick={() => setId(node.id)}>
            <PersonCell>
              <H2Default>{node.name}</H2Default>
              <P1LowEmphasis>
                {defaultHuman(node.species)} from {node.homeworld.name}
              </P1LowEmphasis>
            </PersonCell>
            {console.log(node.id)}
          <img src={arrow} alt="arrow"/>
          </Card>
        );
        })}
      </Sticky>
      {data.allPeople.pageInfo.hasNextPage ? loadData(data,fetchMore) : null}
      {id !== "" ? <InfoTable id={id} /> : null}
    </CharactersWrapper>
  )
}