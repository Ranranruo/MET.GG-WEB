import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLogo = styled.div`
    display: inline-block;
    background-image: url('/img/logoBlack.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 25px 75px;
    margin: 5px 0px;
`
export default function Logo(props) {
    return (
        <Link to="/">
            <StyledLogo></StyledLogo>
        </Link>
    )
}