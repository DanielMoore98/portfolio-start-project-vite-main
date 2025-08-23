import styled from "styled-components";

type SectionTitlePropsType = {
    color?: string
    align?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    text-align: ${props => props.align || 'center'};
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.color || '#e84949'};

    svg {
        margin-right: 16px;
    }
`