import Navbar from './components/navbar/Navbar'
import Presentation from './components/presentation/Presentation'
import Responsiveness from './components/responsiveness/Responsiveness'
import Technologies from './components/technologies/Technologies';
import Footer from './components/footer/Footer'
import Contacts from './components/contacts/Contacts'
import Pricing from './components/pricing/Pricing';
import Portfolio from './components/portfolio/Portfolio';
import ScrollToTop from './scrollToTop';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path ="/" element={
            <div>
              <ScrollToTop/>
              <Navbar/>
              <Presentation/>
              <Responsiveness/>
              <Technologies/>
              <Footer/>
            </div>
          } />
          <Route exact path ="/portfolio" element={
            <div>
              <ScrollToTop/>
              <Navbar/>
              <Portfolio/>
              <Footer/>
            </div>
          } />
          <Route exact path ="/pricing" element={
            <div>
              <ScrollToTop/>
              <Navbar/>
              <Pricing/>
              <Footer/>
            </div>
          } />
          <Route exact path ="/contact" element={
            <div>
              <ScrollToTop/>
              <Navbar/>
              <Contacts/>
              <Footer/>
            </div>
          } />
        </Routes>
    </div>

  );
}

export default App;
