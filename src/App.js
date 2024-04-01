import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Menu.js' ;
import Hero from './components/Hero.js';
import Counters from './components/Counters.js';
import Partners from './components/Partners.js';
import Testimonials from './components/Testimonials.js';
import FirstChoice from './components/FirstChoice.js';
import LearnMore from './components/LearnMore.js';
import CallToAction from './components/CallToAction.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">

          <Menu />
          <Hero/>
          <Counters />
          <Partners />
          <Testimonials />
          <FirstChoice />
          <LearnMore />
          <CallToAction />
          <Footer />

    </div>
  );
}

export default App;
