import logo from './logo.svg';
import './App.css';
import { useState, useContext, useEffect } from 'react';

const url = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";

function App() {

  const [list, setList] = useState([]);

  // Fetching shopping list data from shopping list API.
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
    //This function changes the state of the list by pushing the text from the input field in to the array.
    const listItemWithoutId = {
      item: newListItem,
      completed: false,
    };



  return (
    <section>
      <InputList addToList={addToList} buttonText={"Add To List"} />
      <ShowList list={list} tickItem={tickItem} />
      <ClearList clearList={clearList} buttonText={"Clear List"} />
    </section>
  );
}

export default App;
