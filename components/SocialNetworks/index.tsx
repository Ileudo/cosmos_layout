import Link from 'next/link';
import styles from './styles.module.scss';
import classNames from 'classNames';

interface SocialNetworksProps {}

const socialNetworks = [
  { id: 1, title: 'Discord', className: 'Discord', link: 'https://discord.com/' },
  { id: 2, title: 'Twitter', className: 'Twitter', link: 'https://twitter.com/' },
  { id: 3, title: 'AntDesign', className: 'AntDesign', link: 'https://ant.design/' },
];

const SocialNetworks: React.FC<SocialNetworksProps> = () => {
  return (
    <ul className={styles.socialNetworkList}>
      {socialNetworks.map((socialNetwork) => {
        return (
          <li className={styles.socialNetworkItem} key={socialNetwork.id}>
            <a
              className={classNames(styles.socialNetworkLink, styles[`socialNetwork${socialNetwork.className}`])}
              href={socialNetwork.link}
              target="blank"
            >
              {socialNetwork.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialNetworks;
