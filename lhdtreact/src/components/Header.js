import styled from "styled-components";
import logoSrc from "../images/Logo/White/LHDT_Logo_White.png";
import { useContext } from 'react';
import { userContext } from '../UserContext';
import FadeIn from 'react-fade-in';

const Header = () => {
    const { lang, setLang } = useContext(userContext);

    const langChange = () => {
        lang === "FR" ? setLang("EN") : setLang("FR");
    };

    return (
        <Wrapper>
            <LogoWrap>
                <Logo src={logoSrc} alt="L'hymne des trembles logo" draggable={false} />
                <Nav>
                    <FadeIn delay={400} transitionDuration={900}>
                        <NavItem href="#phase1">
                            PHASE 1
                        </NavItem>
                    </FadeIn>
                    <FadeIn delay={600} transitionDuration={900}>
                        <NavItem href="#phase2">
                            PHASE 2
                        </NavItem>
                    </FadeIn>

                    <FadeIn delay={800} transitionDuration={900}>
                        <NavItem href="#commodites">
                            {lang === "FR" ? "COMMODITES" : "AMENITIES"}
                        </NavItem>

                    </FadeIn>

                    <FadeIn delay={1000} transitionDuration={900}>

                        <NavItem href="#contact">
                            CONTACT
                        </NavItem>
                    </FadeIn>

                    <FadeIn delay={1200} transitionDuration={900}>

                        <NavItem onClick={() => { langChange() }}>{lang === "FR" ? "EN" : "FR"}</NavItem>
                    </FadeIn>
                </Nav>
            </LogoWrap>
        </Wrapper>
    )
};

const Wrapper = styled.div`
width: 100vw;
height: 6rem;
display: flex;
align-items: center;
user-select: none;
background: linear-gradient(90deg,#00051400,var(--dark),var(--dark),var(--dark),var(--dark), #00051400);
position: sticky;
margin-bottom: -6rem;
top: 0;
z-index: 999;
box-shadow: 0px 3px 5px 2px rgba(0,0,0,0.4);

@media only screen and (max-width: 900px) {
        background: var(--dark);
    }

`;

const Logo = styled.img`
    max-height: 30%;
    margin:.5rem 0;

    @media only screen and (max-width: 900px) {
        max-width: 75%;

    }
`;

const Nav = styled.ul`
height: 70%;
min-width: 70%;
max-width: 100%;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 900px) {
    width:100%;
    font-size: small;
    justify-content: space-around;
    }
`;

const NavItem = styled.a`
color: var(--light);
text-decoration: none;
list-style: none;
margin: 0 2rem;
cursor: pointer;
transition: all .1s ease;
width: auto;
word-wrap:normal;
text-align: center;

    &:hover{    
        transform: translateZ(0) scale(1.03);
    }

    &:active{    
        transform: translateZ(0) scale(.97);
    }   

    @media only screen and (max-width: 900px) {
    margin: 1px;
    }
`;

const LogoWrap = styled.span`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default Header;