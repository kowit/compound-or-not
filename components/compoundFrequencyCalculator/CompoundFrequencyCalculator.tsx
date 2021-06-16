import React, { useState } from "react";
import { Card, Button, Text, Input, Spacer } from "@geist-ui/react";
import Results from "../results/Results";

const DAYS_IN_YEAR = 365;

const CompoundFrequencyCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(0.0);
  const [gasCost, setGasCost] = useState(0.0);
  const [APY, setAPY] = useState(0.0);
  const [gainedSoFar, setGainedSoFar] = useState(0.0);

  const calculateDaysSinceLastCompound = (
    gainedSoFar: number,
    initialInvestment: number,
    APY: number,
    DAYS_IN_YEAR: number
  ) => {
    return (gainedSoFar / (initialInvestment * APY)) * DAYS_IN_YEAR;
  };

  const calculateDaysTillNextCompound = () => {};

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div style={{ width: "100%" }}>
      <form onSubmit={handleOnSubmit}>
        <Card shadow>
          <Input width="100%" size="large" placeholder="0.0" clearable>
            Initial Investment:
          </Input>
        </Card>
        <Spacer />
        <Card shadow>
          <Input width="100%" size="large" placeholder="0.0" clearable>
            Gas Cost:
          </Input>
        </Card>
        <Spacer />
        <Card shadow>
          <Input width="100%" size="large" placeholder="0.0" clearable>
            APY:
          </Input>
        </Card>
        <Spacer />
        <Card shadow>
          <Input width="100%" size="large" placeholder="0.0" clearable>
            Gained So Far:
          </Input>
        </Card>
      </form>
    </div>
  );
};

export default CompoundFrequencyCalculator;
