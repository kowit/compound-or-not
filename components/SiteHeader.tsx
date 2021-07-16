import { Text, Grid, useTheme, Button } from "@geist-ui/react";
import ThemeSwitcherButton from "./ThemeButton";
// import Circle from '@geist-ui/react-icons/circle'

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
      <Grid.Container style={{ padding: "20px 20px" }}>
        <Grid xs={22}>
          <Text h3 style={{ fontWeight: 700, marginBottom: '0px' }}>
            Compound or Not
          </Text>
          {/* TODO: put circle in the header bar */}
          {/* https://codesandbox.io/s/5kw376nx1p?file=/src/index.js:654-684 */}
          {/* <div style={{ display: 'flex', alignItems: 'center' }}>
            <Circle
              size={28}
              color={"gray"}
            />
          </div> */}
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
