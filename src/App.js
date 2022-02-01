import React, { useEffect } from 'react';
import { useDarkMode } from './useDarkMode';
import Stars from './components/stars';
import Sunmoon from './components/sunmoon';
import Togglebtn from './components/togglebtn';
import Deck from './components/slideAnimation';
import Me from './components/me';
import Aos from "aos";
import "aos/dist/aos.css";
import Section2 from './components/Section2';
import Contact from './components/Contact';
// import TechBox from './components/techBox';

function App() {
  const [theme, toggleMode] = useDarkMode()

  useEffect(()=> {
    Aos.init({ duration: 1000})
    },[]);

  return (
    <div>
    <section className={`${theme ? "home sky" : "home"}`}>
    <Sunmoon />
    <Stars />
    <Togglebtn theme={theme} toggleMode={toggleMode}/>
    </section>
    <div className={`${theme ? "sec-2 sky" : "sec-2"}`}>
    <Me/>
    <div className="deckBox">
    <Deck data={"zoom-in"}/>
    </div>
    <Section2 />
    </div>
    <Contact theme={theme}/>
    </div>

    
  );
}

export default App;
