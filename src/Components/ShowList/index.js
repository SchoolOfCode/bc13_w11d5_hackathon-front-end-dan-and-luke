import React from "react";
import ListItem from "../Item";
import { useState } from "react";

function ShowList({ list, tickItem ,}) {
    const [theme, setTheme] = useState('normal');
    const className = 'list' + theme;
  return (
    <ol className={className}>
      {list.map((listItem) => (
        <ListItem
          name={listItem.name}
          completed={listItem.completed}
          key={listItem.id}
          tickItem={() => tickItem(listItem.id)}
        />
      ))}
    </ol>
  );
}

export default ShowList;
