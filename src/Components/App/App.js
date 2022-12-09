import ListItem from '../Item';
import InputList from '../ListInput';
import './App.css';
import ShowList from '../ShowList';
import { useState, useContext, useEffect, createContext } from 'react';

const url = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3001/api";

function App() {

  const [list, setList] = useState([]);
  const ThemeContext = createContext(null);
  // Fetching shopping list data from shopping list API.
  useEffect(() => {
    async function getChristmasList() {
      const response = await fetch(`${url}/api/items`);
      const data = await response.json(response);
      console.log(data);
      setList(data.payload);
    }
    getChristmasList();
  }, []);
  
  async function addToList(newListItem) {
    //This function changes the state of the list by pushing the text from the input field in to the array.
    const listItemWithoutId = {
      name: newListItem,
      completed: false,
    };

    const response = await fetch(`${url}/api/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(listItemWithoutId),
      
    });

    

    const data = await response.json();
    const listItemWithId = data.payload;
    
    setList((previous) => [...previous, listItemWithId]);
    console.log(listItemWithoutId)
  }
  
  
  
  function tickItem(idOfTickedItem) {
    setList((previous) => {
      return previous.map((item) => {
        return item.id !== idOfTickedItem
        ? item
        : { ...item, completed: !item.completed };
      });
    });
  }

  const [theme, setTheme] = useState('normal');
  const bclassName = 'button-' + theme;
  const oclassname = 'list' + theme;
  return (
            <>
           
        <button
          className={bclassName}
          checked={theme === 'christmas'}
          onClick={(e) => {
            setTheme(e.target.checked ? 'normal' : 'christmas')
            console.log("this is the button")
          }}
        >Use christmas mode</button>
       
        
      
    <ThemeContext.Provider value={theme}>
    <section>
      <InputList addToList={addToList} buttonText={"Add To List"} />
      <ShowList list={list} tickItem={tickItem}  />
      
    </section>
    
    </ThemeContext.Provider>
    </>
  );
}

export default App;

