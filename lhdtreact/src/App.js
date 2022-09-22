import './App.css';
import { useContext } from 'react';
import { userContext } from './UserContext';
import Header from './components/Header';
import styled from 'styled-components';
import Splash from './components/Splash';
import Contact from './components/Contact';
import Phase1 from './components/Phase1';
import Footer from './components/Footer';

function App() {
  const { lang } = useContext(userContext);

  return (<>
    <Header />
    <Wrapper>
      <Splash />
      <Phase1 />
      <Contact />
      <Footer />
    </Wrapper>
  </>
  );
}

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
position: relative;
text-rendering: optimizeLegibility;

`;


export default App;
