import React from "react";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../theme";

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <Layout>
        <Header />
      </Layout>
    </ThemeProvider>
  )
};

export default IndexPage
