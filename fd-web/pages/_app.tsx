import "../styles/globals.css";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../components/styles/style";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
