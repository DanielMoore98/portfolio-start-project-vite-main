import logoImg from "../../assets/images/danmoore-logo.webp"
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
export const Logo = () => {
    return (
        <StyledLink href={"#main"}>
            <StyledImg src={logoImg} />
        </StyledLink>
    );
};

const StyledImg = styled.img`
    object-fit: contain;
    width: 90px;
    height: 45px;
`

const StyledLink = styled.a`
    display: flex;
    align-items: center;
    @media ${theme.media.mobile} {
        display: none;
    }
`
