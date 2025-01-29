'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export const LocaleButton = () => {
  const path = usePathname();
  const page = path.split('/')[2];
  return (
    <>
      <Link href={`/en-US/${page}`}>
        <Image src="/images/en-flag.png" width="30" height="30" alt="English" />
      </Link>
      <Link href={`/bg/${page}`}>
        <Image
          src="/images/bg-flag.png"
          width="30"
          height="30"
          alt="Bulgarian"
        />
      </Link>
    </>
  );
};
