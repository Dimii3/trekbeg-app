import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { initalItems } from "./lib/constants";
import Logo from "./components/Logo";
import Counter from "./components/Counter";
import AddItemForm from "./components/AddItemForm";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initalItems;
  });

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initalItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };
  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <BackgroundHeading></BackgroundHeading>
      <main>
        <Header>
          <Logo></Logo>
          <Counter
            numberOfItemsPacked={
              items.filter((item) => item.packed === true).length
            }
            totalNumberOfItems={items.length}
          ></Counter>
        </Header>
        <ItemList
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
          items={items}
        ></ItemList>
        <Sidebar
          handleRemoveAllItems={handleRemoveAllItems}
          handleAddItem={handleAddItem}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
        >
          <AddItemForm onAddItem={handleAddItem}></AddItemForm>
          <ButtonGroup
            handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
            handleMarkAllAsComplete={handleMarkAllAsComplete}
            handleRemoveAllItems={handleRemoveAllItems}
            handleResetToInitial={handleResetToInitial}
          ></ButtonGroup>
        </Sidebar>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
