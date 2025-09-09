import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";
import gears from "../../assets/images/svg/gears.svg";
import contact from "../../assets/images/svg/contact-me.svg";
import skills from "../../assets/images/svg/skills.svg";

export const MobileMenu = () => {
    return (
        <StyledMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <PopUp isOpen={false}>
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
            </PopUp>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: none;

    ul li:first-child {
        a:hover {
            color: ${theme.colors.titleColor};

            &::before {
                content: "";
                position: absolute;
                //display: block;
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

            &::before {
                content: "";
                position: absolute;
                //display: block;
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

            &::before {
                content: "";
                position: absolute;
                //display: block;
                width: 23px;
                height: 23px;
                background: url("${contact}");
                left: -28px;
                top: -2px;
            }
        }

    }

    @media ${theme.media.mobile} {
        display: block;
    }

`

const BurgerButton = styled.button<{isOpen:boolean}>`
    position: relative;
    width: 31px;
    height: 35px;
    z-index: 999999;
    
    span {
        display: block;
        width: 31px;
        height: 3px;
        background-color: ${theme.colors.titleColor};
        position: absolute;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 31px;
            height: 3px;
            background-color: ${theme.colors.titleColor};
            position: absolute;
            transform: translateY(-10px);
            
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 31px;
            height: 3px;
            background-color: ${theme.colors.titleColor};
            position: absolute;
            transform: translateY(10px);
            
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

const MenuItem = styled.li`


`
type LinkPropsType = {
    color?: string;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

const PopUp = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${theme.colors.secondaryBg};
    opacity: 0.85;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`