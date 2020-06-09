import styled from "styled-components";

export const ListContainer = styled.div``;

export const ListTitle = styled.h3`
  ${({ theme }) => `
  color: ${theme.onPrimaryColor};
  font-size: ${theme.h3.fontSize};
`}
`;

export const HorizontalListContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const ArrowsContainer = styled.div`
  height: 100%;
  position: relative;
`;

export const RightArrow = styled.div`
  background: linear-gradient(
    to left,
    rgba(23, 23, 23, 0.95) 0,
    transparent 100%
  );
  height: 100%;
  width: 60px;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 100;

  :before {
    color: white;
    content: ">";
    transform: scaleY(2.5);
    font-size: 26px;
  }
  :hover {
    background: linear-gradient(
      to left,
      rgba(10, 10, 10, 1) 0,
      transparent 100%
    );
    transition-duration: 0.4s;
  }
`;

export const LeftArrow = styled.div`
  background: linear-gradient(
    to right,
    rgba(23, 23, 23, 0.4) 0,
    transparent 100%
  );
  height: 100%;
  width: 60px;
  position: absolute;
  top: 0;
  display: flex;
  left: 0;
  align-items: center;
  z-index: 100;
  justify-content: center;
  align-items: center;

  :before {
    color: white;
    content: "<";
    transform: scaleY(2.5);
    font-size: 26px;
  }

  :hover {
    background: linear-gradient(
      to right,
      rgba(10, 10, 10, 1) 0,
      transparent 100%
    );
    transition-duration: 0.4s;
  }
`;
