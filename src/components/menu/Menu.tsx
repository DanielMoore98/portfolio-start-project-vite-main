import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href=""><Icon iconId = "gears"/>Projects</a>
                </li>
                <li>
                    <a href="">Contact me</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }

`

