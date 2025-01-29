'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export const LocaleButton = () => {
  const path = usePathname();

  return (
    <>
      <Link href={`/en-US${path}`}>
        <Image src="/images/en-flag.png" width="30" height="30" alt="English" />
      </Link>
      <Link href={`/bg${path}`}>
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
