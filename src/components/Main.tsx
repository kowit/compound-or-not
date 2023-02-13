import React, { FunctionComponent } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import CompoundFrequencyCalculator from './CompoundFrequencyCalculator'
import Footer from './Footer'
import Results from './Results'
import { Indicator } from './Indicator'

const Main: FunctionComponent = () => {
  return (
    <SimpleGrid justifyItems="center" gap={10}>
      <Indicator size="100" />
      <SimpleGrid columns={2} gap={20}>
        <CompoundFrequencyCalculator />
        <Results />
      </SimpleGrid>
      <Footer />
    </SimpleGrid>
  )
}

export default Main
