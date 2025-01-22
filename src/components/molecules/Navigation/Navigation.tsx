import React, { ComponentPropsWithRef } from 'react';
import Link from 'next/link';

interface NavigationProps {
  routes: { href: string; label: string }[];
  navProps?: ComponentPropsWithRef<'nav'>;
  ulProps?: ComponentPropsWithRef<'ul'>;
  nextLinkProps?: ComponentPropsWithRef<'a'>;
}

export const Navigation = ({
  navProps,
  ulProps,
  nextLinkProps,
  routes
}: NavigationProps) => {
  return (
    <nav {...navProps}>
      <ul {...ulProps}>
        {routes.map((route, idx) => (
          <li key={idx + route.href}>
            <Link href={route.href} {...nextLinkProps}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
