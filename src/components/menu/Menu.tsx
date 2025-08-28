import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import gears from "../../assets/images/svg/gears.svg";
import contact from "../../assets/images/svg/contact-me.svg";
import skills from "../../assets/images/svg/skills.svg";

export const Menu = () => {
    return (
        <StyledMenu>
            <MenuList>
                <MenuItem>
                    <Link href="#skills">Skills</Link>
                </MenuItem>
                <MenuItem>
                    <Link href="#projects">Projects</Link>
                </MenuItem>
                <MenuItem>
                    <Link href="#contact">Contact me</Link>
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
    
    
    ul li:first-child {
        a:hover {
            color: ${theme.colors.titleColor};
            
            &::before{
                content: "";
                position: absolute;
                display: block;
                width: 22px;
                height: 23px;
                background: url("${skills}");
                left: -28px;
                top: -2px;
            }
        }
    }
    
    ul li:nth-child(2) {
        a:hover {
            color: ${theme.colors.titleColor};
            margin-left: 32px;

            &::before{
                content: "";
                position: absolute;
                display: block;
                width: 25px;
                height: 23px;
                background: url("${gears}");
                left: -28px;
                top: -2px;
            }
        }
    }
    
    ul li:last-child {
        a:hover {
            color: ${theme.colors.titleColor};
            margin-left: 32px;

            &::before{
                content: "";
                position: absolute;
                display: block;
                width: 23px;
                height: 23px;
                background: url("${contact}");
                left: -28px;
                top: -2px;
            }
        }
        
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
    position: relative;
    
    //correct gears position
    svg {
        transform: translateY(-2px);
    }
    
   
`

const MenuList = styled.ul`

`

