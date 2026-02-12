import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Keval AI | Smart AI Automation & Business Solutions",
    description:
        "Learn about Keval AI, our mission, and how we help businesses grow with practical AI automation, chatbots, CRM systems, and smart digital solutions.",
    alternates: {
        canonical: "https://www.kevalai.com/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
