import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {
    handleRemoveAllItems,
    handleResetToInitial,
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
  } = useItemsContext();
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
    {
      text: "Reset to inital",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((secondaryBtn, index) => (
        <Button
          onClick={secondaryBtn.onClick}
          key={index}
          typeButton="secondary"
        >
          {secondaryBtn.text}
        </Button>
      ))}
    </section>
  );
}
