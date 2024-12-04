"use client";

import Script from "next/script";

export default function UserScripts() {
  return (
    <>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "p8ashgggi2");
              `,
        }}
      />

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-M69YM84DBG"
      />

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-M69YM84DBG');
              `,
        }}
      />
    </>
  );
}
