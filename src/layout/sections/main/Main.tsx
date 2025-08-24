
import mainImg from "../../../assets/images/main-img.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify="space-between">
                    <div>
                        <span>Hi👋, I’m a</span>
                        <h1>software developer</h1>
                        <p>I’m John Doe, a developer dedicated to making the world a better place one line of code at a time.</p>
                        <button>Hire me</button>
                    </div>
                    <Photo src ={mainImg} alt="main image"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background: ${theme.colors.primaryBg};
`

const Photo = styled.img`
    max-width: 411px;
    max-height: 495px;
    object-fit: cover;
`
