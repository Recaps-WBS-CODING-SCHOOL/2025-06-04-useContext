import GameContext from "../context/GameContext";
import LayoutWrapper from "./LayoutWrapper";
import { useState } from "react";

function GameSession() {
  const [visionMode, setVisionMode] = useState("dark"); // 'dark' = OFF, 'light' = ON

  const toggleVision = () => {
    setVisionMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const contextValue = {
    visionMode: visionMode,
    toggleVision: toggleVision,
  };

  return (
    <GameContext.Provider value={contextValue}>
      <div className="p-6 bg-neutral flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-accent">
          The Dark Room Mission
        </h1>
        <button onClick={toggleVision} className="btn btn-primary mb-6">
          Toggle Night Vision ({visionMode === "dark" ? "OFF" : "ON"})
        </button>
        <LayoutWrapper />
      </div>
    </GameContext.Provider>
  );
}
export default GameSession;
