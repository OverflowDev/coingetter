import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Navbar, SummaryNavbar, Hero, HighPoint, Coins, Subscription, Footer, FooterOne} from './components'

import { CoinProvider } from './context/CoinContext';

function App() {
  return (
      <CoinProvider>
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
      </CoinProvider>
  );
}

export default App;
