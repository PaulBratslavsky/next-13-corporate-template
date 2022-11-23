"use client" // declare a NextJs13 component as a client component
import Link from "next/link";
import "./globals.css";
import Navbar from '../components/navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
