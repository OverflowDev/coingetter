import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import Navbar from './layouts/Navbar';
// import SummaryNavbar from './layouts/SummaryNavbar';

import {Navbar, SummaryNavbar, Hero, HighPoint, Coins} from './components'

function App() {
  return (
    <div className="font-barlow dark:bg-dark dark:text-white bg-white text-dark ">
      <Router>
        <Navbar />
        <SummaryNavbar />
        <Hero />
        <HighPoint />
        <Coins />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
