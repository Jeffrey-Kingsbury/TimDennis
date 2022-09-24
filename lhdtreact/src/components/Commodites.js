import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';

const Commodites = () =>{
    const { lang, setLang } = useContext(userContext);
    return (<Wrapper id="commodites">
                        {lang === "FR" &&
                            <DetailsUl>
                                <DetailsLi>Remontée méchanique privée</DetailsLi>
                                <DetailsLi>Piste de ski privé en liaisons directes avec la Station Mont -Tremblant</DetailsLi>
                                <DetailsLi>Sentiers de randonnée et de vélo de montagne dans le Parc National de Mont-Tremblant</DetailsLi>
                                <DetailsLi>Maison dans les arbres avec foyer extérieur et espaces de vie</DetailsLi>
                                <DetailsLi>Spa "expérience thermale"</DetailsLi>
                                <DetailsLi>Piscine extérieure</DetailsLi>
                                <DetailsLi>Navette avec connexion au village situé sur le Versant sud</DetailsLi>
                                <DetailsLi>Accès à la gondole reliant le village situé sur le Versant sud</DetailsLi>
                                <DetailsLi>Les propriétaires sont éligibles pour faire partie du "Club des Montagnards" </DetailsLi>
                            </DetailsUl>
                        }

                        {lang !== "FR" &&
                            <DetailsUl>
                                <DetailsLi>Private Doppelmayr ski lift</DetailsLi>
                                <DetailsLi>Private Ski run with direct connection to Station Mont-Tremblant</DetailsLi>
                                <DetailsLi>Hiking & Mountain bike trails in Mont Tremblant National Park</DetailsLi>
                                <DetailsLi>Shuttle with connection to South Side Village</DetailsLi>
                                <DetailsLi>Tree House with outdoor firepits and living spaces</DetailsLi>
                                <DetailsLi>Thermal Spa Experience</DetailsLi>
                                <DetailsLi>Outdoor Pool</DetailsLi>
                                <DetailsLi>Gondola Access</DetailsLi>
                                <DetailsLi>Owners are eligible to be part of the "Club des Montagnards"</DetailsLi>
                            </DetailsUl>
                        }
    </Wrapper>)
}

const Wrapper = styled.div`
padding: 3rem 0;
background-color: var(--blue2);
width: 100%;
height: 300px;

    @media only screen and (max-width: 900px) {
        height: auto;
    }
`;

const DetailsUl = styled.ul`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;

    @media only screen and (max-width: 900px) {
        flex-wrap: nowrap;
    }
`;
const DetailsLi = styled.li`
height:30%;
max-width: 30%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
list-style: decimal;
color: var(--light);
font-family: "Ginger";
font-size: larger;

    @media only screen and (max-width: 900px) {
        flex-wrap: nowrap;
        max-width: 95%;
        height: auto;
        margin: 1rem auto;
    }
`;
export default Commodites;