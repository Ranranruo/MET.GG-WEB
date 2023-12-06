import styled from "styled-components"

const StyledInner = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

export default function Inner({children}){
    return(
        <StyledInner>
            {children}
        </StyledInner>
    )
}