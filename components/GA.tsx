'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  const ga4 = process.env.NEXT_PUBLIC_GA4_ID;
  if (!ga4) return null;
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
      />
      <Script id="ga4-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga4}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
