// Global document shell, metadata, and branded social sharing.
import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import { headers } from "next/headers";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const serif = Lora({ variable: "--font-serif", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "aerocomfort.example";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = new URL("/og.png", origin).toString();
  return {
    metadataBase: new URL(origin),
    title: { default: "AeroComfort Heating & Air", template: "%s | AeroComfort" },
    description: "Trusted local heating, cooling, and indoor air quality service with same-day appointments and upfront pricing.",
    openGraph: { title: "AeroComfort Heating & Air", description: "Reliable comfort. Right when you need it.", images: [{ url: socialImage, width: 1200, height: 630, alt: "AeroComfort Heating & Air" }] },
    twitter: { card: "summary_large_image", title: "AeroComfort Heating & Air", description: "Reliable comfort. Right when you need it.", images: [socialImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}
// End global document shell.
