import './styles/global.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import AppProvider from '@/source/components/general/AppProvider'
import Header from '@/source/components/general/Header'
import Footer from '@/source/components/general/Footer'

const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Transforming Event Management with Unique Communities - Davayte",
  description: "Building Unique Communities, One Event at a time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000"></meta>
      </head>
      <body className={`${poppins.variable} font-poppins tracking-wide`}>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
