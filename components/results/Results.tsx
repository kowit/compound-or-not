import { Row, Col, Card, Text, Spacer } from "@geist-ui/react";

const Results = ({ calculateDaysSinceLastCompound }: any) => {
  return (
    <div style={{ width: "100%" }}>
      <Card shadow>
        <Row gap={0.9}>
          <Col span={18}>
            <Text h5>Compound Frequency (Days):</Text>
          </Col>
          <Col span={6}>
            <Row justify="end">
              <Text h5>365</Text>
            </Row>
          </Col>
        </Row>
        <Row gap={0.9}>
          <Col span={16}>
            <Text h5>Value at: </Text>
          </Col>
          <Col span={8}>
            <Row justify="end">
              <Text h5>t + 1 year</Text>
            </Row>
          </Col>
        </Row>
      </Card>
      <Spacer />
      <Card shadow>
        {/* <Row gap={0.9}>
          <Col span={20}>
            <Text h5>Days Since Last Compound:</Text>
          </Col>
          <Col span={4}>
            <Row justify="end">
              <Text h5>4.78</Text>
            </Row>
          </Col>
        </Row> */}
        <Row gap={0.9}>
          <Col span={20}>
            <Text h5>Days Since Last Compound:</Text>
          </Col>
          <Col span={4}>
            <Row justify="end">
              <Text h5>{calculateDaysSinceLastCompound()}</Text>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Results;
