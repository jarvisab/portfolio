"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlareCursor from "@/components/Cursor";

export default function HocLayout({ children }) {

  return (
    <html lang="en" className="dark">
      <body className="mx-4 sm:max-w-4xl sm:mx-auto min-h-screen dark:bg-gradient-to-tr dark:bg-zinc-900 relative">
        <Header />
        <>
          <FlareCursor />
        </>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
