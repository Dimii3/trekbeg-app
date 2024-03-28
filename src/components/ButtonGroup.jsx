import Button from "./Button";

import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInital = useItemsStore((state) => state.resetToInital);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to inital",
      onClick: resetToInital,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
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
