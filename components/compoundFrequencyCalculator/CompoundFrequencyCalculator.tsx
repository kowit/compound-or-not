import React, { useState } from "react";
import { Card, Button, Text, Input, Spacer } from "@geist-ui/react";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

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
    <div style={{ margin: "0 auto", maxWidth: "980px", marginTop: "80px" }}>
      <Card style={{ borderRadius: "25px", padding: "40px" }}>
        <Text h3>Compound Frequnecy Calculator</Text>
        <Spacer />
        <form onSubmit={handleOnSubmit}>
          <Input width="100%" size="large" placeholder="0.0" clearable>
            Initial Investment
          </Input>
          <Spacer />
          <Input width="100%" size="large" placeholder="0.0" clearable>
            Gas Cost
          </Input>
          <Spacer />
          <Input width="100%" size="large" placeholder="0.0" clearable>
            APY
          </Input>
          <Spacer />
          <Input width="100%" size="large" placeholder="0.0" clearable>
            Gained So Far
          </Input>
          <Spacer />
          <Button
            shadow
            size="large"
            type="success"
            style={{ width: "100%" }}
            htmlType="submit"
          >
            Calculate
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CompoundFrequencyCalculator;
