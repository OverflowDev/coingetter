import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import { useState } from 'react';

// import {Navbar, SummaryNavbar, Hero, HighPoint, Coins, Coin, Subscription, Footer, FooterOne} from './components'
import {Home, Navbar, Coin, Footer, Login, Register, ErrorPage} from './components'

import { CoinProvider } from './context/CoinContext';

function App() {

  const [showNav, setShowNav] = useState(true)
  const [showFooter, setShowFooter] = useState(true)

  const pathname = window.location.pathname

  return (
      <CoinProvider>
        <div className=" ">
          <Router>
            {/* <Navbar /> */}
            <Routes>
              <Route exact path='/' element={<Home/>}  />
              <Route exact path='/coin/:id' element={<Coin/>}  />

              <Route exact path='/login' element={<Login/>} />
              <Route exact path='/sign-up' element={<Register/>} />

              <Route exact path='/*' element={<ErrorPage/>}   />
            </Routes>

            {/* <Footer /> */}
          </Router>
        </div>
      </CoinProvider>
  );
}

export default App;
