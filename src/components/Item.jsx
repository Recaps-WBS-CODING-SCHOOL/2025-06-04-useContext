import GameContext from "../context/GameContext";
import { use } from "react";

function Item({ itemName }) {
  const { visionMode } = use(GameContext);
  // const { visionMode, toggleVision } = useContext(GameContext);

  const isVisible = visionMode === "light";

  return (
    <div
      className={`p-3 my-2 rounded-md h-12 w-full
                  ${
                    isVisible
                      ? "bg-success text-success-content"
                      : "bg-base-300 select-none"
                  }`}
    >
      <span
        className={`transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {isVisible ? itemName : null}
      </span>
    </div>
  );
}
export default Item;
