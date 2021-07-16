import { Text, Grid } from "@geist-ui/react";
import CompoundFrequencyCalculator from "../compoundFrequencyCalculator/CompoundFrequencyCalculator";
import Footer from "../Footer";

const Main = () => {
  return (
    <div style={{ marginTop: "140px", padding: "0 20px 0 20px" }}>
      <div style={{ margin: "0 auto", maxWidth: "840px" }}>
        {/* <Grid.Container justify="center" style={{ paddingBottom: "60px" }}>
          <Grid>
            <Circle size={38} color="green" />
          </Grid>
        </Grid.Container> */}
        <CompoundFrequencyCalculator />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
