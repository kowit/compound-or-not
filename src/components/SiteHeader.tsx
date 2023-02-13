import React, { FunctionComponent } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { ToggleColorMode } from './ToggleColorMode'

const SiteHeader: FunctionComponent = () => {
  return (
    <header>
      <Flex justify="space-between" p="4" m="auto" maxW="1080">
        <Heading pt={3} size="md">
          Compound or Not
        </Heading>
        <ToggleColorMode />
      </Flex>
    </header>
  )
}

export default SiteHeader
