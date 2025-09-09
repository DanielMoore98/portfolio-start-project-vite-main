
import mainImg from "../../../assets/images/danmoore-main-img.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import zigzags from "../../../assets/images/svg/zigzags.svg"
import ellipse from "../../../assets/images/svg/ellipse.svg"
import plus from "../../../assets/images/svg/plus.svg"
import cube from "../../../assets/images/svg/cube.svg"
import circles from "../../../assets/images/svg/circles.svg"
import circlesMobile from "../../../assets/images/svg/circles-mobile.svg"
import ellipseMobile from "../../../assets/images/svg/ellipse-mobile.svg"
import zigzagsMobile from "../../../assets/images/svg/zigzags-mobile.svg"
import plusMobile from "../../../assets/images/svg/plus-mobile.svg"
import cubeMobile from "../../../assets/images/svg/cube-mobile.svg"
import { font } from "../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain id="main">
            <Container>
                <FlexWrapper justify="space-between" align="center" >
                    <Group>
                        <SmallText>Hi👋, I’m a</SmallText>
                        <Title>software developer</Title>
                        <Text>I’m <Bold>Daniel Moore</Bold>, a developer dedicated to making the world a better place
                            one line of code at a time.</Text>
                        <Link href={'#contact'}>Hire me</Link>
                    </Group>
                    <ImageGroupWrapper>
                        <CrossCube/>
                        <Photo src ={mainImg} alt="main image"/>
                        <Circles/>
                    </ImageGroupWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background: ${theme.colors.primaryBg};
    min-height: 100vh;
    display: flex;
    
    @media ${theme.media.tablet}{
        ${FlexWrapper} {
            flex-direction: column-reverse;
            justify-content: center;
            gap: calc((100vw - 360px)/(768 - 360) * (0 - 69) + 69px);
        }
    }
     
`
const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 555px;
    //border: 1px solid red;
    @media ${theme.media.tablet}{
        max-width: 395px;
    }

`

const SmallText = styled.span`
    ${font({weight:600, Fmax: 32, Fmin: 22})};
    line-height: 118%;
    letter-spacing: 0.01em;
    color: #343d68;
`

const Title = styled.h1`
    ${font({weight:600, Fmax: 48, Fmin: 28})};
    white-space: nowrap;
    line-height: 118%;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #343d68;

`
const Text = styled.p`
    margin: 30px 0;
    text-align: left;
    font-weight: 400;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
    
    @media ${theme.media.tablet} {
        margin: 12px 0 36px;
    }
`

const Bold = styled.span`
    font-weight: 700;
`

const Link = styled.a`
    border-radius: 4px;
    padding: 8px 16px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14);
    background: ${theme.colors.titleColor};
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    
    @media ${theme.media.tablet} {
        padding: 10px 24px;
    }
`

const Photo = styled.img`

    object-fit: cover;
    object-position: right;
    width: 345px;
    height: 390px;

    @media ${theme.media.mobile} {
        width: 204px;
        height: 238px;
        
    }
`

const ImageGroupWrapper = styled.div`
    max-width: 412px;
    width: 100%;
    height: 495px;
    padding: 53px 23px 52px 38px;
    //border: solid 1px blue;
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        background-image: url("${zigzags}");
        width: 42px;
        height: 102px;
        left: -3px;
        top: 34px;
        
        @media ${theme.media.mobile} {
            background-image: url("${zigzagsMobile}");
            width: 26px;
            height: 63px;
            top: 20px;
            left: 0;
        }
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        background-image: url("${ellipse}");
        width: 23px;
        height: 23px;
        right: 366px;
        bottom: 16px;
        @media ${theme.media.mobile} {
            background-image: url("${ellipseMobile}");
            left: 22px;
            bottom: 0;
            width: 14px;
            height: 13px;
        }
    }

    @media ${theme.media.mobile} {
        max-width: 258px;
        height: 295px;
        padding: 36px 12px 21px 38px;
    }

`

const CrossCube = styled.div`
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        background-image: url("${plus}");
        width: 27px;
        height: 28px;
        top: -54px;
        right: 196px;

        @media ${theme.media.mobile} {
            background-image: url("${plusMobile}");
            width: 21px;
            height: 21px;
            top: -36px;
            left: 63px;
        }
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        background-image: url("${cube}");
        width: 41px;
        height: 41px;
        top: -53px;
        left: 330px;
        @media ${theme.media.mobile} {
            background-image: url("${cubeMobile}");
            width: 25px;
            height: 25px;
            left: 192px;
            top: -35px;

        }
    }
`
const Circles = styled.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        background-image: url("${circles}");
        width: 120px;
        height: 76px;
        left: 245px;
        top: -30px;

        @media ${theme.media.mobile} {
            width: 105px;
            height: 60px;
            background-image: url("${circlesMobile}");
            left: 120px;
            top:-25px;
        }

    }
`

