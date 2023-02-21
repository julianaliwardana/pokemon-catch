import { PokemonContainer, BagContainer } from './container';
import { PokemonProvider } from './context';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<PokemonContainer />} exact />
          <Route path="/bag" element={<BagContainer />} exact />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  );
}

export default App;
