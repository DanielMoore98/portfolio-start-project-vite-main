import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import skillImg from "../../../assets/images/svg/skills-img.svg"

export const Skills = () => {
    return (
        <StyledSkills id="skills">
            <Container>
                <SectionTitle marginB={"30px"}>Skills</SectionTitle>
                <FlexWrapper justify="space-between" align="center">
                    <FlexWrapper direction="column" gap="40px">
                        <Text>I have a vast experience in the following web technologies:</Text>
                        <FlexWrapper gap={"42px"} align="center">
                            <Skill iconId={"html5"} viewBox="0 0 44 44" width="44" height="44" title="HTML 5"/>
                            <Skill iconId={"css3"} viewBox="0 0 53 53" width="53" height="53" title="CSS 3"/>
                            <Skill iconId={"js"} title={"Javascript"} viewBox={"0 0 43 43"} height={"43"} width={"43"}/>
                            <Skill iconId={"bootstrap"} viewBox="0 0 40 40" width="40" height="40" title="Bootstrap"/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <Photo src={skillImg} alt="Skills"/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};



const StyledSkills = styled.section`
    margin: 70px 0;
`
const Text = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #818080;
`

const Photo = styled.img`

`