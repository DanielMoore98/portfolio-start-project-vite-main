import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";

type ProjectPropsType = {
    text:string
    src:string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Text>{props.text}</Text>
            <Button>
                Learn More
                <Icon iconId={"whiteArrow"} height={"20"} width={"20"} viewBox="0 0 20 20"/>
                </Button>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #262c4d;
    max-width: 381px;
    max-height: 431px;
    
`
const Image = styled.img`
    width: 100%;
    height: 276px;
    object-fit: cover;
`

const Text = styled.p`
        text-align: center;
`

const Button = styled.button`
    background-color: transparent;
    
`