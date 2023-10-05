import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  // STATE
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [newItemName, setNewItemName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Produce");
  // items becomes dynamic, so it must use state
  const [itemsProp, setItems] = useState([...items]);
  //const [newItem, setNewitem] = useState({ id: 0, name: "", category: ""})

  // STATE HANDLERS
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function onNewNameChange(event) {
    setNewItemName(event.target.value);
  }

  function onNewCategoryChange(event) {
    setNewItemCategory(event.target.value);
  }
  
  function onItemFormSubmit(event) {
    event.preventDefault();
    setItems([...itemsProp, {
      id: uuid(),
      name: newItemName,
      category: newItemCategory
    }])
  }

  const itemsToDisplay = itemsProp.filter((item) => {
    if (selectedCategory === "All" || item.category === selectedCategory) {
      for (const word of item.name.toLowerCase().split(" ")){
        if (word.startsWith(query.toLowerCase())) return true;
      }
      return false;
      // if (item.name.toLowerCase().split(" ")) //.startsWith(query.toLowerCase())) return true;
    }
  });

  return (
    <div className="ShoppingList" >
      <ItemForm
        newItemName={newItemName}
        newItemCategory={newItemCategory}
        onNewNameChange={onNewNameChange}
        onNewCategoryChange={onNewCategoryChange}
        onItemFormSubmit={onItemFormSubmit}
        />
      <Filter onCategoryChange={handleCategoryChange} onQueryChange={handleQueryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
