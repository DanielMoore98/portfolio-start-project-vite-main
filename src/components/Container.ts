import styled from "styled-components";

type ContainerPropsType = {
    padding?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1270px;
    width: 100%;
    min-height: 100%;
    padding: ${props => props.padding || "0 15px"};
    margin: 0 auto;
    //border: 1px solid red;
`