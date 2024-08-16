import MaskText from "@/components/objects/MaskText";

export default function Main() {
  return (
    <>
      <main
        id="main-container"
        className="flex min-h-screen flex-col items-center justify-between px-12"
      >
        <div className="w-full h-[500px]">
          <MaskText
            visibleValue={0.5}
            containerClass="col-start-2 col-end-8"
            text={{
              fontSize: 48,
              weight: "bold",
            }}
          >
            같이의 가치를 찾다.
          </MaskText>
        </div>
        <div className="bg-primary w-full h-[500px]">
          <MaskText
            visibleValue={1}
            containerClass="col-start-2 col-end-8"
            text={{
              fontSize: 36,
              weight: "bold",
            }}
          >
            옵저버 테스트
          </MaskText>
        </div>
      </main>
    </>
  );
}
