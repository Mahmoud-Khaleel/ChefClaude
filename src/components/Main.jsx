import React from "react";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ing) => (
    <li key={ing}>{ing}</li>
  ));

  function handle(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredients = formData.get("ingredient");
    setIngredients((preIngredients) => [...preIngredients, newIngredients]);
  }

  return (
    <main>
      <form onSubmit={handle} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}

//State: refers to values that are managed by the component, similar to variables declared inside a function, Any time you have changing values that should be saved/display, you'll kikely be using state
