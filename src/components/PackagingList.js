import Items from "./item";

export default function PackingList() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 2, description: "charger", quantity: 12, packed: false },
    { id: 2, description: "book", quantity: 12, packed: true },
  ];

  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => (
          <Items item={items} />
        ))}
      </ul>
    </div>
  );
}
