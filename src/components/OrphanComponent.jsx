import GameContext from "../context/GameContext";
import { useContext } from "react";

function OrphanComponent() {
  // Attempt to get visionMode and toggleVision from context
  // If no Provider is found, these will be the default values from createContext
  const { visionMode, toggleVision } = useContext(GameContext);

  console.log("OrphanComponent - visionMode from context:", visionMode);

  const handleAttemptToggle = () => {
    // This will call the default toggleVision function from GameContext
    // which includes a console.warn if it's the default one.
    toggleVision();
  };

  return (
    <div className="mt-6 p-4 border border-error rounded-lg bg-base-100 w-full max-w-md mx-auto">
      <h4 className="text-error text-lg">
        Orphan Component (Outside Provider)
      </h4>
      <p className="text-base-content">
        My context vision mode is:{" "}
        <span className="font-bold">{visionMode}</span>
      </p>
      <button
        onClick={handleAttemptToggle}
        className="btn btn-sm btn-warning mt-2"
      >
        Attempt Toggle (Uses Default)
      </button>
      <p className="text-xs text-neutral-content mt-1">
        (This component is NOT wrapped by GameContext.Provider in App.jsx)
      </p>
    </div>
  );
}
export default OrphanComponent;
