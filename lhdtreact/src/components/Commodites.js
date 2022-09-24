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

`;

const Details = styled.p``;
const DetailsUl = styled.ul``;
const DetailsLi = styled.li``;
export default Commodites;