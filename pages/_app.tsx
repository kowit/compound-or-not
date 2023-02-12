import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import SiteHeader from "../src/components/SiteHeader";
import "../styles/globals.css";
import { analytics } from "../firebase/clientApp";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [themeType, setThemeType] = useState("dark");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics()
    }
  }, [])

  return (
    <GeistProvider themeType={themeType}>
      <SiteHeader themeType={themeType} switchThemes={switchThemes} />
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
};

export default MyApp;
