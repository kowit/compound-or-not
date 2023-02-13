import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import compoundFrequencyStore from '../stores/compoundFrequencyStore'

const Results: FunctionComponent = observer(() => {
  const { calculateDaysSinceLastCompound, calculateOptimumCompoundDays, calculateDaysTillNextCompound } =
    compoundFrequencyStore

  return (
    <SimpleGrid w="100%" gap={4}>
      <Box>
        <Text>Optimum Days per Compound:</Text>
        <Text fontWeight={800}>{calculateOptimumCompoundDays().days}</Text>
      </Box>
      <Box>
        <Text>Days Since Last Compound:</Text>
        <Text fontWeight={800}>{calculateDaysSinceLastCompound()}</Text>
      </Box>
      <Box>
        <Text>Days till next Compound:</Text>
        <Text fontWeight={800}>{calculateDaysTillNextCompound()}</Text>
      </Box>
      <Box>
        <Text>Compound Frequency (Days):</Text>
        <Text>{calculateOptimumCompoundDays().days}</Text>
      </Box>
      <Box>
        <Text>Value at t + 1 year: </Text>
        <Text>${calculateOptimumCompoundDays().amount}</Text>
      </Box>
    </SimpleGrid>
  )
})

export default Results
