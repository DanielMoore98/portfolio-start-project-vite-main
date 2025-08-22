import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    viewBox: string
    height: string
    width: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} viewBox={props.viewBox} height={props.height} width={props.width}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div``

const SkillTitle = styled.h3``
