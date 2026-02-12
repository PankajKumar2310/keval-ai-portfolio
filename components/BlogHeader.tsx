
"use client";

import Link from "next/link";
import { useState } from "react";

export default function BlogHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const orange = "#FF7D32";

    return (
        <header style={{ background: '#fff', padding: '20px 0' }}>
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="d-flex justify-content-center align-items-center position-relative">
                    <nav className="d-none d-md-block">
                        <ul className="d-flex list-unstyled m-0" style={{ gap: '30px' }}>
                            <li>
                                <Link href="/blog" className="text-decoration-none text-uppercase fw-medium" style={{ color: '#000', fontSize: '16px' }}>
                                    Blog <i className="fa-regular fa-chevron-down ms-1"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog#categories" className="text-decoration-none text-uppercase fw-medium" style={{ color: '#000', fontSize: '16px' }}>
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-decoration-none text-uppercase fw-medium" style={{ color: '#000', fontSize: '16px' }}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="d-md-none" style={{ position: 'absolute', left: 0 }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className="fa-solid fa-bars" style={{ fontSize: '24px', color: '#000', cursor: 'pointer' }}></i>
                    </div>

                    {/* <div style={{ position: 'absolute', right: 0 }}>
                        <button className="border-0 bg-transparent">
                            <i className="fa-regular fa-magnifying-glass" style={{ fontSize: '20px', color: '#000' }}></i>
                        </button>
                    </div> */}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="d-md-none shadow-sm" style={{ background: '#fff', padding: '20px', position: 'absolute', width: '100%', left: 0, zIndex: 1000 }}>
                    <ul className="list-unstyled m-0 d-flex flex-column" style={{ gap: '15px' }}>
                        <li><Link href="/blog" className="text-decoration-none text-dark fw-medium" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                        <li><Link href="/blog#categories" className="text-decoration-none text-dark fw-medium" onClick={() => setIsMenuOpen(false)}>Categories</Link></li>
                        <li><Link href="/contact" className="text-decoration-none text-dark fw-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
