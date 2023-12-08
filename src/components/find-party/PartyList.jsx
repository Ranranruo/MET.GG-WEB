import styled, { css } from "styled-components";
const LineToUrl = {
  top: "https://i.namu.wiki/i/YEQPiSUhL9YQ__n0y_qV-HzzHtkjl8w00oRH2GHYocCXiQwWbwZJ_okanDrpPfdqjzC57ii4mG6YLNToJKqwrQ.svg",
  mid: "https://i.namu.wiki/i/0j6dXKYb20BTY_JLiGR3r_9CyepjIfLoX2aVD8CacDj3SXGaJfHzp4CbYDG5LaySVqPbmcbWl3mktxa2BCxDlQ.svg",
  jgl: "https://i.namu.wiki/i/GqmJId5DS53GW4VL9sjJ50fJyErjqKz-4bm_bPcRbLZI8gpFxGNOQXEfWwQEkpOAzVfjvLcZvYoNMb-RCcysKg.svg",
  bot: "https://i.namu.wiki/i/Ayt71NLr2Go9I2UXJXqnAlq-82p6GsBXY8LTBM5BjCcTSfs0byTq9Dv8-L78vZd9ugm8vuw-VQEFH-IrBCbbHg.webp",
  spt: "https://i.namu.wiki/i/z7U3qz8Sn1FJO2int84OGGp0Mk6dTtSArfWoZWViHssaC3M-FLI2tRf-8TjcqA4jRBMpMP7qI3J2WJedSGY_3A.svg",
};
const Wrapper = styled.div`
  width: 100%;
`;
const Party = styled.div`
  padding: 10px 20px;
  background-color: white;
  border-radius: 5px;
  display: grid;
  gap: 20px;
  grid-template-columns: 200px 140px 300px 200px 1fr;
  width: 100%;
  height: 100px;
  & > * {
  }
`;
const UserProfile = styled.div`
  gap: 10px;
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
`;
const NameBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const Name = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
`;
const Tag = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
`;
const UserIcon = styled.img`
  height: 60px;
  border-radius: 100%;
  color: rgba(0, 0, 0, 0.7);
`;
const UserTier = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 100%;
  background-color: rgb(242, 242, 245);
  background-image: url(${(props) => props.url});
  background-size: 100%;
  &::before {
    content: "Iron IV";
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 15px;
    position: absolute;
    bottom: -15px;
  }
`;
const UserLine = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  background-image: url(${(props) => LineToUrl[props.Line]});
  background-size: 100%;
  background-repeat: no-repeat;
  color: rgba(0, 0, 0, 0.7);
  &::before {
    content: "MID";
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 15px;
    position: absolute;
    bottom: -15px;
  }
`;
const TierAndLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
const WinRate = styled.div`
  height: 80%;
  margin: auto 0;
  margin-left: 80px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
const WinRateBarBox = styled.div`
  display: grid;
  grid-template-columns: 50fr 50fr;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 90%;
`;
const WinRateText = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.7);
`;
const WinRateBar = styled.p`
  display: flex;
  color: rgba(0, 0, 0, 0.7);

  font-family: "Noto Sans KR", sans-serif;
  background-color: rgba(93, 156, 235, 1);
  padding: 0px 5px;
  align-items: center;
  color: white;
  ${(props) =>
    props.primary &&
    css`
      justify-content: flex-end;
      background-color: rgba(232, 64, 87, 1);
    `};
`;
const DetailText = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  resize: none;
  padding: 10px;
`
const KDA = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 25px;
  font-weight: 200;
`
const Red = styled.p`
  color: rgba(255, 0, 0, 0.8);
`
export default function PartyList() {
  return (
    <Wrapper>
      <Party>
        <UserProfile>
          <UserIcon src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/588.png"></UserIcon>
          <NameBox>
            <Name>란란루우란란루우란란루우란란루우</Name>
            <Tag>#1105</Tag>
          </NameBox>
        </UserProfile>
        <TierAndLine>
          <UserTier url="/img/ranked_emblems/Iron.png"></UserTier>
          <UserLine Line="mid" />
        </TierAndLine>
        <WinRate>
          <WinRateBarBox>
            <WinRateBar>5승</WinRateBar>
            <WinRateBar primary="true">5패</WinRateBar>
          </WinRateBarBox>
          <WinRateText>
            50%
          </WinRateText>
        </WinRate>
        <DetailText>
          안녕하셍ㅅ
        </DetailText>
        <KDA>3/<Red>13</Red>/3</KDA>
      </Party>
    </Wrapper>
  );
}
