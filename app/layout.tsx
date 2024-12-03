import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Online Sound Recorder - Record & Download Audio",
  description:
    "Record high-quality audio directly in your browser and download your recordings instantly. No installation required!",
  keywords:
    "sound recorder, online audio recorder, download recordings, free sound recorder",
  openGraph: {
    title: "Online Sound Recorder",
    description: "Easily record and download audio directly from your browser.",
    images: { url: "/img/og-image.webp" },
    url: "https://sound-recorder.rohankumarthakur.co.in/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Online Sound Recorder",
              description:
                "Record and download audio directly from your browser.",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "All",
              browserRequirements: "Requires JavaScript",
              url: "https://sound-recorder.rohankumarthakur.co.in/",
              creator: {
                "@type": "Person",
                name: "Rohan Kumar Thakur",
              },
            }),
          }}
        />

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
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
