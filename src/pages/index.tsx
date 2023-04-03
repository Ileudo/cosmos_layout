import styles from '@/styles/home.module.scss';
import cl from 'classNames';
import Logo from '../../components/Logo';

export default function Home() {
  return (
    <div>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header>
          <Logo />
          {/* <SocialNetworks />
          <Button onCLick={() => {}}>Whitepaper</Button>
          <Navigation />
          <div>
            <Title type="h2">From dust to dawn</Title>
            <ul>
              <li>
                <Button onCLick={() => {}}>Mint</Button>
              </li>
              <li>
                <Button onCLick={() => {}}>Connect Wallet</Button>
              </li>
            </ul>
          </div> */}
        </header>
      </section>
    </div>
  );
}
