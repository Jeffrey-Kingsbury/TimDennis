import styled from "styled-components";
import logoSrc from "../images/Logo/White/LHDT_Logo_White.png";
import { useContext } from 'react';
import { userContext } from '../UserContext';

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
            <NavItem>
                    {lang === "FR" ? "A PROPOS" : "ABOUT"}
                </NavItem>
                <NavItem>
                    PHASE 1
                </NavItem>
                <NavItem>
                    PHASE 2
                </NavItem>
                <NavItem>
                    {lang === "FR" ? "COMMODITES" : "AMENITIES"}
                </NavItem>
                <NavItem>
                    CONTACT
                </NavItem>
                <NavItem onClick={() => { langChange() }}>{lang}</NavItem>
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
text-rendering: optimizeLegibility;

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
font-family: "independant";
height: 70%;
width: 70%;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 900px) {
        display:none

    }
`;

const NavItem = styled.li`
color: var(--light);
text-decoration: none;
list-style: none;
margin: 0 2rem;
cursor: pointer;
transition: all .1s ease;

    &:hover{    
        transform: translateZ(0) scale(1.03);
    }

    &:active{    
        transform: translateZ(0) scale(.97);
    }   
`;

const LogoWrap =styled.span`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


const LangButton = styled.li`
color: var(--light);
text-decoration: none;
list-style: none;
margin: 0 2rem;
cursor: pointer;
transition: all .1s ease;

    &:hover{    
        transform: translateZ(0) scale(1.03);
    }

    &:active{    
        transform: translateZ(0) scale(.97);
    }   
@media only screen and (max-width: 900px) {
        display:none;
    }
`;

export default Header;