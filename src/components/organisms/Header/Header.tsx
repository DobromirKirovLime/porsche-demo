import { Navigation } from '@/components';
import styles from './header.module.scss';

export const Header = () => {
  const routes = [
    { href: '/', label: 'Logo' },
    { href: '/about', label: 'About' }
  ];

  return (
    <header className={styles.header}>
      <Navigation
        routes={routes}
        nextLinkProps={{ className: styles.route }}
        ulProps={{ className: styles.navigation }}
      />
    </header>
  );
};
