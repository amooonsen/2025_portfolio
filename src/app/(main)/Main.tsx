import dynamic from "next/dynamic";

const IntroSection = dynamic(() => import("@/app/(main)/_components/IntroSection"), {
  ssr: false,
  loading: () => <div className="w-screen h-screen">로딩 중...</div>,
});

const MainContent = dynamic(() => import("@/app/(main)/_components/MainContent"), {
  ssr: false,
  loading: () => <div className="w-screen h-screen">로딩 중...</div>,
});

export default function Main() {
  return (
    <>
      <IntroSection />
      <MainContent />
    </>
  );
}
