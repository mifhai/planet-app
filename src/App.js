import './App.css';

import Header from './components/Header';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
      </AppProvider>
    </div>
  );
}

export default App;
