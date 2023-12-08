import styled from "styled-components";
import PartyList from "../components/find-party/PartyList";
import Inner from "../components/Inner"
import { useState } from "react";
import Popup from "../components/Popup";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 1000px;
`;
const TitleBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 50px;
`;
const SubTitle = styled.h2`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  font-size: 20px;
`;
const FindPartyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: rgb(230, 230, 232);
  background-color: rgb(242, 242, 245);
  border-radius: 20px;
  padding: 10px;
  width: 100%;
  height: 1620px;
`;
const AddPartyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 18px;
  font-weight: 600;
  border: none;
  background-color: #FD6505;
  height: 100px;
  margin: 10px;
  width: 120px;
  border-radius: 10px;
  color: white;
`
export default function FindParty() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <Inner>
      <Wrapper>
        <TitleBox>
          <Title>파티 찾기</Title>
          <SubTitle>
            같이 게임을 할 파티원을 찾아보세요!
          </SubTitle>
        </TitleBox>
          <AddPartyButton onClick={openPopup}>
            <svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 512 512" fill="white"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
            글쓰기
            {isPopupOpen && <Popup onClose={closePopup} />}
          </AddPartyButton>
        <FindPartyBox>
            <PartyList/>
        </FindPartyBox>
      </Wrapper>
    </Inner>
  );
}
