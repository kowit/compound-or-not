import React, { useState, useEffect } from "react";
import { Grid, Card, Button, Text, Input, Spacer } from "@geist-ui/react";
import Results from "../results/Results";
import { DollarSign, Percent } from "@geist-ui/react-icons";
import Circle from '@geist-ui/react-icons/circle'

const DAYS_IN_YEAR = 365;

const CompoundFrequencyCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [gasCost, setGasCost] = useState(0);
  const [APR, setAPR] = useState(0);
  const [gainedSoFar, setGainedSoFar] = useState(0);

  useEffect(() => {}, [initialInvestment, gasCost, APR, gainedSoFar]);

  const calculateDaysSinceLastCompound = () => {
    console.log("\n\n");
    console.log("initialInvestment: ", initialInvestment);
    console.log("gasCost: ", gasCost);
    console.log("APR: ", APR);
    console.log("gainedSoFar: ", gainedSoFar);

    const sum = (gainedSoFar / (initialInvestment * APR)) * DAYS_IN_YEAR;

    console.log('sum:', sum)

    if (
      !initialInvestment ||
      !gasCost ||
      !APR ||
      !gainedSoFar
    ) {
      return 'NaN';
    } else {
      return parseFloat(sum.toFixed(4)) * 100.0;
    }
  };

  const calculateDaysTillNextCompound = () => {
    if (
      !initialInvestment ||
      !gasCost ||
      !APR ||
      !gainedSoFar
    ) {
      return 'NaN';
    } else {
      const daysSinceLastCompound = calculateDaysSinceLastCompound()
      const optimumCompoundDays = calculateOptimumCompoundDays()
      if (daysSinceLastCompound === 'NaN' || optimumCompoundDays.days === 'NaN') {
        return 'NaN'; 
      }
      const result = Number(optimumCompoundDays.days) - daysSinceLastCompound
      return parseFloat(result.toFixed(4));
    }
  }

  const calculateOptimumCompoundDays = () => {
    if (
      !initialInvestment ||
      !gasCost ||
      !APR
    ) {
      return { days: 'NaN', amount: 'NaN' }
    }
    let optimum = -99999999
    let i = 1
    let continueWhile = true
    while(i < 10000 && continueWhile) { // 1000 loops or after optimum is found
      const APRDecimal = APR / 100
      const value = initialInvestment*Math.pow(1+(APRDecimal/(DAYS_IN_YEAR/i)),(DAYS_IN_YEAR/i))+(gasCost-gasCost*Math.pow(1+(APRDecimal/(DAYS_IN_YEAR/i)),(DAYS_IN_YEAR/i)))/(APRDecimal/(DAYS_IN_YEAR/i))
      if (value > 0) { // value must be greater than zero
        if (value > optimum) {
          optimum = value
        } else {
          continueWhile = false
        }
      }
      i++
    }
    return { days: i-2, amount: optimum }
  }

  // const calculateDaysTillNextCompound = (e: any) => {
  //   console.log("e: ", e.target.value);
  // };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
  };

  let trafficLightColor = 'gray'
  if (calculateDaysTillNextCompound() === 'NaN') {
    trafficLightColor = 'gray'
  } else if (calculateDaysTillNextCompound() > 3) {
    trafficLightColor = 'red'
  } else if (calculateDaysTillNextCompound() > 0) {
    trafficLightColor = 'gold'
  } else if (calculateDaysTillNextCompound() < 0) {
    trafficLightColor = 'green'
  }

  return (
    <>
    <Grid.Container justify="center" style={{ paddingBottom: "60px" }}>
      <Grid>
        <Circle
          size={100}
          color={trafficLightColor}
        />
      </Grid>
    </Grid.Container>
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
                onChange={(e) => setAPR(parseFloat(e.target.value))}
              >
                APR:
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
          calculateDaysTillNextCompound={calculateDaysTillNextCompound}
          calculateOptimumCompoundDays={calculateOptimumCompoundDays}
        />
      </Grid>
    </Grid.Container>
    </>
  );
};

export default CompoundFrequencyCalculator;
