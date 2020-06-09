import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../Image";

export const CardContainer = styled.div`
  ${({ theme }) => `
  width: 150px;
  margin: 0 5px;

  @media (max-width: ${theme.sizes.tablet}){
    width 350px;
  }:
`}
`;

export const StyledLink = styled(Link)`
  height: 100%;
`;

export const CardImage = styled(Image)`
  ${({ theme }) => `
  width: 100%;
  margin: 0 3px;
  border-radius: 3px;
  border-color: transparent;
  border-width: 3px;
  border-style: solid;
  :hover {
    border-color: ${theme.secondaryColor};
    border-width: 3px;
  }
`}
`;
