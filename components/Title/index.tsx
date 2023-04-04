import { ReactNode } from 'react';
import styles from './styles.module.scss';
import classnames from 'classNames';

interface TitleProps {
  size?: 'Medium' | 'Large';
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ size = 'Medium', children }) => {
  console.log(size);
  return <h2 className={classnames(styles.title, styles[`title${size}`])}>{children}</h2>;
};

export default Title;
