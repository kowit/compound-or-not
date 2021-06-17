import { Text, Grid, useTheme } from "@geist-ui/react";
import ThemeSwitcherButton from "./ThemeButton";

const SiteHeader = ({ themeType, switchThemes }: any) => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <header
      style={{
        zIndex: 9999,
        background: palette.background,
        position: "fixed",
        width: "100%",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <Grid.Container style={{ padding: "20px" }}>
        <Grid xs={22}>
          <Text h3 style={{ fontWeight: 700 }}>
            {/* Compound or Not */}
          </Text>
        </Grid>
        <Grid xs={2} justify="flex-end">
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
