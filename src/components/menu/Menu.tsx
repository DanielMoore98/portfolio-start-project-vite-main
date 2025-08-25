import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";

export const Menu = () => {
    return (
        <StyledMenu>
            <MenuList>
                <MenuItem>
                    <Link href="#">Home</Link>
                </MenuItem>
                <MenuItem>
                    <Link href="#" color={theme.colors.titleColor}>
                        <FlexWrapper gap={"8px"}>
                            <Icon iconId = "gears"/>Projects
                        </FlexWrapper>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="#">Contact me</Link>
                </MenuItem>
            </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }

`

const MenuItem = styled.li`

`
type LinkPropsType = {
    color? : string;
}

const Link = styled.a<LinkPropsType>`
    font-weight: 400;
    font-size: 18px;
    color: ${props => props.color || theme.colors.headerFont};
    
    
    //correct gears position
    svg {
        transform: translateY(-2px);
    }
`

const MenuList = styled.ul`

`

