import { Text, Grid } from "@geist-ui/react";
import ThemeSwitcherButton from "./ThemeButton";

const SiteHeader = ({ themeType, switchThemes }: any) => {
  return (
    <header
      style={{
        padding: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Text h3>Compound or Not</Text>
        </Grid>
        <Grid xs={12} justify="flex-end">
          <ThemeSwitcherButton
            themeType={themeType}
            switchThemes={switchThemes}
          />
        </Grid>
      </Grid.Container>
    </header>
  );
};

export default SiteHeader;
