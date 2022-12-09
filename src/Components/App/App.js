import ListItem from '../Item';
import InputList from '../ListInput';
import './App.css';
import ShowList from '../ShowList';
import { useState, useContext, useEffect, createContext } from 'react';
import useDocumentTitle from '../Hook/useTitle';
const url = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3001/api";

function App() {

  const [list, setList] = useState([]);
  const ThemeContext = createContext(null);
  
  useEffect(() => {
    async function getChristmasList() {
      const response = await fetch(`${url}/items`);
      const data = await response.json(response);
      console.log(data);
      setList(data.payload);
    }
    getChristmasList();
  }, []);
  
  async function addToList(newListItem) {
    
    const listItemWithoutId = {
      name: newListItem,
      completed: false,
    };

    const response = await fetch(`${url}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(listItemWithoutId),
      
    });

    

    const data = await response.json();
    const listItemWithId = data.payload;
    
    setList((previous) => [...previous, listItemWithId]);
    console.log(listItemWithoutId)
  }
  
  
  
  // function tickItem(idOfTickedItem) {
  //   setList((previous) => {
  //     return previous.map((item) => {
  //       return item.id !== idOfTickedItem
  //       ? item
  //       : { ...item, completed: !item.completed };
  //     });
  //   });
  // }
  
  const [theme, setTheme] = useState('normal');
  const bclassName = 'button-' + theme;
  const lclassName = 'list-' + theme
  const pclassName = 'p-'+ theme
  
  return (
            <>
           <p className={pclassName}>Christmas list!</p>
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
      <InputList addToList={addToList} buttonText={"Add To List"} theme={theme} />
      <ShowList list={list}  className= {lclassName} theme ={theme} />
      
    </section>
    
    </ThemeContext.Provider>
    </>
  );
}

export default App;

