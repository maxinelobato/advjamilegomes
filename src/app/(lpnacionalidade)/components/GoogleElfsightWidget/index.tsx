'use client'

import Script from "next/script";

export default function GoogleElfsightWidget() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></Script>
      <div
        className="elfsight-app-3f69b63e-055a-45cd-8844-18ae4b4c401d"
        data-elfsight-app-lazy
      ></div>
    </>
  );
}
