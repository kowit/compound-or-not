import { Button } from "@geist-ui/react";
import { Sun, Moon } from "@geist-ui/react-icons";

const ThemeSwitcherButton = ({ switchThemes, themeType }: any) => {
  return (
    <Button
      auto
      onClick={switchThemes}
      icon={themeType === "light" ? <Moon /> : <Sun />}
    />
  );
};

export default ThemeSwitcherButton;
