
"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogHero() {
    const orange = "#FF7D32";

    return (
        <section style={{ padding: '60px 0', background: '#fff' }}>
            <div className="container px-4 px-lg-5">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h1 style={{
                        fontFamily: 'Teko, sans-serif',
                        fontSize: 'clamp(3rem, 10vw, 6rem)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        color: '#000',
                        margin: 0
                    }}>
                        BLOG & RESOURCES
                    </h1>
                </div>

                <div className="row g-4 align-items-stretch">
                    {/* Big Featured Card */}
                    <div className="col-md-7 col-lg-8 wow fadeInUp" data-wow-delay=".3s">
                        <div style={{
                            background: '#222',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            position: 'relative',
                            height: '100%',
                            minHeight: '400px',
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: '40px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <Image src="/assets/img/news/post-1.jpg" alt="blog" fill style={{ objectFit: 'cover', zIndex: 0 }} />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
                                zIndex: 1
                            }}></div>
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '15px', textTransform: 'capitalize', fontWeight: 'bold' }}>
                                    Digital Transformation For Agencies
                                </h2>
                                <p style={{ color: '#eee', fontSize: '16px', lineHeight: '1.5', margin: 0 }}>
                                    Explore How Agencies Can Successfully Implement Digital Transformation To Stay Competitive.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Side Small Cards */}
                    <div className="col-md-5 col-lg-4 d-flex flex-column gap-3">
                        {[2, 3].map((i) => (
                            <div key={i} className="wow fadeInUp shadow-sm flex-grow-1" data-wow-delay={`${0.3 + i * 0.2}s`} style={{
                                display: 'grid',
                                gridTemplateColumns: 'minmax(120px, 1fr) 1.5fr',
                                background: '#fff',
                                border: '1px solid #eee',
                                borderRadius: '20px',
                                overflow: 'hidden'
                            }}>
                                <div style={{ position: 'relative', minHeight: '150px' }}>
                                    <Image src={`/assets/img/news/post-${i}.jpg`} alt="blog" fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="d-flex flex-column justify-content-center" style={{ padding: '20px' }}>
                                    <div className="d-flex justify-content-between align-items-center mb-2" style={{ fontSize: '13px' }}>
                                        <span style={{ color: orange, fontWeight: '600' }}>Innovation</span>
                                        <span style={{ color: '#888' }}>August 2024</span>
                                    </div>
                                    <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', textTransform: 'capitalize', lineHeight: '1.3', color: '#000' }}>
                                        The Role Of Innovation In Business Success
                                    </h3>
                                    <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.4', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        Understand How Innovation Is Critical For Business Success And How To Cultivate It.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
