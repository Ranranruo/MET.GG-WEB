import { useEffect, useState } from "react";
import UserData from "../components/search-user/UserData";
import styled from "styled-components";
import DetailData from "../components/search-user/DetailData";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function SearchUser() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const Param = useParams();
  const [userData, setUserData] = useState('');
  const getUserKey = async() =>{
    const res = await fetch(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${Param.name}/${Param.tag}?api_key=${API_KEY}`)
    const json = await res.json();
    setUserData(json);
    console.log(userData);
  }
  useEffect(()=>{
    getUserKey()
  },[])
  const [userKey, setKey] = useState('')
  return (
    <Wrapper>
        <UserData name={Param.name} tag={Param.tag}/>
        <DetailData />
    </Wrapper>
  );
}
