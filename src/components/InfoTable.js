import React from "react";
import { gql, useQuery } from "@apollo/client";
import { SectionHeader, NoticeCell, LoadingCell, PersonCell, DataCell, Header, Card, Wrapper, InfoWrapper} from '../components/index.js';
import { H2Default, H2LowEmphasis } from "../TextStyles/index.js";
const GET_INFO = gql`
  query info($id:ID!){
    person(id: $id) {
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

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function InfoTable({id}) {
  const { loading, error, data } = useQuery(GET_INFO, {variables: {id}});
  if (loading) return "Loading";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <DataCell>
        <H2Default>General Information</H2Default>
        <InfoWrapper>
          <H2LowEmphasis> Eye Color </H2LowEmphasis> <H2Default>{capitalize(data.person.eyeColor)}</H2Default>
        </InfoWrapper>
        <InfoWrapper>
          <H2LowEmphasis> Hair Color </H2LowEmphasis>  <H2Default>{capitalize(data.person.hairColor)}</H2Default>
        </InfoWrapper>
        <InfoWrapper>
          <H2LowEmphasis> Skin Color </H2LowEmphasis>  <H2Default>{capitalize(data.person.skinColor)}</H2Default>
        </InfoWrapper>
        <InfoWrapper>
          <H2LowEmphasis> Birth Year </H2LowEmphasis>  <H2Default>{data.person.birthYear}</H2Default>
        </InfoWrapper>
         {data.person.vehicleConnection.vehicles[0] ?
        <H2Default>Vehicles</H2Default> : null}
        {data.person.vehicleConnection.vehicles.map((vehicle) => {
          return <InfoWrapper><H2LowEmphasis>{vehicle.name}</H2LowEmphasis></InfoWrapper>;
        })}
      </DataCell>
    </div>
  );
}
