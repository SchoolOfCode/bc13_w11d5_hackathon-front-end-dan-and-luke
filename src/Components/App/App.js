import logo from './logo.svg';
import './App.css';
import { useState, useContext, useEffect } from 'react';
function App() {

  const [list, setList] = useState([]);

  // Fetching shopping list data from shopping list API.
  useEffect(() => {
    async function getShoppingList() {
      const response = await fetch(`${url}/items`);
      const data = await response.json(response);
      console.log(data);
      setList(data.payload);
    }
    getShoppingList();
  }, []);




  return (
    <div className="App">
      
         
    </div>
  );
}

export default App;
