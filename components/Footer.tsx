import { Text, Button } from "@geist-ui/react";
import { HeartFill } from "@geist-ui/react-icons";

const Footer = (props: any) => {
  const { styles } = props;
  return (
    <footer className={styles.footer}>
      <Button size="small" auto iconRight={<HeartFill />}>
        Donate to support us
      </Button>
    </footer>
  );
};

export default Footer;
