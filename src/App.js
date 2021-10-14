import './App.css';
import Store from './Store'
import Cart from './Cart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Mechanical Parts
        <Store />
        <Cart />
      </header>
    </div>
  );
}

export default App;
