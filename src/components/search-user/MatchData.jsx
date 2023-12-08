import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Match = styled.div`
   display: grid;
   position: relative;
   background-color: rgba(93, 156, 235, 0.25);
   grid-template-columns: 20% 35% 15% 1fr;
   height: 130px;
   border-radius: 10px;
   padding: 15px 20px;
   &::before{
    content: '';
    width:10px;
    height: 100%;
    top: 0;
    left: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    background-color: rgba(93, 156, 235, 1);
   }
   ${(props) =>
        props.primary &&
        css`
    background-color: rgba(232, 64, 87, 0.25);
    &::before{
        width:10px;
    height: 100%;
    top: 0;
    left: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    background-color: rgba(232, 64, 87, 1);
    }
    `};
    `
const MatchDetail = styled.div`
    display: flex;
    height: 100%;
    gap: 7px;
    flex-direction: column;
    `
const Ranked = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  color: black;
  font-weight: 400;
  font-size: 17px;
  `
const Day = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  color: rgba(0, 0, 0, 0.6);
  font-size: 17px;
  `
const Time = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  color: rgba(0, 0, 0, 0.85);   
  font-size: 15px;
  `
const IsWin = styled.p`
  color: rgba(93, 156, 235, 1);
  font-weight: 500;
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  align-self: flex-end;
  ${(props) =>
        props.primary &&
        css`
        color: rgba(232, 64, 87, 1);
    `};
  `
const DetailTextBox = styled.div`
  display: flex;
  font-family: 'Noto Sans KR', sans-serif;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  align-items: center;
  gap: 5px;
  `
const AverageTier = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 300;
  font-size: 16px;
  `
const InGameData = styled.div`
    display: grid;
    gap: 4px;
    grid-template: 65px 1fr / 65px 65px 1fr;
    grid-template-areas: 
    "icon spell kda"
    "item item item";
    `
const ChampionIcon = styled.div`
    position: relative;
    background-image: url(${(props) => props.url});
    background-size: 110%;
    background-position: center;
    border-radius: 100%;
    &::before{
        content:'12';
        position: absolute;
        font-family: 'Noto Sans KR', sans-serif;       
        background-color: rgb(32, 45, 55);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        font-size: 13px;
        width: 25px;
        height: 25px;
        bottom: 0;
        right: 0;
    }
    
`
const Skill = styled.div`
    display: grid;
    padding: 1px;
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-template-areas: 
    "Spell1 Rune"
    "Spell2 Rune";
    gap: 3px;
`
const ItemBox = styled.div`
    display: flex;
    grid-area: item;
    gap: 2px;
    `
const Item = styled.div`
    height: 30px;
    width: 30px;
    background-image: url(${(props) => props.url});
    background-size: cover;
    border-radius: 5px;
    background-color: rgb(117, 133, 146);
    ${(props) =>
        props.primary &&
        css`
        border-radius: 100%;
        `};
        `
const Spell = styled.div`
    background-image: url(${(props) => props.url});
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    `
const Rune = styled.div`
    background-image: url(${(props) => props.url});
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    background-color: black;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    ${(props) =>
        props.primary &&
        css`
        background-size: 70%;
        background-repeat: no-repeat;
        `};
        `
const KdaBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const Kda = styled.p`
    display: flex;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    gap: 5px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
`
const Death = styled.p`
    color: rgba(255, 0, 0, 0.9);
`
const KA = styled.p`
    color: black;
`
const AverageKda = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.6);
`
const EvaluationBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`
const KillRate = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    color: rgba(255, 0, 0, 0.9);
    font-size: 17px;
    font-weight: 400;

`
const WardPoint = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    font-weight: 200;
    
`
const CS = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 200;
    
`
const InGameRank = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(104, 104, 104);
    color: rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    width: 50px;
    height: 25px;
`
const UserList = styled.div`
    display: grid;
    height: 110px;
    grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr ;
    `
const UserBox = styled.div`
    display: flex;
    align-items: center;
`
const UserName = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    font-size: 15px;
    
`
const UserChamIcon = styled.div`
    background-image: url(${(props) => props.url});
    border-radius: 5px;
    width: 20px;
    height: 20px;
    background-size: 110%;
`;
export default function MatchData() {
    return (
        <Wrapper>
            <Match>
                <MatchDetail>
                    <DetailTextBox>
                        <IsWin>승리</IsWin>
                        |
                        <Ranked>솔랭</Ranked>
                    </DetailTextBox>
                    <AverageTier>실버 VI</AverageTier>
                    <Time>26:42</Time>
                    <Day>1시간 전</Day>
                </MatchDetail>
                <InGameData>
                    <ChampionIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                    <Skill>
                        <Spell url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerFlash.png"></Spell>
                        <Spell url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerSmite.png" style={{ gridArea: 'Spell2' }} ></Spell>
                        <Rune url="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"></Rune>
                        <Rune url="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png" primary="true"></Rune>
                    </Skill>
                    <KdaBox>
                        <Kda>
                            <KA>1</KA>/<Death>12</Death>/<KA>5</KA>
                        </Kda>
                        <AverageKda>0.50 KDA</AverageKda>
                    </KdaBox>
                    <ItemBox>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"></Item>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"></Item>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"></Item>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"></Item>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"></Item>
                        <Item></Item>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/3364.png" primary="true"></Item>
                    </ItemBox>
                </InGameData>
                <EvaluationBox>
                    <KillRate>킬관여 10%</KillRate>
                    <WardPoint>시야점수 10</WardPoint>
                    <CS>CS 120</CS>
                    <InGameRank>10등</InGameRank>
                </EvaluationBox>
                <UserList>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                </UserList>
            </Match>
            <Match primary="true">
                <MatchDetail>
                    <DetailTextBox>
                        <IsWin primary="true">패배</IsWin>
                        |
                        <Ranked>솔랭</Ranked>
                    </DetailTextBox>
                    <AverageTier>실버 VI</AverageTier>
                    <Time>26:42</Time>
                    <Day>1시간 전</Day>
                </MatchDetail>
                <InGameData>
                    <ChampionIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                    <Skill>
                        <Spell url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerFlash.png"></Spell>
                        <Spell url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/SummonerSmite.png" style={{ gridArea: 'Spell2' }} ></Spell>
                        <Rune url="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"></Rune>
                        <Rune url="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png" primary="true"></Rune>
                    </Skill>
                    <KdaBox>
                        <Kda>
                            <KA>1</KA>/<Death>12</Death>/<KA>5</KA>
                        </Kda>
                        <AverageKda>0.50 KDA</AverageKda>
                    </KdaBox>
                    <ItemBox>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"></Item>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"></Item>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"></Item>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"></Item>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/1001.png"></Item>
                        <Item></Item>
                        <Item url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/3364.png" primary="true"></Item>
                    </ItemBox>
                </InGameData>
                <EvaluationBox>
                    <KillRate>킬관여 10%</KillRate>
                    <WardPoint>시야점수 10</WardPoint>
                    <CS>CS 120</CS>
                    <InGameRank>10등</InGameRank>
                </EvaluationBox>
                <UserList>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                    <Link>
                        <UserBox>
                            <UserChamIcon url="https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Yasuo.png" />
                            <UserName>란란루우</UserName>
                        </UserBox>
                    </Link>
                </UserList>
            </Match>
        </Wrapper>
    )
}