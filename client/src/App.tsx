import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import { CssBaseline } from "@mui/material";
import ThemeProviderWrapper from "./components/theme/ThemeProvider";

const App = () => {
  const content = useRoutes(routes);

  return (
    <>
      <ThemeProviderWrapper>
        <CssBaseline />
        {content}
      </ThemeProviderWrapper>
    </>
  );
};

export default App;
