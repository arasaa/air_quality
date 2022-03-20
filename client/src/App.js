
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './components/screens/hom/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/screens/login/Login';
import Registration from './components/screens/registration/Registration';
import Community from './components/screens/Community/Community';
import About from './components/screens/about/About';
import Share from './components/screens/Community/Share';
import Api from './components/map-api/Api';
import Fetch from './components/map-api/Fetch';
//import RenderModal from './components/screens/Community/modal/RenderModal';
//import Modal from './components/screens/Community/modal/Modal';


function App() {
  return (
   <BrowserRouter>
    <Header />
    <main>
      <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/community" element={<Community />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/about" element={<About />} />
      <Route path="/share" element={<Share />} />
      <Route path="/api" element={<Api />} />  
      <Route path="/fetch" element={<Fetch />} />
    </Routes>
    </main>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
