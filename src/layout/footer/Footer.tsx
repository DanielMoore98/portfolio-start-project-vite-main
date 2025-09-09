import styled from "styled-components";
import wave from "../../assets/images/svg/wave.svg"
import {Icon} from "../../components/icon/Icon.tsx";
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
export const Footer = () => {
    return (
        <StyledFooter>
                <Container padding={"0 110px"}>
                    <FlexWrapper justify="space-between" wrap={"wrap"} align={"center"}>
                        <SocialWrapper>
                            <Text>My social media links:</Text>
                            <SocialList>
                                <SocialItem>
                                    <SocialIconLink>
                                        <Icon height={"30"} width={"30"} viewBox={"0 0 30 30"} iconId={"linkedin"} />
                                    </SocialIconLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialIconLink>
                                        <Icon height={"30"} width={"30"} viewBox={"0 0 30 30"} iconId={"whatsapp"} />
                                    </SocialIconLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialIconLink>
                                        <Icon height={"30"} width={"30"} viewBox={"0 0 30 30"} iconId={"twitter"} />
                                    </SocialIconLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialIconLink>
                                        <Icon height={"30"} width={"30"} viewBox={"0 0 30 30"} iconId={"email"} />
                                    </SocialIconLink>
                                </SocialItem>
                            </SocialList>
                        </SocialWrapper>
                        <GitWrapper>
                            <Text>More projects I’ve worked on</Text>
                            <SocialIconLink href={"https://github.com/DanielMoore98"}>
                                <Icon height={"30"} width={"32"} viewBox={"0 0 30 32"} iconId={"github"} />
                                @<BlueHighlight>DanielMoore98</BlueHighlight> on github
                            </SocialIconLink>
                        </GitWrapper>
                    </FlexWrapper>
                </Container>
        </StyledFooter>
    );
};



const StyledFooter = styled.footer`
    background: ${theme.colors.secondaryBg};
    background-image: url("${wave}");
    background-repeat: no-repeat;
    background-size: cover;
    height: 444px;
    
    ${Container} {
        display: flex;
        align-items: center;
    }
    
    ${FlexWrapper} {
        width: 100%;
    }
    
    @media ${theme.media.mobile} {
        align-items: center;
        height: 400px;
        ${Container} {
            padding: 0 15px;
            height: 350px;
            
        }
        
        ${FlexWrapper} {
            height: unset;
        }
    }
    
`


const Text = styled.p`
    font-weight: 500;
    font-size: 20px;
    color: #fff;
    text-align: left;
`

const SocialList = styled.ul`
    display: flex;
    gap: 65px;
    @media ${theme.media.mobile} {
        gap: 57px;
    }
`

const SocialItem = styled.li`

`

const SocialIconLink = styled.a`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    color: #fffafa;
    
`

const BlueHighlight = styled.span`
    color: #0ACBBF;
    margin: 0 2px;
`

const SocialWrapper = styled.div`
    ${Text} {
        margin-bottom: 34px;
    }
    
    
`
const GitWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    ${Text} {
        margin-bottom: 19px;
    }
    
    svg {
        margin-right: 10px;
    }
`