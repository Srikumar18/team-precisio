// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CostBreakdown from './components/CostBreakdown';
import Bills from './components/Bills';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cost-breakdown" element={<CostBreakdown />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
