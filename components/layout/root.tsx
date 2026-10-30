import type { ReactNode } from 'react';
import { BottomNavigation } from '../navigations/bottom-nav';
import { Footer } from '../navigations/footer';

export function MainRootLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen pb-[calc(64px+16px+env(safe-area-inset-bottom,0px))]">
      {children}

      <Footer />
      <BottomNavigation />
    </section>
  );
}
