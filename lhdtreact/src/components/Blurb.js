import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';

const Blurb = () => {
    const { lang } = useContext(userContext);
    return (<Wrapper>

        {lang === "FR" &&
            <>
                <P>14 Hectares</P>
                <P>6 Phases</P>
                <P>500 unités</P>
            </>
        }
        {lang !== "FR" &&
            <>
                <P>14 Hectares</P>
                <P>6 Phases</P>
                <P>500 Residences</P>
            </>
        }
    </Wrapper>)
}

const Wrapper = styled.div`
padding: 3rem 0;
background-color: var(--blue2);
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;

const P = styled.p`
user-select: none;
text-shadow: 2px 2px 1px rgba(0,0,0,0.3);
font-size: x-large;
font-family: "Ginger";
color: var(--light);

@media only screen and (max-width: 900px) {
    font-size: large;
    }   
`;


export default Blurb;