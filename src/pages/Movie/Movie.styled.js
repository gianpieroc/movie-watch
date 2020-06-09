import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Image from "../../components/Image";

export const CoverImg = styled.img`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  height: 600px;
  object-fit: cover;
`;

export const HeadlineSection = styled.div`
  position: relative;
  margin: 0;
`;

export const InfoSection = styled.div`
  ${({ theme }) => `
  background-color: ${theme.panelDescriptionBackgroundColor};
  color: ${theme.onPanelDescriptionBackgroundColor};
  padding: 0 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  border-top: none;
`}
`;

export const InfoLabel = styled.p`
  ${({ theme }) => `
  font-size: ${theme.h5.fontSize};
  font-weight: bold;
  margin-right: 20px;

  @media (max-width: ${theme.sizes.tablet}){
    font-size: ${theme.h2.fontSize};
  }
`}
`;

export const PunctuationLabel = styled.p`
  ${({ theme }) => `
  font-size: ${theme.h2.fontSize};
  font-weight: bold;
  text-align: center;
  margin: 0;

  @media (max-width: ${theme.sizes.tablet}){
    font-size: ${theme.h1.fontSize};
  }
`}
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 5px;
  flex-wrap: wrap;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActorContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

export const ActorInfoText = styled.h5`
  ${({ theme }) => `
  font-size: ${theme.h5.fontSize};
  margin: 5px 0;
  font-weight: 500;
  text-align: center;

  @media (max-width: ${theme.sizes.tablet}){
    font-size: 22px;
  }
`}
`;

export const ActorImage = styled(Image)`
  margin: 0 3px;
  border-radius: 3px;
  border-color: transparent;
  border-width: 3px;
  width: 80px;
  border-style: solid;
`;

export const GenreImage = styled(Image)`
  margin: 0 3px;
  border-radius: 3px;
  border-color: transparent;
  background-color: #aaa;
  border-radius: 50%;
  width: 40px;
  border-style: solid;
  align-self: center;
`;

export const InfoLabelsPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const MovieLink = styled(Link)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100px;
  margin: 0 auto;
  width: 300px;
  height: 60px;
`;

export const WatchTrailerButton = styled(Button)`
  ${({ theme }) => `
  font-size: ${theme.h3.fontSize};
  height: 100%;
  width: 100%;
  margin: 20px;
  @media (max-width: ${theme.sizes.tablet}){
    font-size: ${theme.h1.fontSize};
  }
`}
`;

export const PlotText = styled.h3`
  ${({ theme }) => `
  margin: 0;
  font-size: ${theme.h4.fontSize};
  font-weight: 400;
  @media (max-width: ${theme.sizes.tablet}){
    font-size: ${theme.h2.fontSize};
  }
`}
`;

export const ShareSection = styled.div`
  ${({ theme: { sizes: desktop } }) => `
  display: flex;
  flex-direction: column;
  flex: 0.2;
  @media (max-width:${desktop}) {
    display: none
  }
`}
`;

export const DescriptionSection = styled.div`
  ${({ theme }) => `
  padding: 5px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  flex: 0.8;
  margin: 0 20px 20px 0;
  border-right: 1px solid #c9c9c9;
  border-left: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  border-radius: 0 0 2px 2px;
  background-color: ${theme.panelBackgroundColor};
  color: ${theme.onPanelBackgroundColor};

`}
`;
