import React from "react";
import styled from "styled-components/macro";
import { Card } from "./CardItem";

const ControlsContainer = styled.div`
  grid-column: 3/3;
  grid-row: 1;
  background-color: whitesmoke;
`;
const ButtonsSet = styled.div`
  width: 80%;
  margin: auto;
`;

export const Controls: React.FC<{
  data: Card;
  sortAsc: () => void;
  sortDesc: () => void;
}> = ({ data, sortAsc, sortDesc }) => {
  // @ts-ignore
  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // mocked backend api
    await fetch(`/api/`, {
      body: JSON.stringify({
        data,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
  };

  return (
    <ControlsContainer>
      <form onSubmit={onSubmitForm}>
        <ButtonsSet>
          <h1>Over View</h1>
          <button
            css={`
              width: 45%;
              float: left;
            `}
            onClick={sortAsc}
          >
            sort asc
          </button>
          <button
            css={`
              width: 45%;
              float: right;
            `}
            onClick={sortDesc}
          >
            sort desc
          </button>
          <button
            css={`
              width: 100%;
              margin-top: 10px;
              margin-bottom: 10px ;
            `}
            type={"submit"}
          >
            {" "}
            submit
          </button>
        </ButtonsSet>
      </form>
    </ControlsContainer>
  );
};
