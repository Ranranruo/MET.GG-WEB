import { styled } from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 20px;
    background-color: white;
`
const ChampionBox = styled.div`
position: relative;
    width: 25%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    gap: 10px;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const ChampionIcon = styled.div`
    padding: 30px;
    background-image: url(${(props) => props.url});
    background-size: 105%;
    border-radius: 100%;
    &::before{
        content: '';
        position: absolute;
        background-image: url(${(props) => 'img/mastery_emote/masteryemote${props.mastery}.png'});
        z-index: 1;
        background-size: 100%;
        padding: 15px;
    }
`
const ChampionName = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 20px;
`
const ChampionPoint = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    font-size: 16px;
`

export default function ChampionData() {
    return (
        <Wrapper>
            <ChampionBox>
                <ChampionIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" mastery=""/>
                <TextBox>
                    <ChampionName>Yasuo</ChampionName>
                    <ChampionPoint>326,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
        </Wrapper>
    )
}