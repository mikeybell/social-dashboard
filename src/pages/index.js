import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { ThemeProvider } from "emotion-theming";
import { lightTheme, darkTheme } from "../theme";

const IndexPage = () => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => setTheme(!theme);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Layout>
        <Header toggleTheme={toggleTheme} />
      </Layout>
    </ThemeProvider>
  )
};

export default IndexPage
