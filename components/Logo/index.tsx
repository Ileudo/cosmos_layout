import Link from 'next/link';
import styles from './styles.module.scss';

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <h1 className={styles.logo}>
      <Link href="/">Dusktopia</Link>
    </h1>
  );
};

export default Logo;
