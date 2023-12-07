import styled, { css } from "styled-components";
import Inner from "../Inner";
import UserTier from "./UserTier";
import { useState } from "react";
import ChampionData from "./ChampionData";
import MatchData from "./MatchData";

const Wrapper = styled.div`
  background-color: rgb(242, 242, 245);
  padding: 10px 0px;
  width: 100%;
  height: 1000px;
`;
const Data = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  gap: 10px;
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const TabMenu = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 50% 50%;
  display: flex;
  justify-content: flex-start;
`
const TabOption = styled.li`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 50%;
  color: rgba(0, 0, 0, 0.7);
  border-bottom: solid 3px rgba(0, 0, 0, 0.7);
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 20px;
  padding: 20px 0px;
  padding-left: 20px;
  border-radius: 4px;
  ${(props) =>
    props.primary &&
    css`
      color: #fd6505;
      border-color: #fd6505;
    `};
`
export default function DetailData() {
  const [showChampion, setChampion] = useState(false)
  const ChangeShow = (e) =>{
    if(e.target.innerText == "챔피언"){
      setChampion(true);
    }
    else{
      setChampion(false)
    }
}
  return (
    <Wrapper>
      <Inner>
        <Data>
          <LeftBox>
            <UserTier />
          </LeftBox>
          <RightBox>
            <TabMenu>
              {showChampion ? <TabOption onClick={ChangeShow}>메인</TabOption> : <TabOption onClick={ChangeShow} primary="true">메인</TabOption >}
              {showChampion ? <TabOption onClick={ChangeShow} primary="true">챔피언</TabOption> : <TabOption onClick={ChangeShow}>챔피언</TabOption>}
            </TabMenu>
            {showChampion ? <ChampionData/> : <MatchData/>}
          </RightBox>
        </Data>
      </Inner>
    </Wrapper>
  );
}
