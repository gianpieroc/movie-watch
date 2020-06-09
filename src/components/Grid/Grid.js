import styled from "styled-components";

const Grid = styled.div`
  ${({
    theme: {
      sizes: { desktop, tablet, largeDesktop }
    }
  }) => `
  @media (min-width:${tablet})  {
    padding: 0 10px;
    margin: 0 auto;
  }
  @media (min-width:${desktop}) {
    max-width: ${largeDesktop};
    padding: 0 10px;
    margin: 0 auto;
  }
`}
`;

export default Grid;
