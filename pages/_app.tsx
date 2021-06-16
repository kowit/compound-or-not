import { useState } from "react";
import type { AppProps } from "next/app";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import SiteHeader from "../components/SiteHeader";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [themeType, setThemeType] = useState("dark");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };

  return (
    <GeistProvider themeType={themeType}>
      <SiteHeader themeType={themeType} switchThemes={switchThemes} />
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
};

export default MyApp;
