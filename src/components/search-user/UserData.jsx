import styled from "styled-components";

const Inner = styled.div`
  display: flex;
  width: 1200px;
  height: 300px;
  padding-bottom: 30px;
  gap: 20px;
  align-content: flex-start;
  align-items: flex-end;
`;
const Icon = styled.img`
  border-radius: 10px;
  width: 150px;
  height: 150px;
`;
const Box = styled.div`
  display: flex;
  height: 150px;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Name = styled.h1`
  font-family: "KBO-Dia-Gothic_bold";
  font-weight: 700;
  font-size: 30px;
`;
const Level = styled.p`
  font-family: "KBO-Dia-Gothic_bold";
  font-weight: 500;
  font-size: 20px;
`;
const ReData = styled.button`
  cursor: pointer;
  font-family: "GothicA1-Light";
  font-size: 16px;
  border: none;
  background-color: #fd6505;
  color: white;
  border-radius: 10px;
  width: 90px;
  height: 45px;
  margin-top: 20px;
  font-weight: 600;
`;
export default function UserData() {
  return (
    <Inner>
      <Icon src="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/588.png"></Icon>
      <Box>
        <TextBox>
          <Name>란란루우#1105</Name>
          <Level>Lv.301</Level>
        </TextBox>
        <ReData>전적갱신</ReData>
      </Box>
    </Inner>
  );
}
