import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import StrategyList from './Components/Strategies/StrategyList';
import MetrixList from './Components/Metrices/MetrixList';
import KanbanBoard from './Components/KanbanBoard/KanbanBoard';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/strategy' element={<StrategyList />} />
          <Route path='/metrix' element={<MetrixList />} />
          <Route path='/' element={<KanbanBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
