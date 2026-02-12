
"use client";

import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/blogs";

interface BlogCardGridProps {
    title?: string;
    description?: string;
    showBrowseAll?: boolean;
    category?: string;
    limit?: number;
}

export default function BlogCardGrid({ title, description, showBrowseAll = false, category, limit }: BlogCardGridProps) {
    const orange = "#FF7D32";

    // Filter blogs by category if specified, otherwise get all blogs
    const filteredBlogs = category 
        ? blogs.filter(blog => blog.category === category)
        : blogs;

    // Limit the number of blogs if specified
    const displayBlogs = limit ? filteredBlogs.slice(0, limit) : filteredBlogs;

    // If no title provided, use category name or default
    const displayTitle = title || (category ? category : 'Latest Blogs');
    const displayDescription = description || (category ? `Explore our latest ${category} articles and insights.` : 'Discover the latest insights and trends in software development and technology.');

    return (
        <section style={{ padding: '60px 0', background: '#fff' }}>
            <div className="container px-4 px-lg-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
                    <div>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: 0, fontWeight: 'bold', color: '#000', fontFamily: 'Teko, sans-serif', textTransform: 'uppercase' }}>{displayTitle}</h2>
                        <p style={{ color: '#555', margin: 0 }}>{displayDescription}</p>
                    </div>
                   
                </div>

                <div className="row g-4">
                    {displayBlogs.map((blog, index) => (
                        <div key={blog.id} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.2 * index}s`}>
                            <div className="shadow-sm h-100 d-flex flex-column" style={{
                                background: '#fff',
                                border: '1px solid #eee',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                paddingBottom: '20px'
                            }}>
                                <div style={{ position: 'relative', height: '250px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', overflow: 'hidden' }}>
                                    <Image src={blog.bannerImage} alt={blog.title} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '25px', flex: '1' }}>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span style={{ color: orange, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Teko, sans-serif' }}>{blog.category}</span>
                                        <span style={{ color: '#888', fontSize: '14px' }}>{blog.publishDate}</span>
                                    </div>
                                    <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px', color: '#000', lineHeight: '1.2' }}>
                                        {blog.title}
                                    </h3>
                                    <p style={{ fontSize: '15px', color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>
                                        {blog.metaDescription}
                                    </p>
                                    <Link href={`/blog/${blog.slug}`} className="text-decoration-none" style={{
                                        background: orange,
                                        color: '#fff',
                                        padding: '12px 25px',
                                        borderRadius: '100px',
                                        display: 'inline-block',
                                        fontWeight: '700'
                                    }}>
                                        Read Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {showBrowseAll && (
                    <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".5s">
                        <Link href="/blog/all" className="text-decoration-none shadow" style={{
                            background: orange,
                            color: '#fff',
                            padding: '15px 40px',
                            borderRadius: '12px',
                            fontSize: '20px',
                            fontWeight: '700',
                            display: 'inline-block'
                        }}>
                            Browse All Blogs!
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
