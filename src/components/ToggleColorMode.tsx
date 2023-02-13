import React, { FunctionComponent } from 'react'
import { Button, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ToggleColorMode: FunctionComponent = ({ switchThemes, themeType }: any) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button size="sm" rounded="full" onClick={toggleColorMode}>
      {colorMode === 'light' ? <FaMoon /> : <FaSun />}
    </Button>
  )
}
