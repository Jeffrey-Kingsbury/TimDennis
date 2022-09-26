import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';
import bg from '../images/Condo_Winter_1.jpg';
import FadeIn from 'react-fade-in';
const Splash = () => {
    const { lang } = useContext(userContext);

    const line1 = lang === "FR" ? "PARCE QUE LA NATURE" : "BECAUSE NATURE";
    const line2 = lang === "FR" ? "EST NOTRE VRAIE NATURE" : "IS OUR TRUE NATURE";
    const line3 = lang === "FR" ? "Lancement octobre 2022" : "Launching october 2022";

    return (
        <Wrapper>

            <Banner>
                <BannerText id="titleBanner">{line1}</BannerText>
                <BannerText>{line2}</BannerText>
                <BannerTextDate>{line3}</BannerTextDate>
                <Register href="#contact">
                    {lang != "FR" && <><p>PRESALE REGISTRATION</p> <p>DELIVERY APRIL 2024</p></>}
                    {lang === "FR" && <><p>PREVENTE | INSCRIPTION VIP</p> <p>LIVRAISON AVRIL 2024</p></>}
                </Register>
            <InfoBlurb>
                <InfoBlurbTitle>
                    {lang === "FR" && "Portant le projet de la plus grande envergure depuis l'investissement d'Intrawest Corporation au sein de la célèbre destination internationale de villégiature 4 saisons de Tremblant, YOO studio développé par Groupe Brivia, poursuit le développement du Versant Soleil de la montagne, avec une initiative sans précédent."}
                    {lang !== "FR" && "YOO studio developed by Brivia Group is bringing to live the largest project since Intrawest Corporation's investment in Tremblant's internationally celebrated four-season resort destination. Together, they are continuing the development of the mountain's Versant Soleil with an unprecedented project."}
                </InfoBlurbTitle>
                <InfoBlurbBody>
                    {lang === "FR" && "La gondole qui relie directement le Versant Soleil au mythique Village de Tremblant, lui-même longé par la promenade piétonnière jusqu'au Casino, permet un accès direct, rapide et sans voiture à tous les divertissements sportifs et culturels, tout l'année. Par ailleurs, notre dispositif \"ski-in/ski-out\" prévoit la création d'un accès privilégié aux pistes de la Station Mont-Tremblant via la remontée \"Le Soleil\"."}
                    {lang !== "FR" && "The gondola connecting Verant Soleil to the world-famous Tremblant Village, which is bordered by the pedestrian path leading to the casino, provides direct, easy and car-free access to all sports and cultural activities all year round. In addition, our ski lift offers exclusive ski-in/ski-out access to the slopes of the Mont-Tremblant resort. "}
                </InfoBlurbBody>
            </InfoBlurb>
            </Banner>
        </Wrapper>
    )
};

const Wrapper = styled.div`
width: 100%;
min-height: calc(100% + 6rem);
display: flex;
align-items: center;
justify-content: center;
position: relative;
overflow: hidden;
background-image: url(${bg});
background-position: bottom;
background-size: cover;
flex-direction: column;
box-shadow: 0px 3px 5px 2px rgba(0,0,0,0.4);
@media only screen and (max-width: 900px) {
justify-content:start;
align-items: center;
margin-top: 6rem;
font-family: "independant";
    }
`;

const Banner = styled.div`
width: 100%;
padding: 1rem 0;
background: linear-gradient(90deg,#00051400,var(--dark),var(--dark), #00051400);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
position: relative;
font-family: "independant";

    @media only screen and (max-width: 900px) {
        background: var(--dark);
    }
`;

const BannerText = styled.p`
font-size: xx-large;
width: 100%;
text-align: center;

&#titleBanner{
    margin-top: 1rem;
}
`;
const BannerTextDate = styled.p`
font-family: "ginger";
font-size: x-large;
margin-top: 1rem;
text-align: center;
`;


const Register = styled.a`
width: 350px;
height: 100px;
border-radius: 25px;
background-color: var( --blue2);
color:white;
border: 0;
cursor: pointer;
box-shadow: 0 0 15px 2px black;
font-family: "Ginger";
transition: all .1s ease;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
text-decoration: none;
font-size: medium;
user-select: none;

margin: 2rem 0;
    &:hover{    
        transform: translateZ(0) scale(1.03);
    }

    &:active{    
        transform: translateZ(0) scale(.97);
    }   

`;

const InfoBlurb = styled.div`
width: 100%;
height: auto;
min-height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: "ginger";
@media only screen and (max-width: 900px) {
    background: linear-gradient(var(--dark),var(--dark), #00051400);
    height: 100%;
    }
`;

const InfoBlurbTitle = styled.h1`
width: 60%;
max-width: 700px;
color: var(--light);
font-weight: bold;
font-family: "ginger";
font-size: x-large;
text-align: center;
@media only screen and (max-width: 900px) {
        width:80%;
    }
`;

const InfoBlurbBody = styled.p`
width: 65%;
max-width: 750px;
margin-top: 2rem;
color: var(--light);
font-size: large;
text-align: center;
    @media only screen and (max-width: 900px) {
        width:95%;
        text-shadow: 0 0 3px black,0 0 3px black,0 0 3px black,0 0 3px black,0 0 3px black;
    }
`;
/*  font-family: "independant"; */
/*  font-family: "ginger"; */
// @media only screen and (max-width: 900px) {
//         display:none;
//     }


export default Splash;