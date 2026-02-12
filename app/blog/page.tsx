'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import BlogHeader from "@/components/BlogHeader";
import BlogHero from "@/components/BlogHero";
import BlogCardGrid from "@/components/BlogCardGrid";
import SubscribeSection from "@/components/SubscribeSection";
import ExploreCategories from "@/components/ExploreCategories";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ClientOnly from "@/components/ClientOnly";
import Headers from "@/components/Header";
import { blogs } from "@/lib/blogs";

export default function BlogPage() {
    const [showAllBlogs, setShowAllBlogs] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);

    return (
        <ClientOnly>
            <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
                <Headers/>
                
                {/* Hero Section with Banner */}
                <div
                    className="breadcrumb-wrapper bg-cover"
                    style={{
                        backgroundImage: "url('/assets/keval-image/about-hero-banner.png')",
                    }}
                >
                    <div className="container">
                        <div className="page-heading">
                            <div className="breadcrumb-sub-title">
                                <h1
                                    className="wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    Blog & Resources
                                </h1>
                            </div>
                            <ul
                                className="breadcrumb-items wow fadeInUp"
                                data-wow-delay=".5s"
                                style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: '20px 0 0 0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: '#ffffff'
                                }}
                            >
                                <li>
                                    <Link href="/" style={{ 
                                        color: '#ffffff', 
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        <i className="fa-regular fa-house"></i>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <i className="fa-solid fa-slash-forward"></i>
                                </li>
                                <li>Blog & Resources</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <main>
                    <BlogHero />
                    <BlogCardGrid
                        title="Latest Blogs"
                        description="Stay updated with our latest insights and articles"
                        showBrowseAll={false}
                        category={null}
                        limit={showAllBlogs ? blogs.length : 6}
                    />
                    <div className="container px-4 px-lg-5">
                        <div className="text-center" style={{ marginTop: '40px', marginBottom: '60px' }}>
                            <button 
                                onClick={() => setShowAllBlogs(!showAllBlogs)}
                                className="text-decoration-none"
                                style={{
                                    background: '#FF7D32',
                                    color: '#fff',
                                    padding: '15px 40px',
                                    borderRadius: '50px',
                                    fontWeight: '600',
                                    display: 'inline-block',
                                    textTransform: 'uppercase',
                                    fontSize: '16px',
                                    letterSpacing: '1px',
                                    boxShadow: '0 10px 25px rgba(255, 125, 50, 0.2)',
                                    transition: 'all 0.3s ease',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                {showAllBlogs ? 'Show Less Blogs' : 'Browse All Blogs'}
                            </button>
                        </div>
                    </div>
                    {/* <SubscribeSection /> */}
                    {/* <ExploreCategories /> */}
                </main>
                <Footer />
                <BackToTop />
            </div>
        </ClientOnly>
    );
}
