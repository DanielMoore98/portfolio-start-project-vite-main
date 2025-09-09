import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import img from "../../../assets/images/svg/contact-section-img.svg"
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import sendIcon from "../../../assets/images/svg/send-msg.svg"

export const Contact = () => {
    return (
        <StyledContact id="contact">
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper justify="space-between" align={"center"} wrap={"wrap"}>
                    <Photo src={img}></Photo>
                    <StyledForm>
                        <Field placeholder={"Enter email address"}/>
                        <Field placeholder={"Enter message..."} as={"textarea"}/>
                        <StyledButton type={"submit"}>Send Message</StyledButton>
                    </StyledForm>
                </FlexWrapper>

            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    padding: 70px 0;
    background: ${theme.colors.secondaryBg};

    ${SectionTitle} {
        margin-bottom: 30px;
    }
`
const Photo = styled.img`
    object-fit: cover;
    max-width: 562px;
    height: auto;
`

const StyledForm = styled.form`
    max-width: 612px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 43px;

    textarea {
        resize: none;
        height: 158px;
    }

    :focus {
        outline: 1px solid rgba(0, 0, 0, 0.35);

    }
`


const Field = styled.input`
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 12px 18px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);

    font-weight: 400;
    font-size: 14px;
    line-height: 207%;
    color: #838383;
    font-family: 'Be Vietnam Pro', sans-serif;

`
const StyledButton = styled.button`
    font-family: 'Be Vietnam Pro', sans-serif;
    border-radius: 4px;
    padding: 12px 24px;
    width: 213px;
    height: 50px;
    font-weight: 400;
    font-size: 18px;
    color: #fffdfd;
    background-color: ${theme.colors.tertiaryBg};
    align-self: center;
    position: relative;

    &:hover {
        text-align: left;
        cursor: pointer;

        &:after {
            content: '';
            position: absolute;
            background: url("${sendIcon}");
            height: 21px;
            width: 21px;
            right: 24px;
        }
    }
`