'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    fetch('/auth/profile')
      .then(res => {
        if (res.status === 200) {
          router.replace('/main'); // logged in → main app
        } else {
          router.replace('/login'); // not logged in → login page
        }
      })
      .catch(() => router.replace('/login'));
  }, []);

  return <p className="flex min-h-screen items-center justify-center text-white">Loading...</p>;
}
