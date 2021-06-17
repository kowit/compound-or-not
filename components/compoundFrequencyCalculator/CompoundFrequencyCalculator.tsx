import React, { useState, useEffect } from "react";
import { Grid, Card, Button, Text, Input, Spacer } from "@geist-ui/react";
import Results from "../results/Results";
import { DollarSign, Percent } from "@geist-ui/react-icons";

const DAYS_IN_YEAR = 365;

const CompoundFrequencyCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(0.0);
  const [gasCost, setGasCost] = useState(0.0);
  const [APY, setAPY] = useState(0.0);
  const [gainedSoFar, setGainedSoFar] = useState(0.0);

  useEffect(() => {}, [initialInvestment, gasCost, APY, gainedSoFar]);

  const calculateDaysSinceLastCompound = () => {
    console.log("\n\n");
    console.log("initialInvestment: ", initialInvestment);
    console.log("gasCost: ", gasCost);
    console.log("APY: ", APY);
    console.log("gainedSoFar: ", gainedSoFar);

    const sum = (gainedSoFar / (initialInvestment * APY)) * DAYS_IN_YEAR;

    if (
      initialInvestment === 0 ||
      gasCost === 0 ||
      APY === 0 ||
      gainedSoFar === 0
    ) {
      return 0;
    } else {
      return parseFloat(sum.toFixed(4)) * 100.0;
    }
  };

  // const calculateDaysTillNextCompound = (e: any) => {
  //   console.log("e: ", e.target.value);
  // };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Grid.Container gap={6} justify="center">
      <Grid xl={10} lg={10} md={10} sm={24} xs={24}>
        <div style={{ width: "100%" }}>
          <form onSubmit={handleOnSubmit}>
            <Card shadow>
              <Input
                name="initialInvestment"
                width="100%"
                size="large"
                placeholder="0.0"
                icon={<DollarSign />}
                defaultValue={0.0}
                onChange={(e) =>
                  setInitialInvestment(parseFloat(e.target.value))
                }
              >
                Initial Investment:
              </Input>
            </Card>
            <Spacer />
            <Card shadow>
              <Input
                width="100%"
                size="large"
                placeholder="0.0"
                icon={<DollarSign />}
                defaultValue={0.0}
                onChange={(e) => setGasCost(parseFloat(e.target.value))}
              >
                Gas Cost:
              </Input>
            </Card>
            <Spacer />
            <Card shadow>
              <Input
                width="100%"
                size="large"
                placeholder="0.0"
                iconRight={<Percent />}
                onChange={(e) => setAPY(parseFloat(e.target.value))}
              >
                APY:
              </Input>
            </Card>
            <Spacer />
            <Card shadow>
              <Input
                width="100%"
                size="large"
                placeholder="0.0"
                icon={<DollarSign />}
                defaultValue={0.0}
                onChange={(e) => setGainedSoFar(parseFloat(e.target.value))}
              >
                Gained So Far:
              </Input>
            </Card>
          </form>
        </div>
      </Grid>
      <Grid xl={14} lg={14} md={14} sm={24} xs={24}>
        <Results
          calculateDaysSinceLastCompound={calculateDaysSinceLastCompound}
        />
      </Grid>
    </Grid.Container>
  );
};

export default CompoundFrequencyCalculator;
