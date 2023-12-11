import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@/styles/layout.module.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <Navbar />
  );

  const footer = (
    <Footer />
  );

  return (
    <html>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <head />
      <body>
        <div className={styles.container}>
          {header}
          <main className={styles.main}>{children}</main>
          {footer}
        </div>
      </body>
    </html>
  );
}
