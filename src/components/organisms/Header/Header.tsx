import { Navigation, LocaleButton } from '@/components';
import styles from './header.module.scss';

interface HeaderProps {
  locale: string;
}

export const Header = ({ locale }: HeaderProps) => {
  const routes = [
    { href: `/${locale}/home`, label: 'Logo' },
    { href: `/${locale}/about`, label: 'About' },
    { href: `/${locale}/products`, label: 'Products' }
  ];

  return (
    <header className={styles.header}>
      <Navigation
        routes={routes}
        nextLinkProps={{ className: styles.route }}
        ulProps={{ className: styles.navigation }}
      />
      <LocaleButton />
    </header>
  );
};
