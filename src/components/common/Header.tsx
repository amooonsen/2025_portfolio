import Link from "next/link";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => (
  <header id="header" className="flex justify-between items-center h-20 bg-transparent px-[3vw]">
    <h1>
      <Link href="/" className="text-2xl bold spacing text-white">
        ChoKyungMoon
      </Link>
    </h1>
    <nav>
      <ul className="inline-flex gap-6 text-white" ref={ref}>
        <li>
          <Link href="/run">Run</Link>
        </li>
        <li>
          <Link href="/course">Course</Link>
        </li>
        <li>
          <Link href="/notice">Notice</Link>
        </li>
      </ul>
    </nav>
  </header>
));

Header.displayName = "Header"; // React DevTools에서 컴포넌트 이름을 표시하기 위해 필요

export default Header;
