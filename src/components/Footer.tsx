import React, { FunctionComponent } from 'react'
import { Button, Code, Flex, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import { FaHeart, FaPenAlt } from 'react-icons/fa'
import styles from '../../styles/Home.module.css'

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const Footer: FunctionComponent = (props: any) => {
  return (
    <footer className={styles.footer}>
      <SimpleGrid gap="2" justifyItems="center">
        <Text>Enjoying the tool?</Text>
        <Button size="sm" width="240px" leftIcon={<FaHeart />}>
          Donate to support us
        </Button>
        <Text>
          Ethereum: <Code> 0x6d82Bbb9c207D256bb1157b8f0773FF97AeEd274</Code>
        </Text>
        <Spacer />
        <Button
          size="sm"
          leftIcon={<FaPenAlt />}
          onClick={() => openInNewTab('https://github.com/kowit/compound-or-not')}
        >
          Consider contributing to open source
        </Button>
      </SimpleGrid>
    </footer>
  )
}

export default Footer
