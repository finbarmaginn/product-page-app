import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import GlobalStyle from "../styles/globalStyles";
import {theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
