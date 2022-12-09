import './index.css'
import { useState , useContext} from "react";
import { ThemeContext } from "../App/App";
function ListItem({ name, completed, }) {
  const theme = useContext(ThemeContext)
    const className = 'item-' + theme;
    console.log(theme)
    
  return (
    <li
      data-testid="list-item"
      className={className}
      
    >
      {name}
    </li>
  );
}

export default ListItem;
