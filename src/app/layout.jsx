import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
          <Link href="/dashboard" className="nav-link">Home</Link>
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
