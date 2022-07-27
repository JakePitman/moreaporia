import React from "react";

const BrowserContext = React.createContext({ isLandscape: true });
export const BrowserProvider = BrowserContext.Provider;
export default BrowserContext;
