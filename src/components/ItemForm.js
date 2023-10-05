import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({newItemName, newItemCategory, onNewNameChange, onNewCategoryChange, onItemFormSubmit}) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItemName} onChange={onNewNameChange}/> {/*State is updating the field*/}
      </label>

      <label>
        Category:
        <select name="category" value={newItemCategory} onChange={onNewCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
