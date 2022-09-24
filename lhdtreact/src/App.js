import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import Splash from './components/Splash';
import Contact from './components/Contact';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Footer from './components/Footer';
import Commodites from './components/Commodites';
import Blurb from './components/Blurb';

function App() {

  return (<>
    <Header />
    <Wrapper>
      <Splash />
      <Blurb />
      <Phase1 />
      <Phase2 />
      <Commodites />
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
