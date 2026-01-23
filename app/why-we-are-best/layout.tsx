import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Software Development Agency in Belgium | Keval AI',
    description:
        'Keval AI is a top software development agency in Belgium, delivering custom software, web, and AI solutions for Belgian and European businesses.',
    alternates: {
        canonical: 'https://www.kevalai.com/software-development-agency-belgium',
    },
};

export default function SoftwareDevelopmentAgencyBelgiumLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
