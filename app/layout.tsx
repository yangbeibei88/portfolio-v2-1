import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/contexts/ThemeContext";
import { NavItemScrollProvider } from "@/components/contexts/NavItemContext";
import { MainNav } from "@/components/shared/topNav/MainNav";
import { Footer } from "@/components/shared/footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const roboto = Roboto({
  // variable: "--font-roboto",
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Beibei Yang Portfolio",
  description: "TypeScript React Developer, Database Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider>
          <NavItemScrollProvider>
            <div className="flex flex-col h-screen">
              <MainNav />
              {children}
              <Footer />
            </div>
          </NavItemScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
