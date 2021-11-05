import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  // function onItemFormSubmit(newItem) {
  //   setNewItems([...items, newItem])
  //   console.log(newItem)
  // }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  }).filter(item => item.name.toLowerCase().includes((search).toLowerCase()));

  function onSearchChange(e) {
    setSearch(e.target.value)
    itemsToDisplay.filter(item => item.name.toLowerCase().includes((search).toLowerCase()))
  }

  // function onSearchChange(e) {
  //   setSearch(e.target.value)
  //   setNewItemsList(items.filter(item => item.name.toLowerCase().includes((e.target.value).toLowerCase())))
  // }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search} setSearch={setSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
