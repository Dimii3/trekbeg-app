import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((secondaryBtnText) => (
        <Button key={secondaryBtnText} type="secondary">
          {secondaryBtnText}
        </Button>
      ))}
    </section>
  );
}
