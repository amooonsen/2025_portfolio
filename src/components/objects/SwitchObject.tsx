"use client";
import React, { useRef, Suspense } from "react";
import Spline from "@splinetool/react-spline/next";

const SwitchObject = () => {
  const cube = useRef<any>(null);

  function onLoad(spline: any) {
    const obj = spline.findObjectByName("Cube");
    cube.current = obj;
  }

  function moveObj() {
    if (cube.current) {
      cube.current.position.x += 10;
      console.log(cube.current);
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <Spline
          scene="https://prod.spline.design/N1FU0Xb8BYqhe8fY/scene.splinecode"
          onLoad={onLoad}
        />
        <p>Click Here !</p>
        <button onClick={moveObj}>Move Cube</button>
      </section>
    </Suspense>
  );
};

export default SwitchObject;
