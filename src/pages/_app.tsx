import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import "../styles/globals.css";
// import type { AppProps } from "next/app";
import React from "react";
// import { AppProps } from "next/app";

import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>JãoSpace</title>
      </Head>
      <AnimatePresence mode="wait" initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
