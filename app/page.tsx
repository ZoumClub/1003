import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';

// Lazy load sections below the fold
const CarCollection = dynamic(() => import('@/components/sections/CarCollection'), {
  loading: () => <div className="h-[600px] bg-gray-100 animate-pulse" />
});

const BrandsSection = dynamic(() => import('@/components/sections/BrandsSection'), {
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse" />
});

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => <div className="h-[400px] bg-gray-100 animate-pulse" />
});

const AccessoriesSection = dynamic(() => import('@/components/sections/AccessoriesSection'), {
  loading: () => <div className="h-[400px] bg-gray-100 animate-pulse" />
});

const NewsSection = dynamic(() => import('@/components/sections/NewsSection'), {
  loading: () => <div className="h-[400px] bg-gray-100 animate-pulse" />
});

const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'), {
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse" />
});

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Above the fold content loaded immediately */}
      <HeroSection />
      
      {/* Below the fold content lazy loaded */}
      <CarCollection />
      <BrandsSection />
      <ServicesSection />
      <AccessoriesSection />
      <NewsSection />
      <WhyChooseUs />
    </main>
  );
}