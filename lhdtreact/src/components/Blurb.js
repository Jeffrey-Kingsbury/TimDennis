import styled from "styled-components";
import { useContext } from 'react';
import { userContext } from '../UserContext';

const Blurb = () => {
    const { lang, setLang } = useContext(userContext);
    return (<Wrapper>

        {lang === "FR" && <>14 Hectares
            6 Phases
            500 unités</>}
        {lang !== "FR" && <>14 Hectares
            6 Phases
            500 Residences</>}
    </Wrapper>)
}

const Wrapper = styled.div`
padding: 3rem 0;
background-color: var(--blue1);
width: 100%;

`;
export default Blurb;