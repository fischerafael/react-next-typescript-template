import "../styles/globals/globals.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globals/styled-components";
import { theme } from "../styles/design-system/atoms";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
