
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/screens/hom/Home';
import Showing from './components/screens/showingData/Showing';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Community from './components/screens/community-form/Community-form';
import Login from './components/screens/login.js/Login';
import Registration from './components/screens/registration/Registration';


function App() {
  return (
   <BrowserRouter>
    <Header />
    <main>
      <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/showing" element={<Showing />} />
      <Route path="/communty" element={<Community />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
    </main>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
