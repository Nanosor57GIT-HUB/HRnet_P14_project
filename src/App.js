import { createContext } from 'react';
import './main.css';
import Home from './pages/Home';

export const NameContext = createContext()

function App(form1) {
  return (
    <div className="App">
      <NameContext.Provider value={form1}>
      <Home />
      </NameContext.Provider>
    </div>
  );
}

export default App;
