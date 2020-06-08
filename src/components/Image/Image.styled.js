import styled from "styled-components";

export const StyledEmptyImage = styled.div`
  ${({ isLoading }) =>
    isLoading &&
    ` &&&{
    height: 97%;
    width: 100%;
    background: linear-gradient(-45deg, #252525, #101010);
  	background-size: 100% 100%;
	  animation: gradient 2s ease infinite;
  } 

  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`}
`;

export const StyledImage = styled.img``;
