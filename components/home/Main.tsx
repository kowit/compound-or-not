import { Text, Grid, Row, Col } from "@geist-ui/react";
import CompoundFrequencyCalculator from "../compoundFrequencyCalculator/CompoundFrequencyCalculator";
import Results from "../results/Results";

const Main = () => {
  return (
    <div style={{ marginTop: "60px", padding: "0 20px 0 20px" }}>
      <div style={{ margin: "0 auto", maxWidth: "840px" }}>
        <Grid.Container justify="center" style={{ paddingBottom: "60px" }}>
          <Text h2>Compound Frequency Calculator</Text>
        </Grid.Container>
        <Grid.Container gap={6} justify="center">
          <Grid xl={10} lg={10} md={10} sm={24} xs={24}>
            <CompoundFrequencyCalculator />
          </Grid>
          <Grid xl={14} lg={14} md={14} sm={24} xs={24}>
            <Results />
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
};

export default Main;
