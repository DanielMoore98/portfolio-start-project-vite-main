import styled from "styled-components";
import {Logo} from "../../components/logo/logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
    background: #fcfcfc;

`


