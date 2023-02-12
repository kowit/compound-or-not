import React, { FunctionComponent } from 'react'
import CompoundFrequencyCalculator from './CompoundFrequencyCalculator'
import Footer from './Footer'

const Main: FunctionComponent = () => {
  return (
    <div style={{ marginTop: '140px', padding: '0 20px 0 20px' }}>
      <div style={{ margin: '0 auto', maxWidth: '840px' }}>
        <CompoundFrequencyCalculator />
        <Footer />
      </div>
    </div>
  )
}

export default Main
