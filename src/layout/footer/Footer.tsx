import styled from "styled-components";
import wave from "../../assets/images/svg/wave.svg"
import {Icon} from "../../components/icon/Icon.tsx";
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
export const Footer = () => {
    return (
        <StyledFooter>
                <Container>
                    <FlexWrapper justify="space-between">
                        <div>
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
                        </div>
                        <div>
                            <Text>More projects I’ve worked on</Text>
                            <SocialIconLink>
                                <Icon height={"30"} width={"30"} viewBox={"0 0 30 30"} iconId={"github"} />
                                @<BlueHighlight>john-doe</BlueHighlight> on github
                            </SocialIconLink>
                        </div>
                    </FlexWrapper>
                </Container>
        </StyledFooter>
    );
};



const StyledFooter = styled.footer`
    background: ${theme.colors.secondaryBg};
    background-image: url("${wave}");
    background-repeat: no-repeat;
    background-size: 100% 444px;
    background-size: cover;
    min-height: 444px;
    //max-width: 1440px;
    display: flex;
    align-items: center;
`

const Text = styled.p`
    font-weight: 500;
    font-size: 20px;
    color: #fff;
`

const SocialList = styled.ul`
    display: flex;
    gap: 65px;
`

const SocialItem = styled.li`

`

const SocialIconLink = styled.a`

`

const BlueHighlight = styled.span`
    color: #0ACBBF;
`