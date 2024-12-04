import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import UserScripts from "@/components/UserScripts";

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
    "Easily record high-quality audio directly from your browser without the need for any installations or additional software. Our platform offers a seamless and efficient way to capture clear, professional-grade sound with just a few clicks. Whether you're recording a podcast, voiceover, music, or any other audio project, you can trust our tool to deliver superior audio quality every time. After recording, you can instantly download your files, making it ideal for quick projects and fast workflows. Enjoy the simplicity and convenience of a browser-based recording solution, designed to meet all your audio recording needs.",
  keywords:
    "sound recorder, online audio recorder, download recordings, free sound recorder",
  openGraph: {
    title: "Online Sound Recorder",
    description:
      "Record high-quality audio directly in your browser and download instantly, with no installation required. Ideal for quick projects and professional-grade sound.",
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
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <UserScripts />
      </body>
    </html>
  );
}
