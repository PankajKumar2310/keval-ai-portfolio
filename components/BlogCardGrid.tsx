
"use client";

import Link from "next/link";
import Image from "next/image";

interface BlogCardGridProps {
    title: string;
    description: string;
    showBrowseAll?: boolean;
}

export default function BlogCardGrid({ title, description, showBrowseAll = false }: BlogCardGridProps) {
    const orange = "#FF7D32";

    return (
        <section style={{ padding: '60px 0', background: '#fff' }}>
            <div className="container px-4 px-lg-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
                    <div>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: 0, fontWeight: 'bold', color: '#000', fontFamily: 'Teko, sans-serif', textTransform: 'uppercase' }}>{title}</h2>
                        <p style={{ color: '#555', margin: 0 }}>{description}</p>
                    </div>
                    <Link href="/blog" className="text-decoration-none" style={{
                        background: orange,
                        color: '#fff',
                        padding: '12px 25px',
                        borderRadius: '10px',
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        display: 'inline-block',
                        width: 'fit-content'
                    }}>
                        View More
                    </Link>
                </div>

                <div className="row g-4">
                    {[4, 5, 8].map((i) => (
                        <div key={i} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.2 * i}s`}>
                            <div className="shadow-sm h-100 d-flex flex-column" style={{
                                background: '#fff',
                                border: '1px solid #eee',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                paddingBottom: '20px'
                            }}>
                                <div style={{ position: 'relative', height: '250px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', overflow: 'hidden' }}>
                                    <Image src={`/assets/img/news/0${i === 8 ? '8' : i}.jpg`} alt="blog" fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '25px', flex: '1' }}>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span style={{ color: orange, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Teko, sans-serif' }}>Innovation</span>
                                        <span style={{ color: '#888', fontSize: '14px' }}>August 2024</span>
                                    </div>
                                    <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px', color: '#000', lineHeight: '1.2' }}>
                                        The Role Of Innovation In Business Success
                                    </h3>
                                    <p style={{ fontSize: '15px', color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>
                                        Understand how innovation is critical for business success and how to cultivate it.
                                    </p>
                                    <Link href="/blog" className="text-decoration-none" style={{
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
                        <Link href="/blog" className="text-decoration-none shadow" style={{
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
