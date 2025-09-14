import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import skillImg from "../../../assets/images/svg/skills-img.svg"
import {theme} from "../../../styles/Theme.ts";
import { font } from "../../../styles/Common.ts";
import {SkillMobile} from "./SkillMobile/SkillMobile.tsx";

export const Skills = () => {
    return (
        <StyledSkills id="skills">
            <Container>
                <SectionTitle marginb={"30px"}>Skills</SectionTitle>
                <FlexWrapper justify="space-between" align="center">
                    <Group>
                        <Text>I have a vast experience in the following web technologies:</Text>
                        <SkillWrapper>
                            <Skill iconId={"html5"} viewBox="0 0 44 44" width="44" height="44" title="HTML 5"/>
                            <Skill iconId={"css3"} viewBox="0 0 53 53" width="53" height="53" title="CSS 3"/>
                            <Skill iconId={"js"} title={"Javascript"} viewBox={"0 0 43 43"} height={"43"} width={"43"}/>
                            <Skill iconId={"bootstrap"} viewBox="0 0 40 40" width="40" height="40" title="Bootstrap"/>
                            <SkillMobile iconId={"html5Mobile"} width="77" height="76" viewBox="0 0 77 76" title="HTML 5"/>
                            <SkillMobile iconId={"css3Mobile"} width="94" height="86" viewBox="0 0 94 86" title="CSS 3"/>
                            <SkillMobile iconId={"jsMobile"} width="65" height="65" viewBox="0 0 65 65" title="Javascript" />
                            <SkillMobile iconId={"bootstrapMobile"} width="64" height="64" viewBox="0 0 64 64" title="Bootstrap"/>
                        </SkillWrapper>
                    </Group>
                    <Photo src={skillImg} alt="Skills"/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};



const StyledSkills = styled.section`
    margin: 70px 0;

    ${SectionTitle} {
        ${font({weight: 500, Fmin: 25, Fmax: 20, color: theme.colors.titleColor})}
    }

    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            flex-wrap: wrap-reverse;
            justify-content: space-around;
        }
        
        ${SectionTitle} {
            font-weight: 600;
        }

        margin: 0 0 92px;
        
        
    }

`
const Text = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #818080;
    @media ${theme.media.tablet} {
        margin-top: 43px;
        text-align: left;
    }
`

const Photo = styled.img`
    max-width: 512px;
    height: auto;
`

const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const SkillWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 42px;
    flex-wrap: wrap;
    
    @media ${theme.media.tablet} {
        justify-content: space-around;
        gap: 33px 54px;
        
    }
`