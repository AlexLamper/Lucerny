import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/navigation";
import styles from "@/styles/layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <Navigation />
  );

  const footer = (
    <Footer />
  );

  return (
    <html>
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
