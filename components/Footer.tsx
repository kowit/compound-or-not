import { Text, Button, Spacer } from "@geist-ui/react";
import PenTool from '@geist-ui/react-icons/penTool'
import HeartFill from '@geist-ui/react-icons/heartFill'

import styles from '../styles/Home.module.css';

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const Footer = (props: any) => {
  return (
    <footer className={styles.footer}>
      <Text h2>Enjoying the tool?</Text>
      <Text h5>Donate to support us <HeartFill size={10} /></Text>
      <Text h6>Ethereum: 0x6d82Bbb9c207D256bb1157b8f0773FF97AeEd274</Text>
      <Spacer />
      <Button size="small" auto iconRight={<PenTool />} onClick={() => openInNewTab("https://github.com/kowit/compound-or-not")}>
        Consider contributing to open source
      </Button>
    </footer>
  );
};

export default Footer;
