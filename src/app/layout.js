'use client'
import React from 'react';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import "./globals.css";
import Searchbox from '@/components/Searchbox';

export const metadata = {
  title: 'IMDB CLONE',
  description: 'Created by @jaamx',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='text-white '>
        
          <Header />
          <Navbar />
          <Searchbox/>
          {children}
        
      </body>
    </html>
  )
}
