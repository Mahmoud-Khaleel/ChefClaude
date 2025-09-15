export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map((ing) => (
    <li key={ing}>{ing}</li>
  ));

  function handle(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredients = formData.get("ingredient");
    ingredients.push(newIngredients);
    console.log(ingredients);
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
