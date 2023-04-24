import React from "react";
import ClientProvider from "../components/clientprovider";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import "../styles/globals.css";


export const metadata = {
  title: 'Tedtex WebScraper',
  description: 'Webscraper by Sam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-[#F7FBFF] h-screen">
        <ClientProvider>
          <Sidebar />
          <main className="p-10 max-w-7xl w-full mx-auto overflow-y-auto">
            < Header />
            {children}
          </main>
        </ClientProvider>
      </body>
    </html>
  )
}
