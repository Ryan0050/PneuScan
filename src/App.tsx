import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'; // Create a separate Home component
import About from './Components/About'; // Move your About content to a separate file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
