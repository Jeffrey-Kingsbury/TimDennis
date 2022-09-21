import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';
import bg from '../images/Condo_Winter_1.jpg';

const Splash = () => {
    const { lang } = useContext(userContext);

    const line1 = lang === "FR" ? "PARCE QUE LA NATURE" : "BECAUSE NATURE";
    const line2 = lang === "FR" ? "EST NOTRE VRAIE NATURE" : "IS OUR TRUE NATURE";
    const line3 = lang === "FR" ? "Lancement octobre 2022" : "Launching october 2022";

    return (
        <Wrapper>
            <Banner>
                <BannerText>{line1}</BannerText>
                <BannerText>{line2}</BannerText>
                <BannerTextDate>{line3}</BannerTextDate>
                <Register>PRESALE REGISTRATION</Register>
                <Delivery>DELIVERY APRIL 2024</Delivery>
            </Banner>
        </Wrapper>
    )
};

const Wrapper = styled.div`
width: 100%;
height: calc(100% + 6rem);
display: flex;
align-items: center;
justify-content: center;
position: relative;
overflow: hidden;
background-image: url(${bg});
background-position: bottom;
background-size: cover;
`;

const Banner = styled.div`
height: 200px;
width: 100%;
background: linear-gradient(90deg,#00051400,var(--dark), #00051400);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
position: relative;
`;

const BannerText = styled.p`
font-family: "independant";
font-size: xx-large;
`;
const BannerTextDate = styled.p`
font-family: "ginger";
font-size: x-large;
margin-top: 1rem;
`;


const Register = styled.button`
width: 250px;
height: 60px;
border-radius: 25px;
background-color: var( --blue2);
color:white;
position: absolute;
bottom: -30px;
left: 30%;
border: 0;
cursor: pointer;
box-shadow: 0 0 15px 2px black;
`;

const Delivery = styled.button`
width: 250px;
height: 60px;
border-radius: 25px;
background-color: var( --blue2);
color:white;
position: absolute;
bottom: -30px;
right: 30%;
border: 0;
cursor: pointer;
box-shadow: 0 0 15px 2px black;
`;
/*  font-family: "independant"; */
/*  font-family: "ginger"; */
// @media only screen and (max-width: 900px) {
//         display:none;
//     }


export default Splash;