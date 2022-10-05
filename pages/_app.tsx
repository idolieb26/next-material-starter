import * as React from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
type MyAppProps = AppProps;

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default MyApp;
