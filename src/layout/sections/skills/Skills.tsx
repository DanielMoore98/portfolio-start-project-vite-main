import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import skillImg from "../../../assets/images/skills-img.webp";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper justify="space-between" align="center">
                    <FlexWrapper direction="column">
                        <p>I have a vast experience in the following web technologies:</p>
                        <FlexWrapper justify="space-between">
                            <Skill iconId={"html5"} viewBox="0 0 44 44" width="44" height="44" title="HTML 5"/>
                            <Skill iconId={"css3"} viewBox="0 0 53 53" width="53" height="53" title="CSS 3"/>
                            <Skill iconId={"bootstrap"} viewBox="0 0 40 40" width="40" height="40" title="Bootstrap"/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <img src={skillImg} alt="Skills"/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background: ${theme.colors.secondaryBg};
`
