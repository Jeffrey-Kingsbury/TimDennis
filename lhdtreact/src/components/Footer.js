import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';

const Footer = () => { 
    const { lang } = useContext(userContext);

return(
<Wrapper>
    <Kingsbury href="https://www.linkedin.com/in/kingsburyj/">© 2022 Kingsbury Designs</Kingsbury>
    <Disclosure>
        {lang === "FR" && "Tim Dennis agit en tant qu'agent/courtier pour les acheteurs dans le projet l'Hymne des Trembles et ne représente ou n'agit en aucun cas en tant qu'agent/courtier pour Brivia Group, le vendeur/développeur du projet ni pour aucune entité affiliée ou liée à celui-ci."}
        {lang != "FR" && "Tim Dennis is acting as a buyer-broker of condo units in the l'Hymne des Trembles project and in no manner represents or is acting as an agent/broker for Brivia Group, the seller/developer of the project nor for any affiliated or related entity thereto."}
    </Disclosure>
</Wrapper>)
};

const Wrapper = styled.div`
width: 100vw;
height: 8rem;
background-color: black;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
color: var(--light);
`;

const Kingsbury = styled.a`
font-size: small;
text-decoration: none;
color: var(--light);
`;

const Disclosure = styled.p`
width: 70%;
text-align: center;
font-size: small;
`;
export default Footer;