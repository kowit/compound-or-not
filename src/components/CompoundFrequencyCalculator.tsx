import React, { FunctionComponent } from 'react'
import { Grid, Card, Input, Spacer } from '@geist-ui/react'
import Results from './Results'
import { DollarSign, Percent } from '@geist-ui/react-icons'
import Circle from '@geist-ui/react-icons/circle'
import { observer } from 'mobx-react'
import compoundFrequencyStore from '../stores/compoundFrequencyStore'

const CompoundFrequencyCalculator: FunctionComponent = observer(() => {
  const { getTrafficLightColor, setInitialInvestment, setGasCost, setAPR, setGainedSoFar } = compoundFrequencyStore

  return (
    <>
      <Grid.Container justify="center" style={{ paddingBottom: '60px' }}>
        <Grid>
          <Circle size={100} color={getTrafficLightColor()} />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={6} justify="center">
        <Grid xl={10} lg={10} md={10} sm={24} xs={24}>
          <div style={{ width: '100%' }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <Card shadow>
                <Input
                  name="initialInvestment"
                  width="100%"
                  size="large"
                  placeholder="0.0"
                  icon={<DollarSign />}
                  defaultValue={0.0}
                  onChange={(e) => setInitialInvestment(parseFloat(e.target.value))}
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
          <Results />
        </Grid>
      </Grid.Container>
    </>
  )
})

export default CompoundFrequencyCalculator
