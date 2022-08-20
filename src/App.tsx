import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { example } from './example';
import { Res1 } from './Model/Model';
import AllCoins from './pages/AllCoins';
import Charts from './pages/Charts';
function App() {

  const [res, setRes] = useState<Res1[]>([example]);

  useEffect(() => {
    const Query = async () => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
        setRes(res.data)
      })
    }
    Query()
  }, [])


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main res={res} />} />
          <Route path="/coins" element={<AllCoins coin={res} />} />
          <Route path="/coins/:id" element={<Charts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
