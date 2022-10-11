import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import Navbar from './layouts/Navbar';
// import SummaryNavbar from './layouts/SummaryNavbar';

import {Navbar, SummaryNavbar, Hero, HighPoint, Coins, Subscription, Footer, FooterOne} from './components'

function App() {
  return (
    <div className="font-barlow dark:bg-dark dark:text-white bg-white text-dark ">
      <Router>
        <Navbar />
        <SummaryNavbar />
        <Hero />
        <HighPoint />
        <Coins />
        <Subscription />
        <FooterOne />
        <Footer />
        {/* <Routes> */}
          {/* <Route exact path='/' element={<Navbar/>}  /> */}
        {/* </Routes> */}
      </Router>
    </div>
  );
}

export default App;
