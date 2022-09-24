import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';
import bg1 from '../images/Condo_Winter_1.jpg';
import bg2 from '../images/MDV_Winter_1.jpg';
import FadeIn from 'react-fade-in';

const Phase1 = () => {
    const { lang, setLang } = useContext(userContext);

    return (
        <Wrapper id="phase1">
            <LargeCont>
                <Title>PHASE 1</Title>
            </LargeCont>

            <LargerCont>
                <ImageContainer1></ImageContainer1>
                <DataContainer>

                    <Subtitle>
                        {lang === "FR" && "28 Maisons de ville en montagne"}
                        {lang !== "FR" && "28 Mountain Townhomes"}
                    </Subtitle>

                    {lang === "FR" &&
                            <DetailsUl>
                                <DetailsLi>3 Chambres à coucher</DetailsLi>
                                <DetailsLi>Aire habitable 1698-1710 pieds carrés</DetailsLi>
                                <DetailsLi>Foyer au gaz</DetailsLi>
                                <DetailsLi>Spa "expérience thermale" chauffages extérieurs, foyers, rangement pour skis, séchoirs à chaussures</DetailsLi>
                            </DetailsUl>
                        }

                        {lang !== "FR" &&
                            <DetailsUl>
                                <DetailsLi>3 Bedrooms</DetailsLi>
                                <DetailsLi>Livable area: 1698-1710 sqft</DetailsLi>
                                <DetailsLi>Gas Fireplace</DetailsLi>
                                <DetailsLi>Spa "thermal experience", Outdoor Heater, Firepits, Ski Locker, Boot Dryer</DetailsLi>
                            </DetailsUl>
                        }
                </DataContainer>
            </LargerCont>

            <LargerCont>
                <DataContainer>
                    <Subtitle>
                        {lang === "FR" && "36 Condos en montagne"}
                        {lang !== "FR" && "36 Mountain Condos"}
                    </Subtitle>

                    <Details>
                        {lang === "FR" &&
                            <DetailsUl>
                                <DetailsLi>2-3 Chambres à coucher</DetailsLi>
                                <DetailsLi>Air habitable 1256-1600 pieds carrés</DetailsLi>
                                <DetailsLi>Foyer</DetailsLi>
                                <DetailsLi>Balcons, chauffages extérieurs, rangements pour skis, séchoirs à chaussures</DetailsLi>
                            </DetailsUl>
                        }

                        {lang !== "FR" &&
                            <DetailsUl>
                                <DetailsLi>2-3 Bedrooms</DetailsLi>
                                <DetailsLi>Livable area 1256-1600 sqft</DetailsLi>
                                <DetailsLi>Fireplace</DetailsLi>
                                <DetailsLi>Balconies, Outdoor Heaters, Boot Dryers, Ski Locker</DetailsLi>
                            </DetailsUl>
                        }
                    </Details>
                </DataContainer>
                <ImageContainer2></ImageContainer2>
            </LargerCont>
        </Wrapper>
    )
};

const Wrapper = styled.div`
width: 100vw;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;

`;

const LargeCont = styled.div`
width: 100%;
height: 3rem;
background-color: var(--dark);
color: var(--light);
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const LargerCont = styled.div`
width: 100%;
height: 50vh;
background-color: aliceblue;
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const Title = styled.h1`
font-size: 3rem;
`;

const Subtitle = styled.h3`
text-decoration: underline;
`;

const DataContainer = styled.div`
height: 100%;
width: 50%;
background: linear-gradient(var(--light),var(--blue1));
`;

const ImageContainer1 = styled.div`
height: 100%;
width: 50%;
background-image: url(${bg1});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

const ImageContainer2 = styled.div`
height: 100%;
width: 50%;
background-image: url(${bg2});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

const Details = styled.p``;
const DetailsUl = styled.ul``;
const DetailsLi = styled.li``;
export default Phase1;