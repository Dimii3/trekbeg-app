import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import Logo from "./components/Logo";
import Counter from "./components/Counter";
import AddItemForm from "./components/AddItemForm";
import ButtonGroup from "./components/ButtonGroup";
import ItemsContextProvider from "./contexts/ItemsContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading></BackgroundHeading>
      <main>
        <ItemsContextProvider>
          <Header></Header>
          <ItemList></ItemList>
          <Sidebar></Sidebar>
        </ItemsContextProvider>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
