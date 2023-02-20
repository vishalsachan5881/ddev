import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Nav from './components/Nav/nav'
import Footer from './components/Footer';
import BasicMenu from './components/Nav/nav';
import navData from './components/Nav/navaData';
// import Overview from './Pages/Overview/Overview/Overview';
import PressRelease from '/Users/sachanv/Desktop/ddev/zenith/src/Pages/Overview/PressRelease/pressRelease.jsx'
import FAQ from '/Users/sachanv/Desktop/ddev/zenith/src/Pages/Overview/Faq/faq.jsx'
// import Utility from './Pages/Utilities/Utilities';
// import Card from './components/Card';

import Utility from './Pages/Utilities/Utilities';
import Overview from './Pages/Overview/Overview/Overview';
import AutoTableOnboarding from './Pages/AutoTableOnboarding/AutoTableOnboarding';
function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>

        <div className='zenith-header'>
          <div className='zenith-home-Heading'>Zenith</div>
          <div className='zenith-header-subtitle'>Data and Analytics Platform</div>
          <BasicMenu details = {navData}/>
        </div>
        <Routes>
          <Route path='/' element={<Overview/>}></Route>
          <Route path='/RoadMap' element={<Overview />}></Route>
          <Route path='/FAQ' element={<FAQ/>}></Route>
          <Route path='/PressRelease' element={<PressRelease />}></Route>
          <Route path='/Customer' element={<h1>ye hai customer page</h1>}></Route>
          <Route path='/Utility' element={<Utility/>}></Route>
          <Route path='/AutoTableOnboarding' element={<AutoTableOnboarding/>}></Route>

        </Routes>

      </BrowserRouter>
<pressRelease/>
      <Footer />
    </div>
  )
}

export default App;