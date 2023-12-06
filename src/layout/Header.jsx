import styled from "styled-components";
import Inner from "../components/Inner";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Banner from "../components/Banner";

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export default function Header(){
    return(
        <Inner>
            <Flex>
            <Logo size={"10px"}/>
            <Menu/>
            </Flex>
            <Banner/>
        </Inner>
    )
}