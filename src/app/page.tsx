import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return null; // Tidak perlu render konten karena akan redirect
}