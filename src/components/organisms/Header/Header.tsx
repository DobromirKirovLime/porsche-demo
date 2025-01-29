import { Navigation, LocaleButton } from '@/components';
import styles from './header.module.scss';
import { useTranslations } from 'next-intl';

interface HeaderProps {
  locale: string;
}

export const Header = ({ locale }: HeaderProps) => {
  const t = useTranslations('header');

  const routes = [
    { href: `/${locale}/home`, label: t('logo') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/products`, label: t('products') }
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
