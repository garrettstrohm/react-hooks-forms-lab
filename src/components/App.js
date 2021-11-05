import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import items from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newItems, setNewItems] = useState(items)
  
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  
  function onItemFormSubmit(newItem) {
    const newArray = [...newItems, newItem]
    setNewItems(newArray)
  }


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={newItems} onItemFormSubmit={onItemFormSubmit}/>
    </div>
  );
}

export default App;
