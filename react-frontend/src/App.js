import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList.js';

function App() {
  return (
    <div className="App">
      <h1 className="jumbotron">Inventory Tracker</h1>
      <ItemList />
    </div>
  );
}

export default App;
