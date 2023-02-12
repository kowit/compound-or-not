import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import { Row, Col, Card, Text, Spacer } from '@geist-ui/react'
import compoundFrequencyStore from '../stores/compoundFrequencyStore'

const Results: FunctionComponent = observer(() => {
  const { calculateDaysSinceLastCompound, calculateOptimumCompoundDays, calculateDaysTillNextCompound } =
    compoundFrequencyStore

  return (
    <div style={{ width: '100%' }}>
      <Card shadow>
        <Row gap={0.9}>
          <Col span={20}>
            <Text h5>Optimum Days per Compound:</Text>
          </Col>
          <Col span={4}>
            <Row justify="end">
              <Text h5 style={{ fontWeight: 800 }}>
                {calculateOptimumCompoundDays().days}
              </Text>
            </Row>
          </Col>
        </Row>
        <Row gap={0.9}>
          <Col span={20}>
            <Text h5>Days Since Last Compound:</Text>
          </Col>
          <Col span={4}>
            <Row justify="end">
              <Text h5 style={{ fontWeight: 800 }}>
                {calculateDaysSinceLastCompound()}
              </Text>
            </Row>
          </Col>
        </Row>
        <Row gap={0.9}>
          <Col span={20}>
            <Text h5>Days till next Compound:</Text>
          </Col>
          <Col span={4}>
            <Row justify="end">
              <Text h5 style={{ fontWeight: 800 }}>
                {calculateDaysTillNextCompound()}
              </Text>
            </Row>
          </Col>
        </Row>
      </Card>
      <Spacer />
      <Card shadow>
        <Row gap={0.9}>
          <Col span={18}>
            <Text h5>Compound Frequency (Days):</Text>
          </Col>
          <Col span={6}>
            <Row justify="end">
              <Text h5>{calculateOptimumCompoundDays().days}</Text>
            </Row>
          </Col>
        </Row>
        <Row gap={0.9}>
          <Col span={16}>
            <Text h5>Value at t + 1 year: </Text>
          </Col>
          <Col span={8}>
            <Row justify="end">
              <Text h5>${calculateOptimumCompoundDays().amount}</Text>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  )
})

export default Results
