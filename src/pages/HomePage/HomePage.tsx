import { useEffect, useState } from "react";
import { Card, CardItem } from "./components/CardItem";
import { Details } from "./components/Details";
import { Controls } from "./components/Controls";
import { OverViewContainer } from "./style/OverViewStyle";
import { MainContainer } from "./style/MainStyle";

// we can do like this cause we have local json data : import {data} from "../../data/data";
export const HomePage = () => {
  const [playerData, setPlayerData] = useState<Card[]>([]);
  const [detailsPLayer, setDetailsPlayer] = useState<any>([]);
  // force rerendering component because playerdata changed only sequence
  const [forceChange, setForceChange] = useState<boolean>(true);
  const fetchData = async () => {
    const dataRequest = await fetch("http://localhost:3000/data.json");
    if (dataRequest.status === 200) {
      const dataJson = await dataRequest.json();
      setPlayerData(dataJson);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const sort = async (isAsc: boolean) => {
    let sortedPlayerData = playerData;
    let prefixAsc: number = isAsc ? 1 : -1;
    sortedPlayerData = sortedPlayerData.sort((n1, n2) => {
      if (n1.realName > n2.realName) return prefixAsc;
      else if (n1.realName === n2.realName) return 0;
      return -prefixAsc;
    });
    setPlayerData(sortedPlayerData);
    setForceChange(!forceChange);
  };

  return (
    <>
      <MainContainer>
        {!detailsPLayer ? (
          <Details
            css={`
              visibility: hidden;
            `}
            card={detailsPLayer}
            active
          />
        ) : (
          <Details
            active
            css={`
              visibility: visible;
            `}
            card={detailsPLayer}
          />
        )}
        <Controls
          data={detailsPLayer}
          sortAsc={() => sort(true)}
          sortDesc={() => sort(false)}
        />
        <OverViewContainer>
          {playerData.map((i: Card) => {
            return (
              <CardItem
                key={i.realName}
                card={i}
                active={i === detailsPLayer}
                onClick={() => {
                  setDetailsPlayer(i);
                }}
              />
            );
          })}
        </OverViewContainer>
      </MainContainer>
    </>
  );
};
