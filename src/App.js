import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import Navbar from './layouts/Navbar';
// import SummaryNavbar from './layouts/SummaryNavbar';

import {Navbar, SummaryNavbar, Hero, HighPoint} from './components'

function App() {
  return (
    <div className="font-barlow dark:bg-dark dark:text-white bg-white text-dark h-screen">
      <Router>
        <Navbar />
        <SummaryNavbar />
        <Hero />
        <HighPoint />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
