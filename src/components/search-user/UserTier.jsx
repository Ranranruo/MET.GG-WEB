import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  background-color: white;
  border-radius: 10px;
  grid-template-columns: 1fr 1fr;
  padding: 20px 0px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;
const Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 140px;
  height: 140px;
  background-color: #fd6505;
`;
const TierBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 130px;
  height: 130px;
  background-color: white;
`;
const Img = styled.img`
  width: 75%;
  height: 75%;
`;
const RankedText = styled.p`
  font-family: "KBO-Dia-Gothic_bold";
  font-weight: 600;
  font-size: 20px;
`;
const RankedTier = styled.p`
  font-family: "KBO-Dia-Gothic_bold";
  font-weight: 300;
`;
const RankedWin = styled.p`
  font-family: "GothicA1-Light";
  font-weight: 600;
  font-size: 14px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const RankedLP = styled.p`
  font-family: "GothicA1-Light";
  font-family: "KBO-Dia-Gothic_bold";
  font-weight: 600;
  font-size: 15px;
`

export default function UserTier() {
  return (
    <Wrapper>
      <Box>
        <RankedText>솔로랭크</RankedText>
        <Chart>
          <TierBox>
            <Img src="/img/ranked_emblems/Iron.png" />
          </TierBox>
        </Chart>
        <TextBox>
          <RankedTier>아이언 IV</RankedTier>
          <RankedWin>123전 61승 62패(49%)</RankedWin>
          <RankedLP>16 LP</RankedLP>
        </TextBox>
      </Box>
      <Box>
        <RankedText>자유랭크</RankedText>
        <Chart>
          <TierBox>
            <Img src="/img/ranked_emblems/Grandmaster.png" />
          </TierBox>
        </Chart>
        <TextBox>
          <RankedTier>그랜드마스터</RankedTier>
          <RankedWin>16전 8승 8패(50%)</RankedWin>
          <RankedLP>37 LP</RankedLP>
        </TextBox>
      </Box>
    </Wrapper>
  );
}
