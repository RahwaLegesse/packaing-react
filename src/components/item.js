export default function Items({ quantity, description }) {
  if (!description) {
    return null;
  }
  return (
    <li style={quantity.packed ? { textDecoration: "line-through" } : {}}>
      {quantity.quantity}
      <span>{description.description}</span>
      <button>❌</button>
    </li>
  );
}
