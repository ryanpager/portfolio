"use client";

import { useState } from "react";
// Theme
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
// Components
import Navigation from '@/components/Navigation';
// Icons
import { EllipsisVerticalIcon, XMarkIcon } from '@heroicons/react/24/solid';

const fontFamily = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use as a trigger for opening and closing the mobile menu.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  /**
   * Toggles the open/close state of the mobile menu.
   *
   * @param e {MouseEvent} - the click event triggered.
   * @return {void}
   */
  function toggleMobileMenu(e: React.MouseEventHandler<HTMLButtonElement>): void {
    (e as any).preventDefault();
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <html lang="en">
      <body className={`${fontFamily.className} ${isMobileMenuOpen ? 'overflow-hidden' : ''} bg-white`}>
        {/* Mobile Navigation Trigger */}
        <div 
          className="fixed top-0 left-0 z-10 w-full h-full px-1 py-2 lg:hidden bg-transparent overflow-y-auto"
          onClick={(e) => toggleMobileMenu(e as any)}
        >
          <button
            onClick={(e) => toggleMobileMenu(e as any)} 
            className="inline-block text-center w-7 h-7 rounded-full fixed top-2 left-1">
            {!isMobileMenuOpen && (
              <EllipsisVerticalIcon className="mx-auto flex-none text-slate-800 h-7 w-7" />
            )}
            {isMobileMenuOpen && (
              <XMarkIcon className="mx-auto flex-none text-slate-800 h-7 w-7" />
            )}
          </button>
          <div className={`-mt-7 pt-8 pb-8 pl-9 transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full opacity-0'}`}>
            <Navigation />
          </div>
        </div>

        <div className={`mx-auto w-full lg:max-w-screen-xl py-8 pt-16 px-8 lg:px-0 lg:py-24 transition-all duration-300 ${isMobileMenuOpen ? 'blur-lg opacity-10' : ''}`}>
          <div className="flex lg:space-x-8 ">
            <div className="flex-none w-1/4 hidden lg:block">
              <Navigation />
            </div>
            <div className="flex-auto w-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
