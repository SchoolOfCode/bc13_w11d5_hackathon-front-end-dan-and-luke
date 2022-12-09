import React from "react";
import ListItem from "../Item";
import { useState , useContext} from "react";
import { ThemeContext } from "../App/App";
function ShowList({ list, tickItem ,}) {
    // const [theme, setTheme] = useState('normal');
    const theme = useContext(ThemeContext)
    const className = 'item-' + theme;
    console.log(theme)
    
  return (
    <ol className={className}>
      {list.map((listItem) => (
        <ListItem
          name={listItem.name}
          completed={listItem.completed}
          key={listItem.id}
          
        />
      ))}
    </ol>
  );
}

export default ShowList;
