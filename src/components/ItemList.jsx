import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "deafult",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState("deafult");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy == "packed") {
      return b.packed - a.packed;
    }
    if (sortBy == "unpacked") {
      return a.packed - b.packed;
    }
    return;
  });
  return (
    <ul className="item-list">
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          ></Select>
        </section>
      ) : null}
      {items.length === 0 ? <EmptyView></EmptyView> : null}
      {items.map((item) => (
        <Item
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          key={item.id}
          item={item}
        ></Item>
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            onToggleItem(item.id);
          }}
        />{" "}
        {item.name}
      </label>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
