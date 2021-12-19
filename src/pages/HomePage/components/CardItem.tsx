import React from "react";
import styled from 'styled-components/macro';

/**
 * Object model for Card
 */
export type Card = {
  realName: string,
  playerName: string,
  asset: string,
}

export type CardItemProps = {
  card: Card,
  onClick?: (card: Card) => void,
  active: boolean,
}

const CardFlex = styled.div`
  display: block;
  align-items: center;
`;
const CardHighLight = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: none;
  width: 4px;
  background-color: ${(props) => props.theme.colors.primary};
`;
const CardPlayerName = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 10px;
  color: orange;
`;
const CardRealName = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 10px;
  color: saddlebrown;
`;
const CardAsset = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 10px;
  color: darkred;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CardItemStyle = styled.div.attrs((props: {isSelected: boolean}) => props)`
  width: 75%;
  min-height: 3rem;
  position: relative;
  padding: 0.7rem 2rem;

  &:hover {
    ${CardHighLight} {
      display: block;
    }
  }
  background: ${props => (props.isSelected ? `green` : `whitesmoke`)};
  border-radius: 20px;
  margin: 30px 0 0;
  cursor: pointer;
`;

export const CardItem: React.FC<CardItemProps> = ({card,active, onClick = () => undefined}) => {
  const {realName, playerName, asset} = card;
  return (
    <div onClick={() => onClick(card)}>
      <CardItemStyle isSelected={active}>
        <CardHighLight/>
        <CardFlex>
          <CardRealName>{realName}</CardRealName>
          <CardPlayerName>{playerName}</CardPlayerName>
          <CardAsset>{asset}</CardAsset>
        </CardFlex>
      </CardItemStyle>
    </div>
  );
}