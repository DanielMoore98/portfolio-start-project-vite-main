import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import img from "../../../assets/images/svg/contact-img.webp"
import sendImg from "../../../assets/images/send-msg.webp"
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";

export const Contact = () => {
    return (
        <StyledContact id="contact">
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper justify="space-between">
                    <Photo src={img}></Photo>
                    <StyledForm>
                        <Field placeholder={"Enter email address"}/>
                        <Field placeholder={"Enter message..."} as={"textarea"}/>
                        <StyledButton type={"submit"}>Send Message
                            <SendImg src={sendImg}/>
                        </StyledButton>
                    </StyledForm>
                </FlexWrapper>

            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background: ${theme.colors.secondaryBg};
`
const Photo = styled.img`
    object-fit: cover;
`

const StyledForm = styled.form`
    max-width: 613px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 43px;
    
`

const SendImg = styled.img`
    max-width: 21px;
    max-height: 23px;
    object-fit: cover;
`

const Field = styled.input`

`
const StyledButton = styled.button`
    max-width: 213px;
    align-self: center;
`