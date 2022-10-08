import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './layouts/Navbar';

function App() {
  return (
    <div className="font-barlow dark:bg-dark dark:text-white bg-white text-dark h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
