import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';
import bg1 from '../images/HDT_aerialshot_mood2.jpg';
import FadeIn from 'react-fade-in';

const Phase1 = () => {
    const { lang, setLang } = useContext(userContext);

    return (
        <Wrapper id="phase1">
            <LargeCont>
                <Title>PHASE 1</Title>

                <Subtitle>Maisons de ville et condos en montagne</Subtitle>
                <CircleWrapper>
                    <CircleLeft>
                        Maisons de ville en montagne
                        <CircleNum>28</CircleNum>
                    </CircleLeft>
                </CircleWrapper>
{/* 
                <CircleWrapper>
                    <CircleRight></CircleRight>
                </CircleWrapper> */}
            </LargeCont>

            <LargerCont>
                <DataContainer>

                </DataContainer>
            <CircleWrapper>
                    <CircleRight>
                    Condos en montagne
                    <CircleNum>36</CircleNum>

                    </CircleRight>
                </CircleWrapper>
            </LargerCont>
        </Wrapper>
    )
};

const Wrapper = styled.div`
height: 200vh;
width: 100vw;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;

`;

const LargeCont = styled.div`
width: 100%;
height: 15vh;
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
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url(${bg1});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

const Title = styled.h1`
font-size: 3rem;
`;

const Subtitle = styled.h3`
text-decoration: underline;
`;

const CircleWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
z-index: 9;
`;

const CircleNum = styled.p`
    font-size: larger;
`;

const CircleLeft = styled.div`
border-radius: 50%;
height: 10rem;
width: 10rem;
background-color: var(--blue3);
box-shadow: 0 5px 8px 2px rgba(0,0,0,.4);
position: absolute;
bottom: -5rem;
left: 25%;
text-align: center;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const CircleRight = styled.div`
border-radius: 50%;
height: 10rem;
width: 10rem;
background-color: var(--blue3);
box-shadow: 0 5px 8px 2px rgba(0,0,0,.4);
position: absolute;
bottom: -5rem;
right: 25%;
text-align: center;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const DataContainer = styled.div`
height: 100%;
width: 50%;
background-color: rgba(0,0,0,.4);
`;
export default Phase1;