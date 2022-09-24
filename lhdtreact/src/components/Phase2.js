import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';
import bg1 from '../images/SFH_Winter_15.jpg';
import FadeIn from 'react-fade-in';

const Phase1 = () => {
    const { lang, setLang } = useContext(userContext);

    return (
        <Wrapper id="phase2">
            <LargeCont>
                <Title>PHASE 2</Title>
            </LargeCont>

            <LargerCont>

                <ImageContainer1></ImageContainer1>
                <DataContainer>


                    <Subtitle>
                        {lang === "FR" && "15 Maisons en montagne"}
                        {lang !== "FR" && "15 Mountain Homes"}
                    </Subtitle>

                    {lang === "FR" &&
                            <DetailsUl>
                                <DetailsLi>• 3-4 Chambres à coucher</DetailsLi>
                                <DetailsLi>• Air habitable 2462-3589 pieds carrés</DetailsLi>
                                <DetailsLi>• Spas, cuisine extérieurs complète, chauffages extérieurs, local à skis, séchoirs à chaussures</DetailsLi>
                                <DetailsLi>• Paysagement inclus</DetailsLi>
                            </DetailsUl>
                        }

                        {lang !== "FR" &&
                            <DetailsUl>
                                <DetailsLi>• 3-4 bedrooms</DetailsLi>
                                <DetailsLi>• Livable area 2462-3589 sqft</DetailsLi>
                                <DetailsLi>• Hot Tubs, Complete outdoor kitchen, Outdoor heaters, Ski Locker, Boot Dryers</DetailsLi>
                                <DetailsLi>• Landscaping included</DetailsLi>
                            </DetailsUl>
                        }
                </DataContainer>
            </LargerCont>
<Splitter />
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
text-align: center;
margin: 1rem 0;
font-size: xx-large;
text-decoration: underline;
font-family: "independant";
color: var(dark);
@media only screen and (max-width: 900px) {
        background-color:var(--dark-90);
        color: var(--light);
        padding: 1rem 0;
        width: 100%;
    } 
`;

const DataContainer = styled.div`
height: 100%;
width: 50%;
background: linear-gradient(var(--light),var(--blue1));
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    @media only screen and (max-width: 900px) {
        background:0;
        background-image: url(${bg1});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
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
        display: none;
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
text-align: center;
margin: 1rem auto;
font-size: larger;

`;

export default Phase1;