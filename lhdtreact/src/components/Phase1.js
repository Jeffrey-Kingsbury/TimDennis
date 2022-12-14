import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';
import bg1 from '../images/Condo_Winter_1.jpg';
import bg2 from '../images/MDV_Winter_1.jpg';

const Phase1 = () => {
    const { lang } = useContext(userContext);

    return (
        <Wrapper id="phase1">
            <LargeCont>
                <Title>PHASE 1</Title>
            </LargeCont>

            <LargerCont>
                <ImageContainer1 />
                <DataContainer1>

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
                </DataContainer1>
            </LargerCont>

            <Splitter />

            <LargerCont id="SecondCont">
                <DataContainer2>
                    <Subtitle>
                        {lang === "FR" && "36 Condos en montagne"}
                        {lang !== "FR" && "36 Mountain Condos"}
                    </Subtitle>

                    {lang === "FR" &&
                        <DetailsUl>
                            <DetailsLi>2-3 Chambres à coucher</DetailsLi>
                            <DetailsLi>Aire habitable 1256-1600 pieds carrés</DetailsLi>
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
                </DataContainer2>
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
@media only screen and (max-width: 900px) {
    background-color: var(--blue3);
    } 
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
@media only screen and (max-width: 900px) {
height: 100vh;
flex-direction: column;
    &#SecondCont{
        flex-direction: column-reverse;
    }
    } 
`;

const Title = styled.h1`
font-size: 3rem;
font-family: "independant";
`;

const Subtitle = styled.h3`
text-align: center;
margin: 1rem 0;
font-size: xx-large;
text-decoration: underline;
font-family: "independant";
color: var(dark);

@media only screen and (max-width: 900px) {
        color: var(--light);
        padding: 1rem 0;
        width: 100%;
    } 
`;

const DataContainer1 = styled.div`
height: 100%;
width: 50%;
background: linear-gradient(var(--light),var(--blue1));
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media only screen and (max-width: 900px) {
        background:var(--dark);
        width: 100%;
    }   
`;

const DataContainer2 = styled.div`
height: 100%;
width: 50%;
background: linear-gradient(var(--light),var(--blue1));
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    @media only screen and (max-width: 900px) {
        background:var(--dark);
        width: 100%;
    }  
`;

const ImageContainer1 = styled.div`
height: 100%;
width: 50%;
background-image: url(${bg1});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
box-shadow: 3px 0px 5px 2px rgba(0,0,0,0.4);
z-index: 9;
@media only screen and (max-width: 900px) { 
    width: 100%;
    }  
`;

const ImageContainer2 = styled.div`
height: 100%;
width: 50%;
background-image: url(${bg2});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
box-shadow: -3px 0px 5px 2px rgba(0,0,0,0.4);
z-index: 9;
@media only screen and (max-width: 900px) { 
    width: 100%;
    }  
`;

const Splitter = styled.div`
width: 100vw;
height: .5rem;
background-color: var(--dark);
`;


const DetailsUl = styled.ul`
@media only screen and (max-width: 900px) {
        background-color:var(--dark-90);
        color: var(--light);
        width: 100%;
    } 
`;

const DetailsLi = styled.li`
max-width: 50%;
margin: 1rem auto;
font-size: larger;
font-family: "Ginger";

`;

export default Phase1;