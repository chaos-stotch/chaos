import Navbar from './components/navbar/Navbar'
import Presentation from './components/presentation/Presentation'
import Responsiveness from './components/responsiveness/Responsiveness'
import Technologies from './components/technologies/Technologies';
import Footer from './components/footer/Footer'
import WebPresentation from './components/webPresentation/WebPresentation';
import SeoPresentation from './components/seoPresentation/SeoPresentation';
import Contacts from './components/contacts/Contacts'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ="/" element={
          <div className="App">
            <Navbar/>
            <Presentation/>
            <Responsiveness/>
            <Technologies/>
            <Footer/>
          </div>
        } />
        <Route exact path ="/services" element={
          <div className='Services'>
            <Navbar/>
            <WebPresentation/>
            <SeoPresentation/>
            <Footer/>
          </div>
        } />
        <Route exact path ="/contact" element={
          <div className='Services'>
            <Navbar/>
            <Contacts/>
            <Footer/>
          </div>
        } />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
