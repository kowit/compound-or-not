import { Text, Grid, Row, Col } from "@geist-ui/react";
import CompoundFrequencyCalculator from "../compoundFrequencyCalculator/CompoundFrequencyCalculator";
import Results from "../results/Results";

const Main = () => {
  return (
    <div style={{ marginTop: "140px", padding: "0 20px 0 20px" }}>
      <div style={{ margin: "0 auto", maxWidth: "840px" }}>
        <Grid.Container justify="center" style={{ paddingBottom: "60px" }}>
          <Grid xs={12}>
            <Text h2 style={{ textAlign: "center", fontWeight: 700 }}>
              Compound Frequency Calculator
            </Text>
          </Grid>
        </Grid.Container>
        <CompoundFrequencyCalculator />
      </div>
    </div>
  );
};

export default Main;
