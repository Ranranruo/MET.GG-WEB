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
const ChampionIcon = styled.div`
    position: relative;
    width: 50px;
    height: 50px ;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(props) => `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${props.Champion}.png`});
    background-size: 110%;
    border-radius: 100%;
`
const Mastery = styled.div`
    background-image: url(${(props) => `/img/mastery_emote/masteryemote${props.mastery}.png`});
    background-size: cover;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: 25px;
    height: 25px;
`
export default function ChampionData() {
    return (
        <Wrapper>
            <ChampionBox>
                <ChampionIcon Champion="Yasuo">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>야스오</ChampionName>
                    <ChampionPoint>326,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Yone">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>요네</ChampionName>
                    <ChampionPoint>323,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="LeeSin">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>리 신</ChampionName>
                    <ChampionPoint>180,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Ekko">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>에코</ChampionName>
                    <ChampionPoint>181,818</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Yasuo">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>야스오</ChampionName>
                    <ChampionPoint>326,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Yone">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>요네</ChampionName>
                    <ChampionPoint>323,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="LeeSin">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>리 신</ChampionName>
                    <ChampionPoint>180,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Ekko">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>에코</ChampionName>
                    <ChampionPoint>181,818</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Yasuo">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>야스오</ChampionName>
                    <ChampionPoint>326,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Yone">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>요네</ChampionName>
                    <ChampionPoint>323,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="LeeSin">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>리 신</ChampionName>
                    <ChampionPoint>180,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Ekko">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>에코</ChampionName>
                    <ChampionPoint>181,818</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Yasuo">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>야스오</ChampionName>
                    <ChampionPoint>326,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Yone">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>요네</ChampionName>
                    <ChampionPoint>323,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="LeeSin">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>리 신</ChampionName>
                    <ChampionPoint>180,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Ekko">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>에코</ChampionName>
                    <ChampionPoint>181,818</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Yasuo">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>야스오</ChampionName>
                    <ChampionPoint>326,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Yone">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>요네</ChampionName>
                    <ChampionPoint>323,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="LeeSin">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>리 신</ChampionName>
                    <ChampionPoint>180,544</ChampionPoint>
                </TextBox>
            </ChampionBox>
            <ChampionBox>
                <ChampionIcon Champion="Ekko">
                    <Mastery mastery="7"/>
                </ChampionIcon>
                <TextBox>
                    <ChampionName>에코</ChampionName>
                    <ChampionPoint>181,818</ChampionPoint>
                </TextBox>
            </ChampionBox>
        </Wrapper>
    )
}