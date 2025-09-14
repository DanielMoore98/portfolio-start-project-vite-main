import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import hexagon from "../../../../assets/images/svg/hexagon.svg"
import {theme} from "../../../../styles/Theme.ts";

type SkillPropsType = {
    iconId: string
    title: string
    viewBox?: string
    height?: string
    width?: string
}

export const SkillMobile = (props:SkillPropsType) => {
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
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`

const IconWrapper = styled.div`
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    //border: 1px solid red;

    &::before {
        content: '';
        display: block;
        position: absolute;
        background: url("${hexagon}");
        width: 65px;
        height: 75px;
    }

    @media ${theme.media.tablet} {
        width: 118px;
        height: 118px;

        &::before {
            width: 104px;
            height: 118px;
        }

    }
`

const SkillTitle = styled.h3`
    margin-top: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 181%;
    text-align: center;
    color: #000;
    
    @media ${theme.media.tablet} {
        margin-top: 6px;
        font-size: 18px;
        line-height: 161%;
    }
`
