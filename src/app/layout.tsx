import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Gaurav's Portfolio",
  description: "everything about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
