import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid justify-content-center">
        <div className="navbar-brand p-0">
          <Link href="/">
            <img src="/logo.svg" width="150" height="30" className="d-inline-block align-top" alt="Photo App" loading="lazy"/>
          </Link>
        </div>
      </div>
    </nav>
  );
}
