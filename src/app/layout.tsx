import { Providers } from "@/features/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css"
import AppHeader from "@/components/AppHeader";
import { Suspense } from "react";
import Loading from "./loading";
import AppFooter from "@/components/AppFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoinGecko App",
  description: "CoinGecko App | Author By Adem ALKAN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <header className={styles.header}>
            <AppHeader title="CoinGecko App" />
          </header>
          <Providers>
            <Suspense fallback={<Loading />}>
              <article className={styles.content}>{children}</article>
            </Suspense>
          </Providers>
          <footer className={styles.footer}>
            <AppFooter />
          </footer>
        </main>
      </body>
    </html>
  );
}
