// @ts-ignore
import { createGlobalStyle } from 'styled-components';
import styled from "styled-components/macro";

export const OverViewContainer = styled.div`
  display: grid;
  grid-column: 1/3;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  margin: 30px;
`;