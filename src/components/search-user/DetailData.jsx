import styled from "styled-components";
import Inner from "../Inner";
import UserTier from "./UserTier";

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
  flex-direction: column;
`;
const TabData = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  border-radius: 10px;
`;
const TabMenu = styled.div`
  display: flex;
  justify-content: flex-start;
`
const TabOption = styled.li`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 20px;
  padding: 20px 0px;
  padding-left: 20px;
`
const Line = styled.div`
  width: 90%;
  height: 5px;
  margin: 0 auto;
  background-color: rgb(242, 242, 245);
`
export default function DetailData() {
  return (
    <Wrapper>
      <Inner>
        <Data>
          <LeftBox>
            <UserTier />
          </LeftBox>
          <RightBox>
            <TabData>
              <TabMenu>
                <TabOption>메인</TabOption>
                <TabOption>챔피언</TabOption>
              </TabMenu>
              <Line/>
            </TabData>
          </RightBox>
        </Data>
      </Inner>
    </Wrapper>
  );
}
