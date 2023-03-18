import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { HomePage, Auth, ProfilePage } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/profile/:username' element={<ProfilePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;