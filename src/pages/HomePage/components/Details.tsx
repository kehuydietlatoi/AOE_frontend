import React from "react";
import {CardItemProps} from "./CardItem";
import styled from "styled-components/macro";


const DetailsContainer = styled.div`
  grid-column: 1/3 ;
  grid-row: 1;
  background-color: whitesmoke;
`;

// @ts-ignore
export const Details : React.FC<CardItemProps> = ({card,active, onClick = () => undefined}) => {
  const {realName, playerName, asset} = card;
  return (
    <DetailsContainer>
      <h1>{realName}</h1>
      <h2>{playerName}</h2>
      <p>{asset}</p>
    </DetailsContainer>
  );
}