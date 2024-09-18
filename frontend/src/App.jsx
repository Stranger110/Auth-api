import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { auth } from './firebase'; // Firebase auth instance

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        {/* Example usage of Firebase */}
        <button onClick={() => auth.signOut()}>Sign out from Firebase</button>
      </SignedIn>
    </header>
  );
}
