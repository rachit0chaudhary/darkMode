import { createContext, useContext } from "react";

export const ModeContext = createContext({
  theamMode: "light",
  darkTheme: () => {},
  ligthTheme: () => {},
});
export const ThemeProvider = ModeContext.Provider;

export default function useMode() {
  return useContext(ModeContext);
}
