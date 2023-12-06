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
  justify-content: flex-end;
`
const TabOption = styled.li`
  font-family: 'GothicA1-Light';
  font-family: "KBO-Dia-Gothic_bold";
  font-weight: 600;
  font-size: 20px;
  padding: 20px 0px;
  padding-right: 20px;
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
            </TabData>
          </RightBox>
        </Data>
      </Inner>
    </Wrapper>
  );
}
