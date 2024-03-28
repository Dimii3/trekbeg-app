import Select from "react-select";
import EmptyView from "./EmptyView";
import { useItemsContext } from "../lib/hooks";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";

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

export default function ItemList() {
  const [sortBy, setSortBy] = useState("deafult");
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy == "packed") {
          return b.packed - a.packed;
        }
        if (sortBy == "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );
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
      {sortedItems.map((item) => (
        <Item
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
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
