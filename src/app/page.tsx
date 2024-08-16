import dynamic from "next/dynamic";

const IntroSection = dynamic(() => import("@/components/pattern/IntroSection"), {
  ssr: false,
  loading: () => <div className="w-screen h-screen">로딩 중...</div>,
});

export default function Home() {
  return (
    <>
      <IntroSection />
      <main className="main-container flex min-h-screen flex-col items-center justify-between px-12">
        <div className="bg-red-700 w-1/2 h-[1000px]"></div>
      </main>
    </>
  );
}
