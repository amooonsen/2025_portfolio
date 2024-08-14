import Image from 'next/image';

import IntroSection from '@/components/pattern/IntroSection';

export default function Home() {
  return (
    <>
      <IntroSection />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-red-700 w-1/2 h-[1000px]"></div>
      </main>
    </>
  );
}
