import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Routine from './Pages/Routine/Routine.jsx';
import Exercises from './Pages/Exercises/Exercises.jsx';
import './App.css';

function App() {
  return(
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercises' element={<Exercises />} />
          <Route path='/routine' element={<Routine />} />
        </Routes>
      </Router>
  );
}

export default App
