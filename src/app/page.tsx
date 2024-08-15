'use client'
import {signOut, useSession} from 'next-auth/react';

export default function Home() {
  return (
    <div>
      <button onClick={() => signOut({
        callbackUrl: '/login',
      })}>Logout</button>
    </div>
  );
}
