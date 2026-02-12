
"use client";

import Link from "next/link";

export default function ExploreCategories() {
    const orange = "#FF7D32";
    const categories = [
        { title: "Innovation", desc: "Discover The Latest Innovations Reshaping Industries And Business Models." },
        { title: "Innovation", desc: "Discover The Latest Innovations Reshaping Industries And Business Models." },
        { title: "Innovation", desc: "Discover The Latest Innovations Reshaping Industries And Business Models." },
        { title: "Innovation", desc: "Discover The Latest Innovations Reshaping Industries And Business Models." },
    ];

    return (
        <section style={{ padding: '80px 0', textAlign: 'center', background: '#fff' }} id="categories">
            <div className="container px-4 px-lg-5">
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', margin: 0, fontWeight: 'bold', color: '#000', fontFamily: 'Teko, sans-serif', textTransform: 'uppercase' }}>
                        Explore Our Featured Categories
                    </h2>
                </div>

                <div className="row g-4">
                    {categories.map((cat, i) => (
                        <div key={i} className="col-6 col-md-3 wow fadeInUp" data-wow-delay={`${0.2 * i}s`}>
                            <div className="shadow-sm h-100" style={{
                                background: '#f2f2f2',
                                padding: '40px 25px',
                                borderRadius: '15px'
                            }}>
                                <div style={{ marginBottom: '25px' }}>
                                    <i className="fa-light fa-lightbulb-on" style={{ fontSize: '70px', color: orange }}></i>
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px', textTransform: 'capitalize', color: '#000' }}>
                                    {cat.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5', margin: 0 }}>
                                    {cat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

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
            </div>
        </section>
    );
}
