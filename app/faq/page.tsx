import React from 'react';
import type { Metadata } from 'next';
import FAQ from '@/components/Home/FAQ';

export const metadata: Metadata = {
  title: 'FAQ | Lucerny',
  description: 'Lucerny is a web development agency that specializes in building websites and web applications for small businesses and startups.',
};

const Faq = () => {
  return (
      <FAQ />
  );
};

export default Faq;
