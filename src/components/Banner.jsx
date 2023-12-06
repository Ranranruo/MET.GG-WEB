import { styled } from "styled-components";
import Inner from "./Inner";
import { fonts } from "../../public/font/font";
import { Link } from "react-router-dom";

const StyledBanner = styled.div`
display: flex;
align-items: center;
    background-color: #FD6505;
    border-radius: 5px;
`
const Text = styled.p`
    ${fonts}
    font-family: 'GothicA1-Light';
    font-size: 13px;
    color: white;
    padding: 12px 17px;
    &:hover{
        text-decoration: underline;
    }
`

export default function Banner() {
    return (
        <Inner>
            <StyledBanner>
                <Link>
                    <Text>다른 유저와 파티를 꾸려 보세요!</Text>
                </Link>
            </StyledBanner>
        </Inner>
    )
}