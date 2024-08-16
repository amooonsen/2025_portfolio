import dynamic from "next/dynamic";

const IntroSection = dynamic(() => import("@/app/(main)/_components/IntroSection"), {
  ssr: false,
  loading: () => <div className="w-screen h-screen">로딩 중...</div>,
});

export default function Main() {
  return (
    <>
      <IntroSection />
      <main className="main-container flex min-h-screen flex-col items-center justify-between px-12">
        <div className="bg-red-700 w-full h-[1000px]"></div>
        <div className="bg-primary w-full h-[1000px]"></div>
      </main>
    </>
  );
}
