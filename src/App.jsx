import Navbar from './components/navbar/Navbar'
import Presentation from './components/presentation/Presentation'
import Responsiveness from './components/responsiveness/Responsiveness'
import Technologies from './components/technologies/Technologies';
import Footer from './components/footer/Footer'
import WebPresentation from './components/webPresentation/WebPresentation';
import SeoPresentation from './components/seoPresentation/SeoPresentation';
import Contacts from './components/contacts/Contacts'

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
              <Navbar/>
              <Presentation/>
              <Responsiveness/>
              <Technologies/>
              <Footer/>
            </div>
          } />
          <Route exact path ="/services" element={
            <div>
              <Navbar/>
              <WebPresentation/>
              <SeoPresentation/>
              <Footer/>
            </div>
          } />
          <Route exact path ="/contact" element={
            <div>
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
