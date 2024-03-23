import { useState } from "react";
import { initalItems } from "../lib/constants";

export default function ItemList() {
  const [items, setItems] = useState(initalItems);
  return (
    <ul>
      {items.map((item) => (
        <Item key={1} item={item}></Item>
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" /> {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}
