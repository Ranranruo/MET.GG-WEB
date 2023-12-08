import { styled } from "styled-components";
import FindMap from "../components/find-pcroom/FindMap";
import Inner from "../components/Inner";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
`
const FindMapBox = styled.div`
    width: 100%;
    height: 600px;
`
const TitleBox = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
const Title = styled.h1`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 50px;
`
const SubTitle = styled.h2`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    font-size: 20px;

`
export default function FindPcRoom() {
    return (
        <Inner>
            <Wrapper>
                <TitleBox>
                    <Title>내 주변 PC방 찾기</Title>
                    <SubTitle>내 위치와 가장 가까운 PC방을 찾아보세요!</SubTitle>
                </TitleBox>
                <FindMapBox>
                    <FindMap />
                </FindMapBox>
            </Wrapper>
        </Inner>
    )
}