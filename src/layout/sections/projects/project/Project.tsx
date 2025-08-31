import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import gitIcon from  "../../../../assets/images/svg/github-icon.svg"

type ProjectPropsType = {
    text:string
    src:string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Text>{props.text}</Text>
            <Link>
                Learn More
            </Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    max-width: 380px;
    min-height: 430px;
    border: 4px solid transparent;
    background: linear-gradient(#262c4d, #262c4d 0) padding-box,
    linear-gradient(90deg, rgba(32, 236, 211, 1), rgba(13, 84, 190, 1)) border-box;
    

`
const Image = styled.img`
    width: 100%;
    height: 276px;
    object-fit: cover;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: ${theme.colors.font};
`

const Link = styled.button`
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 4px;
    padding: 8px 16px 14px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #fff;
    position: relative;

    &:hover {
        width: 130px;
        text-align: left;

        &:after {
            content: "";
            position: absolute;
            display: block;
            width: 15px;
            height: 15px;
            background: url("${gitIcon}");
            right: 15px;
            bottom: 15px;
        }
    }
`