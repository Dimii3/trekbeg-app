import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { initalItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initalItems);
  return (
    <>
      <BackgroundHeading></BackgroundHeading>
      <main>
        <Header></Header>
        <ItemList items={items}></ItemList>
        <Sidebar setItems={setItems}></Sidebar>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
