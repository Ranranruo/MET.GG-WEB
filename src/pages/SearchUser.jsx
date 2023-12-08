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
  // const API_KEY = import.meta.env.VITE_API_KEY;
  const Param = useParams();
  return (
    <Wrapper>
        <UserData name={Param.name} tag={Param.tag}/>
        <DetailData />
    </Wrapper>
  );
}
