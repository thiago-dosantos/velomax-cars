import React from 'react'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Announcement from '@/components/Announcement';
import Grid from '@/components/Grid';
import Grid2 from '@/components/Grid2';

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Announcement />
      <Grid />
      <Grid2 />
      <Footer />
    </>
  )
}