import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import hexagon from "../../../../assets/images/svg/hexagon.svg"

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
            <IconWrapper>
                <Icon iconId={props.iconId} viewBox={props.viewBox} height={props.height} width={props.width}/>
            </IconWrapper>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`

`

const IconWrapper = styled.div`
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    //border: 1px solid red;
    
    &::before{
        content: '';
        display: block;
        position: absolute;
        background: url("${hexagon}");
        width: 65px;
        height: 75px;
    }
`

const SkillTitle = styled.h3`
    margin-top: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 181%;
    text-align: center;
    color: #000;
`
