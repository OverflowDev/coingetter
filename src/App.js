import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import {Navbar, SummaryNavbar, Hero, HighPoint, Coins, Coin, Subscription, Footer, FooterOne} from './components'
import {Home, Navbar, SummaryNavbar, Coin, Footer, FooterOne} from './components'

import { CoinProvider } from './context/CoinContext';

function App() {
  return (
      <CoinProvider>
        <div className=" ">
          <Router>
            <Navbar />
            <SummaryNavbar />
            <Routes>
              <Route exact path='/' element={<Home/>}  />
              <Route exact path='/coin/:id' element={<Coin/>}  />
            </Routes>
            {/* <FooterOne /> */}
            <Footer />
            {/* <Hero />
            <HighPoint />
            <Coins />
            <Subscription />
            <Footer /> */}
          </Router>
        </div>
      </CoinProvider>
  );
}

export default App;
