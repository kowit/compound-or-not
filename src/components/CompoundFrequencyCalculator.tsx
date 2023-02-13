import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import compoundFrequencyStore from '../stores/compoundFrequencyStore'
import { Box, Center, FormControl, FormLabel, Input, SimpleGrid, Spacer } from '@chakra-ui/react'
import { CgShapeCircle } from 'react-icons/cg'

const CompoundFrequencyCalculator: FunctionComponent = observer(() => {
  const { setInitialInvestment, setGasCost, setAPR, setGainedSoFar } = compoundFrequencyStore

  return (
    <Box w="100%">
      <form onSubmit={(e) => e.preventDefault()}>
        <SimpleGrid gap={4}>
          <FormControl>
            <FormLabel>Initial Investment:</FormLabel>
            <Input
              size="lg"
              type="number"
              name="initialInvestment"
              placeholder="0.0"
              defaultValue={0.0}
              onChange={(e) => setInitialInvestment(parseFloat(e.target.value))}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Gas cost:</FormLabel>
            <Input
              size="lg"
              type="number"
              placeholder="0.0"
              defaultValue={0.0}
              onChange={(e) => setGasCost(parseFloat(e.target.value))}
            />
          </FormControl>
          <FormControl>
            <FormLabel>APR:</FormLabel>
            <Input size="lg" type="number" placeholder="0.0" onChange={(e) => setAPR(parseFloat(e.target.value))} />
          </FormControl>
          <FormControl>
            <FormLabel>Gained So Far:</FormLabel>
            <Input
              size="lg"
              type="number"
              placeholder="0.0"
              defaultValue={0.0}
              onChange={(e) => setGainedSoFar(parseFloat(e.target.value))}
            />
          </FormControl>
        </SimpleGrid>
      </form>
    </Box>
  )
})

export default CompoundFrequencyCalculator
