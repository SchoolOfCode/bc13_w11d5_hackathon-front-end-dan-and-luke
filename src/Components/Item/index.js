import { useContext } from "react";

function ListItem({ name, completed, theme }) {
    const className = 'item' + theme 
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
