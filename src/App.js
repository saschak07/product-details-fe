import './App.css';
import ProductList from './components/ProductList/ProductList';


function App() {
  return (
    <div className="App">
      <div className="content">
      <h2>Search for products</h2>
      <ProductList/>
      </div>
    </div>
  );
}

export default App;
