import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsIncomplete,
  handleMarkAllAsComplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem}></AddItemForm>
      <ButtonGroup
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
      ></ButtonGroup>
    </div>
  );
}
