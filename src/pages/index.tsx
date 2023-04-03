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
        <header>
          <Logo />
          <SocialNetworks />
          <Button onClick={() => {}}>Whitepaper</Button>
          <Navigation />
          <div>
            <Title size="medium">From dust to dawn</Title>
            <ul>
              <li>
                <Button onClick={() => {}}>Mint</Button>
              </li>
              <li>
                <Button onClick={() => {}}>Connect Wallet</Button>
              </li>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
}
