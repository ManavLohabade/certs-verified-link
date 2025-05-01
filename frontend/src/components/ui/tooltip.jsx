
import React from "react";

// Create a simple context for tooltips
const TooltipContext = React.createContext(null);

const TooltipProvider = ({ children }) => {
  return <TooltipContext.Provider value={{}}>{children}</TooltipContext.Provider>;
};

export { TooltipProvider };
