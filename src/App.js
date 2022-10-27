import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './assets/styles.css'
import { EditLegend } from './Components/EditLegend';
import Legends from './Pages/Legends';
import Home from './Pages/Home';
import SingleLegends from './Pages/SingleLegend';
import NavBar from './Components/NavBar';
import AdminEdit from './Pages/AdminPage';
import AboutMe from './Pages/AboutMe';
import ScrollToTop from './Components/ScrollTop';
import AddLegend from './Pages/AddLegend';
import Test from './Pages/Sandbox';
import Footer from './Components/Footer';





function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/legends' element={<Legends />}/>
      <Route path='/legend-info' element={<SingleLegends />} />
      <Route path='/admin' element={<AdminEdit/>} />
      <Route path='/about-me' element={<AboutMe/>} />
      <Route path='legend-edit' element={<EditLegend />} />
      <Route path='/addlegend' element={<AddLegend />} />
      <Route path='/sandbox' element={<Test />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
