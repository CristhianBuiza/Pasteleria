import { Route, Routes } from 'react-router-dom';
import './css/estilos.css';
import PaperWraper from './Componentes/PaperWraper';
import Inicio from './Pages/Inicio';
import Galeria from './Pages/Galeria';
import Nosotros from './Pages/Nosotros';

function App() {

  return (
    <div className="App">
      <PaperWraper>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path="/galeria" element={<Galeria />}/>
        <Route path="/nosotros" element={<Nosotros />}/>
        
      </Routes>
      </PaperWraper>
    </div>
  );
}

export default App;
