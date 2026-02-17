import Navigation from './components/Navigation';
import Footer from './components/Footer';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}
