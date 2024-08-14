"use client";

import React, { Suspense } from "react";
import SwitchObject from "../objects/SwitchObject";

export default function IntroSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <SwitchObject />
        <p>Click Here !</p>
      </section>
    </Suspense>
  );
}
