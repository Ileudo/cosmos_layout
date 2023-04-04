import styles from '@/styles/home.module.scss';
import cl from 'classNames';
import Logo from '../../components/Logo';
import SocialNetworks from '../../components/SocialNetworks';
import Button from '../../components/Button';
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';

export default function Home() {
  return (
    <div>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetworks />
          <Button onClick={() => {}}>Whitepaper</Button>
        </header>
        <div>
          {/* <Navigation /> */}
          <Title size="Medium">From dust to&nbsp;dawn</Title>
          <ul className={styles.buttonList}>
            <li>
              <Button onClick={() => {}}>Mint</Button>
            </li>
            <li>
              <Button onClick={() => {}}>Connect Wallet</Button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
