import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Inner = styled.div`
  width: 1028px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  `;
const Text = styled.p`
  font-family: "GothicA1-Light";
  padding-bottom: 10px;
  `;
const Ul = styled.ul`
  font-family: "GothicA1-Light";
  display: flex;
  gap: 10px;
  `;
export default function Footer() {
  return (
    <Inner>
      <Ul>
        <Link to="/">홈</Link>
        <Link to="/">챔피언</Link>
        <Link to="/">파티찾기</Link>
        <Link to="/">데스크톱</Link>
      </Ul>
      <Text>
        Copyright 2023. Team '신민석,신우주,김지효'. ALL rights reserved.
      </Text>
    </Inner>
  );
}
