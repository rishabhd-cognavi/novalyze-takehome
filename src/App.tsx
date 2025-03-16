import React from "react";
import AppRouter from "./routes/Router";
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <AppRouter />
      </div>
    </ThemeProvider>
  );
};

export default App;
