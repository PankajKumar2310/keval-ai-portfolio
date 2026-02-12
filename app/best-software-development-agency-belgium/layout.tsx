import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Software Development Agency in Belgium | Keval AI',
    description:
        'Keval AI is a top software development agency serving Belgium, delivering custom software, automation, and digital solutions to help your business grow and succeed.',
    alternates: {
        canonical: 'https://www.kevalai.com/best-software-development-agency-belgium',
    },
};

export default function SoftwareDevelopmentAgencyBelgiumLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
