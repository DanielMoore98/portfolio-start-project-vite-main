import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import img1 from "../../../assets/images/proj-img-1.webp"
import img2 from "../../../assets/images/proj-img-2.webp"
import img3 from "../../../assets/images/proj-img-3.webp"
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";

export const Projects = () => {
    return (
        <StyledProjects id={"projects"}>
            <Container>
                <SectionTitle color={"rgba(255, 255, 255, 0.87)"} marginb={"8px"}>
                    <Icon iconId={"gearsWhite"} width={"28"} height={"23"} viewBox={"0 0 28 22"}/>
                    Projects
                </SectionTitle>
                <Text>A select number of projects</Text>
                <MobileText>Some of my projects include:</MobileText>
                <FlexWrapper justify={"space-around"} align={"flex-start"} wrap={"wrap"} gap={"40px"}>
                    <Project text={"Made a social media manager template using HTML 5, CSS and JS."}
                             src={img1}/>
                    <Project text={"Made a simple card page using HTML 5 and  CSS 3"}
                             src={img2}/>
                    <Project text={"Made an I.P address tracking website."}
                             src={img3}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    background-color: ${theme.colors.tertiaryBg};
    padding: 30px 0 40px;
    
    @media ${theme.media.tablet} {
        padding: 24px 0 24px;
        
        ${SectionTitle}{
            margin-bottom: 18px;
        }
        
        ${Container}{
            padding: 0 45px;
        }
    }
`

const Text = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 24px;
    
    @media ${theme.media.tablet} {
        display: none;
    }
`

const MobileText = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 24px;
    display: none;

    @media ${theme.media.tablet} {
        display: block;
        margin-bottom: 42px;
    }
`