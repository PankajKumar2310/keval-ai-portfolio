import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import MouseCursor from "@/components/MouseCursor";
import AppLoader from "@/components/AppLoader";

import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/all.min.css";
import "../public/assets/css/animate.css";
import "../public/assets/css/icomoon.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/meanmenu.css";
import "../public/assets/css/swiper-bundle.min.css";
import "../public/assets/css/nice-select.css";
import "../public/assets/css/color.css";
import "../public/assets/css/main.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AI Automation & Smart Business Solutions | Keval AI",
    description:
        "Keval AI helps businesses grow with practical AI automation, chatbots, and smart software solutions designed to save time and improve customer experience.",
    authors: [{ name: "Keval AI" }],
    icons: { icon: "/assets/keval-image/logo/Keval AI Favicon- Blue.png" },
    verification: {
        google: "TSZvYKMKuqFhYvsCGvz_hwhBcfT5OK3xstwRydmPq-U",
    },
    alternates: {
        canonical: "https://www.kevalai.com/",
    },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "kevalai",
        url: "https://www.kevalai.com/",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://www.kevalai.com/service{search_term_string}https://www.kevalai.com/portfolio",
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <html lang="en">
            <head>
                {/* Add the JSON-LD script here */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.className} react-app`}>
                <MouseCursor />

                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-GXDYXNRVYV"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GXDYXNRVYV');
          `}
                </Script>

                {/* jQuery first */}
                <Script
                    src="/assets/js/jquery-3.7.1.min.js"
                    strategy="beforeInteractive"
                />

                {/* Core plugins */}
                <Script
                    src="/assets/js/bootstrap.bundle.min.js"
                    strategy="lazyOnload"
                />
                <Script
                    id="viewport-jquery"
                    src="/assets/js/viewport.jquery.js"
                    strategy="lazyOnload"
                />
                <Script
                    src="/assets/js/swiper-bundle.min.js"
                    strategy="lazyOnload"
                />

                {/* GSAP suite */}
                <Script src="/assets/js/gsap.js" strategy="lazyOnload" />
                <Script
                    src="/assets/js/gsap-scroll-trigger.js"
                    strategy="lazyOnload"
                />
                <Script
                    src="/assets/js/gsap-scroll-smoother.js"
                    strategy="lazyOnload"
                />
                <Script
                    src="/assets/js/gsap-scroll-to-plugin.js"
                    strategy="lazyOnload"
                />
                <Script
                    src="/assets/js/gsap-split-text.js"
                    strategy="lazyOnload"
                />

                {/* Non-critical jQuery Plugins */}
                <Script
                    src="/assets/js/jquery.nice-select.min.js"
                    strategy="lazyOnload"
                />
                <Script
                    src="/assets/js/jquery.waypoints.js"
                    strategy="lazyOnload"
                />
                <Script
                    src="/assets/js/jquery.counterup.min.js"
                    strategy="lazyOnload"
                />
                <Script
                    src="/assets/js/jquery.meanmenu.min.js"
                    strategy="lazyOnload"
                />
                <Script
                    src="/assets/js/jquery.magnific-popup.min.js"
                    strategy="lazyOnload"
                />
                <Script src="/assets/js/parallax.js" strategy="lazyOnload" />
                <Script src="/assets/js/chroma.min.js" strategy="lazyOnload" />

                {/* Animations */}
                <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/animation.js" strategy="lazyOnload" />
                <Script
                    src="/assets/js/customer-gsap-animation.js"
                    strategy="lazyOnload"
                />

                {/* Custom Matter.js simulation */}
                <Script
                    src="/assets/js/tags-simulation.js"
                    strategy="lazyOnload"
                />

                {/* Main JS */}
                <Script src="/assets/js/main.js" strategy="lazyOnload" />

                <AppLoader>{children}</AppLoader>
            </body>
        </html>
    );
}
