import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (!itemText) {
          alert("Item cant be empty");
          inputRef.current.focus();
          return;
        }
        const newItem = {
          id: new Date().getTime(),
          name: itemText,
          packed: false,
        };
        setItems((prevItems) => [...prevItems, newItem]);
        setItemText("");
      }}
    >
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        type="text"
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus="true"
      />
      <Button>Add to list</Button>
    </form>
  );
}
