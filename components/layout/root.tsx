import type { ReactNode } from 'react';
import { BottomNavigation } from '../navigations/bottom-nav';
import { Footer } from '../navigations/footer';

export function MainRootLayout({ children }: { children: ReactNode }) {
  return (
    <section className="j">
      {children}
      <Footer />
      <BottomNavigation />
    </section>
  );
}
