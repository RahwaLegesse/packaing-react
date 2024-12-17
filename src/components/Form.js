import { useState } from "react";

export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function HandleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    console.log(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <div>
      <form className="add-form" onSubmit={HandleSubmit}>
        <h3>What do you Need for your trip 😍</h3>
        <select
          className="select"
          name="quantity"
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            return (
              <option value={num} key={num}>
                {num}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Item.."
          className="input"
          name="item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="button">Add</button>
      </form>
    </div>
  );
}
