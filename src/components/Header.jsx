import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalNumberOfItems, numberOfItemsPacked }) {
  return (
    <header>
      <Logo></Logo>
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      ></Counter>
    </header>
  );
}
