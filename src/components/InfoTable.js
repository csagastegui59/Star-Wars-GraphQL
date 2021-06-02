import React from "react";
import { gql, useQuery } from "@apollo/client";
import { SectionHeader, NoticeCell, LoadingCell, PersonCell, DataCell, Header, Card, Wrapper, InfoWrapper} from '../components/index.js';
import { H2Default, H2LowEmphasis } from "../TextStyles/index.js";
const GET_INFO = gql`
  {
    person(id: "cGVvcGxlOjE=") {
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicleConnection {
        vehicles {
          name
        }
      }
    }
  }
`;

export default function InfoTable() {
  const { loading, error, data } = useQuery(GET_INFO);
  if (loading) return "Loading";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <DataCell>
        <H2Default>General Information</H2Default>
        <InfoWrapper>
          <H2LowEmphasis> Eye Color </H2LowEmphasis> <H2Default>{data.person.eyeColor}</H2Default>
        </InfoWrapper>
        <InfoWrapper>
          <H2LowEmphasis> Hair Color </H2LowEmphasis>  <H2Default>{data.person.hairColor}</H2Default>
        </InfoWrapper>
        <InfoWrapper>
          <H2LowEmphasis> Skin Color </H2LowEmphasis>  <H2Default>{data.person.skinColor}</H2Default>
        </InfoWrapper>
        <InfoWrapper>
          <H2LowEmphasis> Birth Year </H2LowEmphasis>  <H2Default>{data.person.birthYear}</H2Default>
        </InfoWrapper>
        <H2Default>Vehicles</H2Default>
        {data.person.vehicleConnection.vehicles.map((vehicle) => {
          return <InfoWrapper><H2LowEmphasis>{vehicle.name}</H2LowEmphasis></InfoWrapper>;
        })}
      </DataCell>
    </div>
  );
}
