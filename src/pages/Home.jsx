import { styled } from "styled-components"
import Nav from "../components/Home/nav"

const Wrapper = styled.div`
    
`
const ABC = styled.div`
    height: 350px;
`
export default function Home() {
    return (
        <Wrapper>
            <Nav/>
            <ABC/>
        </Wrapper>
    )
}