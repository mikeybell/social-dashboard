import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { ThemeProvider } from "emotion-theming";
import { lightTheme, darkTheme } from "../theme";

const IndexPage = () => {
  const [checked, setChecked] = useState(true);
  const toggleTheme = () => setChecked(!checked);

  return (
    <ThemeProvider theme={checked ? lightTheme : darkTheme}>
      <Layout>
        <Header toggleTheme={toggleTheme} checked={checked} />
      </Layout>
    </ThemeProvider>
  )
};

export default IndexPage
