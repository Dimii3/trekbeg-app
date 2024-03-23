import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <AddItemForm></AddItemForm>
      <ButtonGroup></ButtonGroup>
    </div>
  );
}
