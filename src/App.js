import { PokemonContainer } from './container';
import { PokemonProvider } from './context';

function App() {
  return (
    <PokemonProvider>
        <PokemonContainer />
    </PokemonProvider>
  );
}

export default App;
