import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Automation, Software & Business Solutions",
    description:
        "Explore Keval AI services: AI automation, smart software, chatbots, CRM & custom digital solutions designed to boost efficiency and grow your business.",
    alternates: {
        canonical: "https://www.kevalai.com/service",
    },
};

export default function ServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
