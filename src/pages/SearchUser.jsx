import { useEffect, useState } from "react";
import Inner from "../components/Inner";
import UserData from "../components/search-user/UserData";
import styled from "styled-components";
import DetailData from "../components/search-user/DetailData";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function SearchUser() {
  // const [userData, setUserData] = useState("")
  // useEffect(async()=>{
  //     const await
  // })
  return (
    <Wrapper>
        <UserData />
        <DetailData />
    </Wrapper>
  );
}
