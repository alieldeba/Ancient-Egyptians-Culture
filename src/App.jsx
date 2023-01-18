import React from "react";

function App() {
  return (
    <header className="w-full h-screen text-center">
      <nav className="container flex justify-between items-center p-3">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="w-12 cursor-pointer"
        />
        <ul className="list-none flex items-center gap-10 text-xl">
          <li>أشهر الملوك</li>
          <li>أشهر الاثار</li>
          <li>العصور الفرعونية</li>
          <li></li>
        </ul>
      </nav>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-normal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        في مصر اكثر من 140 منطقة أثريه يزورها أكثر من 8 مليون زائر في السنة
      </h2>
    </header>
  );
}

export default React.memo(App);
