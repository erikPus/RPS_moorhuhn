import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Meni from "./components/Meni.tsx";
import Lestvica from "./components/Lestvica.tsx";
import Konec from "./components/Konec.tsx";
import Game from "./components/Game.tsx";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Meni />}></Route>
        
        <Route path="/lestvica" element={<Lestvica />}></Route>
        <Route path="/konec" element={<Konec />}></Route>
        <Route path='/game' element={<Game />}></Route>
      </Routes>
    </Router>
  );

}

export default App;