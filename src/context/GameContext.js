import { createContext } from "react";

const GameContext = createContext({
  visionMode: "dark",
  toggleVision: () => {
    console.warn("Provider might be missing");
  },
});

export default GameContext;
