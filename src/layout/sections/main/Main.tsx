
import mainImg from "../../../assets/images/danmoore-main-img.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import ziggzags from "../../../assets/images/svg/zigzags.svg"
import ellipse from "../../../assets/images/svg/ellipse.svg"
import plus from "../../../assets/images/svg/plus.svg"
import cube from "../../../assets/images/svg/cube.svg"
import circles from "../../../assets/images/svg/circles.svg"


export const Main = () => {
    return (
        <StyledMain id="main">
            <Container>
                <FlexWrapper justify="space-between" align="center">
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
    flex-wrap: wrap;
    align-content: center;
     
`
const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 555px;
    //border: 1px solid red;

`

const SmallText = styled.span`
    font-weight: 600;
    font-size: 32px;
    line-height: 118%;
    letter-spacing: 0.01em;
    color: #343d68;
`

const Title = styled.h1`
    font-weight: 600;
    font-size: 48px;
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
`

const Photo = styled.img`
    object-fit: cover;
    object-position: right;
    width: 345px;
    height: 390px;
`

const ImageGroupWrapper = styled.div`
    max-width: 411px;
    width: 100%;
    min-height: 495px;
    padding: 53px 23px 52px 38px;
    //border: solid 1px blue;
    position: relative;
    
    &::before{
        content: '';
        display: block;
        position: absolute;
        background: url("${ziggzags}"); 
        width: 42px;
        height: 102px;
        left: -3px;
        top: 34px;
    }

    &::after{
        content: '';
        display: block;
        position: absolute;
        background: url("${ellipse}");
        width: 23px;
        height: 23px;
        right: 366px;
        bottom: 16px;
    }
    
    
`

const CrossCube = styled.div`
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        background: url("${plus}");
        width: 27px;
        height: 28px;
        top: -54px;
        right: 196px;
    }
    
    &::after{
        content: '';
        display: block;
        position: absolute;
        background: url("${cube}");
        width: 41px;
        height: 41px;
        top: -53px;
        left: 330px;
    }
`
const Circles = styled.div`
    position: relative;
    
    &::after{
        content: '';
        display: block;
        position: absolute;
        background: url("${circles}");
        width: 120px;
        height: 76px;
        left: 245px;
        top:-30px;
        
    }
`

