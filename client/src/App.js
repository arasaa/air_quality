
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './components/screens/hom/Home';
import Showing from './components/screens/showingData/Showing';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/screens/login.js/Login';
import Registration from './components/screens/registration/Registration';
import Community from './components/screens/community/Community';
import About from './components/screens/about/About';


function App() {
  return (
   <BrowserRouter>
    <Header />
    <main>
      <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/showing" element={<Showing />} />
      <Route path="/community" element={<Community />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </main>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
