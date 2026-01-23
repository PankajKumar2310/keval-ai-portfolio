
"use client";

import { useEffect } from "react";
import BlogHeader from "@/components/BlogHeader";
import BlogHero from "@/components/BlogHero";
import BlogCardGrid from "@/components/BlogCardGrid";
import SubscribeSection from "@/components/SubscribeSection";
import ExploreCategories from "@/components/ExploreCategories";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ClientOnly from "@/components/ClientOnly";

export default function BlogPage() {
    useEffect(() => {
        // Re-initialize animations
        setTimeout(() => {
            if (typeof window !== 'undefined') {
                if ((window as any).WOW) {
                    new (window as any).WOW().init();
                }
            }
        }, 300);
    }, []);

    return (
        <ClientOnly>
            <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
                <BlogHeader />
                <main>
                    <BlogHero />

                    <BlogCardGrid
                        title="Marketing"
                        description="Delve Into The Latest Marketing Trends And Effective Campaign Strategies."
                        showBrowseAll={true}
                    />

                    <SubscribeSection />

                    <BlogCardGrid
                        title="Innovation"
                        description="Discover The Latest Innovations Reshaping Industries And Business Models."
                        showBrowseAll={true}
                    />

                    <ExploreCategories />
                </main>
                <Footer />
                <BackToTop />
            </div>
        </ClientOnly>
    );
}
