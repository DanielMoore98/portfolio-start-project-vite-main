import logoImg from "../../assets/images/logo-img.webp"
import styled from "styled-components";
export const Logo = () => {
    return (
        <StyledLink>
            <StyledImg src={`${logoImg}`} />
        </StyledLink>
    );
};

const StyledImg = styled.img`
    width: 90px;
    height: 35px;
`

const StyledLink = styled.a`
    display: flex;
    align-items: center;
`
