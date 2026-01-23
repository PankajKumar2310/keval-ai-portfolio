'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ClientOnly from '@/components/ClientOnly';
import Link from 'next/link';
import type { Metadata } from 'next';

export default function SoftwareDevelopmentAgencyBelgiumPage() {
    return (
        <ClientOnly>
            <Header />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Hero Section - Dark Background */}
                    <section
                        className="belgium-hero-section"
                        style={{
                            backgroundColor: '#0d1117',
                            minHeight: '60vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: '140px',
                            paddingBottom: '10px',
                        }}
                    >
                        <div className="container">
                            <div className="text-center">
                                <h1
                                    className="wow fadeInUp"
                                    data-wow-delay=".3s"
                                    style={{
                                        fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        lineHeight: '1.3',
                                    }}
                                >
                                    Best Software Development Agency
                                    <br />
                                    in Belgium
                                </h1>
                            </div>
                        </div>
                    </section>

                    {/* Intro Section - White Background */}
                    <section
                        className="belgium-intro-section section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="intro-content wow fadeInUp" data-wow-delay=".3s">
                                        <p
                                            style={{
                                                fontSize: 'clamp(14px, 2.5vw, 18px)',
                                                lineHeight: '1.8',
                                                color: '#1E1E1E',
                                                marginBottom: '24px',
                                            }}
                                        >
                                            Keval AI is a leading software development agency serving Belgium, trusted by startups, enterprises, and fast-growing companies across Belgium and Europe for building scalable, secure, and high-performance software solutions.
                                        </p>
                                        <p
                                            style={{
                                                fontSize: 'clamp(14px, 2.5vw, 18px)',
                                                lineHeight: '1.8',
                                                color: '#1E1E1E',
                                                marginBottom: '24px',
                                            }}
                                        >
                                            As a modern software development agency in Belgium, we help businesses in Brussels, Antwerp, Ghent, and across the country design and develop custom software, web applications, AI systems, and enterprise platforms that solve real operational challenges and support long-term growth.
                                        </p>
                                        <p
                                            style={{
                                                fontSize: 'clamp(14px, 2.5vw, 18px)',
                                                lineHeight: '1.8',
                                                color: '#1E1E1E',
                                                marginBottom: '0',
                                            }}
                                        >
                                            Whether you are a Belgian startup or an established European company, Keval AI delivers future-ready software development services for Belgium with a strong focus on quality, performance, and reliability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Software Development Services Section */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                            borderTop: '2px solid #FF6B35',
                            borderBottom: '2px solid #FF6B35',
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    {/* Section Header */}
                                    <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '40px' }}>
                                        <h2
                                            style={{
                                                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                                                fontWeight: 'bold',
                                                color: '#FF6B35',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                marginBottom: '20px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Software Development Services in Belgium
                                        </h2>
                                        <p
                                            style={{
                                                fontSize: 'clamp(14px, 2.5vw, 18px)',
                                                lineHeight: '1.8',
                                                color: '#1E1E1E',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Keval AI offers a full range of software development services in Belgium, designed to meet the needs of Belgian and European businesses across industries.
                                        </p>
                                    </div>

                                    {/* Service Items */}
                                    <div className="services-list">
                                        {/* Custom Software Development */}
                                        <div className="service-item wow fadeInUp" data-wow-delay=".3s" style={{ marginBottom: '32px' }}>
                                            <h3
                                                style={{
                                                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                                                    fontWeight: 'bold',
                                                    color: '#1E1E1E',
                                                    textTransform: 'uppercase',
                                                    marginBottom: '12px',
                                                }}
                                            >
                                                Custom Software Development
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                                    lineHeight: '1.7',
                                                    color: '#444444',
                                                }}
                                            >
                                                We Build Custom Software Solutions For Belgian Businesses That Are Tailored To Specific Workflows, Business Models, And Scalability Goals. Every System Is Designed From The Ground Up To Meet Your Operational Requirements In Belgium And The European Market.
                                            </p>
                                        </div>

                                        {/* Web Application Development */}
                                        <div className="service-item wow fadeInUp" data-wow-delay=".4s" style={{ marginBottom: '32px' }}>
                                            <h3
                                                style={{
                                                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                                                    fontWeight: 'bold',
                                                    color: '#1E1E1E',
                                                    textTransform: 'uppercase',
                                                    marginBottom: '12px',
                                                }}
                                            >
                                                Web Application Development
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                                    lineHeight: '1.7',
                                                    color: '#444444',
                                                }}
                                            >
                                                Our Team Develops Fast, Secure, And SEO-Friendly Web Applications For Companies Across Belgium, Using Modern Technologies Such As Next.Js, React, Node.Js, And Cloud-Native Architectures.
                                            </p>
                                        </div>

                                        {/* AI & Automation Solutions */}
                                        <div className="service-item wow fadeInUp" data-wow-delay=".5s" style={{ marginBottom: '32px' }}>
                                            <h3
                                                style={{
                                                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                                                    fontWeight: 'bold',
                                                    color: '#1E1E1E',
                                                    textTransform: 'uppercase',
                                                    marginBottom: '12px',
                                                }}
                                            >
                                                AI & Automation Solutions
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                                    lineHeight: '1.7',
                                                    color: '#444444',
                                                }}
                                            >
                                                As An Innovation-Driven Software Development Agency In Belgium, We Create AI-Powered Software And Workflow Automation Systems That Help Belgian Companies Reduce Manual Work, Improve Efficiency, And Scale Faster.
                                            </p>
                                        </div>

                                        {/* Enterprise Software Development */}
                                        <div className="service-item wow fadeInUp" data-wow-delay=".6s" style={{ marginBottom: '32px' }}>
                                            <h3
                                                style={{
                                                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                                                    fontWeight: 'bold',
                                                    color: '#1E1E1E',
                                                    textTransform: 'uppercase',
                                                    marginBottom: '12px',
                                                }}
                                            >
                                                Enterprise Software Development
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                                    lineHeight: '1.7',
                                                    color: '#444444',
                                                }}
                                            >
                                                We Design And Build Enterprise-Grade Software Solutions For Belgian Enterprises, Focusing On Security, Scalability, Compliance, And Long-Term Maintainability.
                                            </p>
                                        </div>

                                        {/* SaaS Product Development */}
                                        <div className="service-item wow fadeInUp" data-wow-delay=".7s" style={{ marginBottom: '32px' }}>
                                            <h3
                                                style={{
                                                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                                                    fontWeight: 'bold',
                                                    color: '#1E1E1E',
                                                    textTransform: 'uppercase',
                                                    marginBottom: '12px',
                                                }}
                                            >
                                                SaaS Product Development
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                                    lineHeight: '1.7',
                                                    color: '#444444',
                                                }}
                                            >
                                                Keval AI Supports Belgian Startups And European Founders With SaaS Product Development, From MVP To Production-Ready Platforms.
                                            </p>
                                        </div>

                                        {/* API & System Integrations */}
                                        <div className="service-item wow fadeInUp" data-wow-delay=".8s" style={{ marginBottom: '0' }}>
                                            <h3
                                                style={{
                                                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                                                    fontWeight: 'bold',
                                                    color: '#1E1E1E',
                                                    marginBottom: '12px',
                                                }}
                                            >
                                                API & System Integrations
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                                    lineHeight: '1.7',
                                                    color: '#444444',
                                                }}
                                            >
                                                We integrate CRMs, ERPs, third-party APIs, and internal systems for Belgian and European businesses to ensure seamless data flow and operational efficiency.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Keval AI Is Top Agency Section */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    {/* Dark Box with Heading */}
                                    <div
                                        className="wow fadeInUp belgium-image-box"
                                        data-wow-delay=".2s"
                                        style={{
                                            backgroundColor: '#1a1f26',
                                            borderRadius: '12px',
                                            padding: '40px',
                                            marginBottom: '40px',
                                            minHeight: '300px',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <style jsx>{`
                                            @media (min-width: 768px) {
                                                .belgium-image-box {
                                                    min-height: 400px !important;
                                                    justify-content: center !important;
                                                }
                                            }
                                            @media (max-width: 767px) {
                                                .belgium-image-box {
                                                    justify-content: flex-start !important;
                                                }
                                            }
                                        `}</style>
                                        <h2
                                            style={{
                                                fontSize: 'clamp(1.3rem, 4vw, 2rem)',
                                                fontWeight: 'bold',
                                                color: '#fffbfaff',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                lineHeight: '1.4',
                                                margin: 0,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Why Keval AI Is a Top Software Development Agency in Belgium
                                        </h2>
                                    </div>

                                    {/* Intro Text */}
                                    <p
                                        className="wow fadeInUp text-center"
                                        data-wow-delay=".3s"
                                        style={{
                                            fontSize: 'clamp(14px, 2.5vw, 16px)',
                                            lineHeight: '1.8',
                                            color: '#444444',
                                            marginBottom: '40px',
                                        }}
                                    >
                                        Belgian companies choose Keval AI because we go beyond development—we act as a long-term technology partner.
                                    </p>

                                    {/* What Makes Keval AI Section */}
                                    <div className="wow fadeInUp" data-wow-delay=".4s">
                                        <h3
                                            style={{
                                                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                                                fontWeight: 'bold',
                                                color: '#1E1E1E',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                marginBottom: '20px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            What Makes Keval AI One of the Best Software Development Agencies in Belgium
                                        </h3>

                                        <ul
                                            style={{
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: '0 0 30px 0',
                                            }}
                                        >
                                            {[
                                                'Deep Expertise In Custom Software Development For Belgium',
                                                'Strong Experience Serving Belgian And European Businesses',
                                                'AI-First And Automation-Ready Development Approach',
                                                'Transparent Communication And Structured Delivery',
                                                'Scalable Systems Built For Long-Term Growth',
                                                'European Business Mindset With Global Execution Capability',
                                            ].map((item, index) => (
                                                <li
                                                    key={index}
                                                    style={{
                                                        fontSize: 'clamp(13px, 2vw, 15px)',
                                                        color: '#444444',
                                                        padding: '8px 0',
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: '10px',
                                                    }}
                                                >
                                                    <span style={{ color: '#1a3a5c' }}>•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <p
                                            style={{
                                                fontSize: 'clamp(14px, 2.5vw, 16px)',
                                                lineHeight: '1.8',
                                                color: '#444444',
                                                textAlign: 'center',
                                            }}
                                        >
                                            As a trusted software development agency in Belgium, we focus on delivering measurable business outcomes, not just code.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Custom Software Solutions Section */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    {/* Dark Box with Heading */}
                                    <div
                                        className="wow fadeInUp belgium-image-box-2"
                                        data-wow-delay=".2s"
                                        style={{
                                            backgroundColor: '#1a1f26',
                                            borderRadius: '12px',
                                            padding: '40px',
                                            marginBottom: '40px',
                                            minHeight: '300px',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <style jsx>{`
                                            @media (min-width: 768px) {
                                                .belgium-image-box-2 {
                                                    min-height: 400px !important;
                                                    justify-content: center !important;
                                                }
                                            }
                                            @media (max-width: 767px) {
                                                .belgium-image-box-2 {
                                                    justify-content: flex-start !important;
                                                }
                                            }
                                        `}</style>
                                        <h2
                                            style={{
                                                fontSize: 'clamp(1.3rem, 4vw, 2rem)',
                                                fontWeight: 'bold',
                                                color: '#ffffff',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                lineHeight: '1.4',
                                                margin: 0,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Custom Software Solutions for Belgian Businesses
                                        </h2>
                                    </div>

                                    {/* Intro Text */}
                                    <p
                                        className="wow fadeInUp text-center"
                                        data-wow-delay=".3s"
                                        style={{
                                            fontSize: 'clamp(14px, 2.5vw, 16px)',
                                            lineHeight: '1.8',
                                            color: '#444444',
                                            marginBottom: '40px',
                                        }}
                                    >
                                        Every business in Belgium has unique operational challenges. That’s why Keval AI specializes in custom software solutions for Belgian businesses, not generic or off-the-shelf tools.
                                    </p>

                                    {/* Our Custom Software Approach */}
                                    <div className="wow fadeInUp" data-wow-delay=".4s">
                                        <h3
                                            style={{
                                                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                                                fontWeight: 'bold',
                                                color: '#1E1E1E',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                marginBottom: '20px',
                                            }}
                                        >
                                            Our Custom Software Approach for Belgium
                                        </h3>

                                        <ul
                                            style={{
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: '0 0 30px 0',
                                            }}
                                        >
                                            {[
                                                'Business And Workflow Analysis Specific To Belgian Companies',
                                                'Custom System Architecture Aligned With European Standards',
                                                'Secure Development Practices Suitable For EU Businesses',
                                                'Scalable Designs That Grow With Your Business In Belgium',
                                                'Clean, Documented, And Maintainable Code',
                                            ].map((item, index) => (
                                                <li
                                                    key={index}
                                                    style={{
                                                        fontSize: 'clamp(13px, 2vw, 15px)',
                                                        color: '#444444',
                                                        padding: '8px 0',
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: '10px',
                                                    }}
                                                >
                                                    <span style={{ color: '#1a3a5c' }}>•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <p
                                            style={{
                                                fontSize: 'clamp(14px, 2.5vw, 16px)',
                                                lineHeight: '1.8',
                                                color: '#1E1E1E',
                                                textAlign: 'center',
                                            }}
                                        >
                                            From internal business systems to customer-facing platforms, we help Belgian companies build software that delivers long-term ROI.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Industries We Serve Section */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '40px', textAlign: 'center' }}>
                                        <h2
                                            style={{
                                                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                                                fontWeight: 'bold',
                                                color: '#1E1E1E',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                marginBottom: '0',
                                            }}
                                        >
                                            Industries We Serve in Belgium
                                        </h2>
                                    </div>

                                    <div className="wow fadeInUp" data-wow-delay=".3s">
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                                            <li
                                                style={{
                                                    fontSize: 'clamp(13px, 2vw, 15px)',
                                                    color: '#444444',
                                                    padding: '8px 0',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px',
                                                    fontWeight: '500'
                                                }}
                                            >
                                                <span style={{ color: '#1a3a5c', fontWeight: 'bold' }}>•</span>
                                                As a specialized software development agency in Belgium, Keval AI works with a wide range of industries.
                                            </li>
                                        </ul>

                                        <p style={{ marginBottom: '20px', color: '#1a3a5c', fontWeight: 'bold', fontSize: 'clamp(13px, 2vw, 16px)' }}>
                                            Industries We Serve Across Belgium & Europe
                                        </p>

                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                                            {[
                                                'Technology & SaaS Companies',
                                                'Diamond, Gemstone & Luxury Businesses',
                                                'Manufacturing & Industrial Companies',
                                                'E-Commerce Platforms',
                                                'Professional Services & Consulting Firms',
                                                'Startups And Scale-Ups',
                                                'Enterprise Organizations'
                                            ].map((item, index) => (
                                                <li key={index} style={{
                                                    fontSize: 'clamp(13px, 2vw, 15px)',
                                                    color: '#444444',
                                                    padding: '8px 0',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px',
                                                    fontWeight: '500'
                                                }}>
                                                    <span style={{ color: '#1a3a5c', fontWeight: 'bold' }}>•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <p style={{
                                            fontSize: 'clamp(13px, 2vw, 16px)',
                                            lineHeight: '1.8',
                                            color: '#1a3a5c',
                                            fontWeight: '600',
                                        }}>
                                            Our industry knowledge allows us to design better software solutions for Belgian and European businesses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Working With Belgian & European Businesses Remotely */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '40px', textAlign: 'center' }}>
                                        <h2
                                            style={{
                                                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                                                fontWeight: 'bold',
                                                color: '#1E1E1E',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                marginBottom: '0',
                                                lineHeight: '1.4'
                                            }}
                                        >
                                            Working with Belgian & European Businesses Remotely
                                        </h2>
                                    </div>

                                    <div className="wow fadeInUp" data-wow-delay=".3s">
                                        <div style={{ marginBottom: '30px' }}>
                                            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8', color: '#444444', marginBottom: '20px' }}>
                                                Keval AI proudly works with Belgian and European businesses through a remote-first delivery model, ensuring seamless collaboration and reliable execution.
                                            </p>
                                            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8', color: '#444444', marginBottom: '20px' }}>
                                                We actively support companies across Belgium, including Brussels, Antwerp, and Ghent, as well as clients throughout the European Union.
                                            </p>
                                            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.8', color: '#1E1E1E', fontWeight: 'bold' }}>
                                                Our teams operate with full European time zone compatibility, ensuring:
                                            </p>
                                        </div>

                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                                            {[
                                                'Real-Time Communication With Belgian Companies',
                                                'Overlapping Working Hours With Belgium',
                                                'Faster Feedback Cycles',
                                                'Smooth Project Coordination For EU Businesses'
                                            ].map((item, index) => (
                                                <li key={index} style={{
                                                    fontSize: 'clamp(13px, 2vw, 15px)',
                                                    color: '#444444',
                                                    padding: '6px 0',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px'
                                                }}>
                                                    <span style={{ color: '#1a3a5c' }}>•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <p style={{
                                            fontSize: 'clamp(13px, 2vw, 15px)',
                                            lineHeight: '1.8',
                                            color: '#1a3a5c',
                                            fontWeight: '600'
                                        }}>
                                            This remote delivery model allows Keval AI to serve Belgium and European clients efficiently, without compromising quality or responsiveness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Belgian Companies Choose Keval AI */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '40px', textAlign: 'center' }}>
                                        <h2
                                            style={{
                                                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                                                fontWeight: 'bold',
                                                color: '#1E1E1E',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                marginBottom: '0',
                                            }}
                                        >
                                            Why Belgian Companies Choose Keval AI
                                        </h2>
                                    </div>

                                    <div className="wow fadeInUp" data-wow-delay=".3s">
                                        <p style={{
                                            fontSize: 'clamp(14px, 2vw, 16px)',
                                            lineHeight: '1.8',
                                            color: '#444444',
                                            marginBottom: '30px'
                                        }}>
                                            Belgian businesses choose Keval AI because we understand both technology and business execution.
                                        </p>

                                        <p style={{
                                            fontSize: 'clamp(14px, 2vw, 16px)',
                                            fontWeight: 'bold',
                                            color: '#1E1E1E',
                                            marginBottom: '20px',
                                            textTransform: 'uppercase'
                                        }}>
                                            Reasons Belgian & European Clients Trust Keval AI
                                        </p>

                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                                            {[
                                                'Proven Experience Delivering Complex Software Projects',
                                                'Clear Milestones, Timelines, And Deliverables',
                                                'Focus On Performance, Security, And Scalability',
                                                'Strong Collaboration With Teams In Belgium And Europe',
                                                'Long-Term Support And Partnership Mindset'
                                            ].map((item, index) => (
                                                <li key={index} style={{
                                                    fontSize: 'clamp(13px, 2vw, 15px)',
                                                    color: '#444444',
                                                    padding: '8px 0',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px'
                                                }}>
                                                    <span style={{ color: '#1a3a5c' }}>•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <p style={{
                                            fontSize: 'clamp(13px, 2vw, 15px)',
                                            lineHeight: '1.8',
                                            color: '#1a3a5c',
                                            fontWeight: '600'
                                        }}>
                                            We work as an extension of your internal team in Belgium, not just an external vendor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Software Development Process For Belgium */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <div className="container">
                            {/* Header */}
                            <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '50px', textAlign: 'center' }}>
                                <h2
                                    style={{
                                        fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                                        fontWeight: 'bold',
                                        color: '#FF6B35',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        marginBottom: '20px',
                                        lineHeight: '1.3'
                                    }}
                                >
                                    Our Software Development Process for Belgium
                                </h2>
                                <p
                                    style={{
                                        fontSize: 'clamp(14px, 2vw, 18px)',
                                        color: '#1a3a5c',
                                        fontWeight: '600',
                                        maxWidth: '800px',
                                        margin: '0 auto',
                                        lineHeight: '1.6'
                                    }}
                                >
                                    Our development process is designed to meet the expectations of Belgian and European companies.
                                </p>
                            </div>

                            {/* Process Steps Grid */}
                            <div className="row justify-content-center">
                                {/* Step 1 */}
                                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".3s">
                                    <div style={{
                                        backgroundColor: '#FF6B35',
                                        padding: '30px',
                                        borderRadius: '12px',
                                        color: '#ffffff',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.2)'
                                    }}>
                                        <h4 style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            marginBottom: '15px',
                                            borderBottom: '2px solid rgba(255,255,255,0.3)',
                                            paddingBottom: '10px',
                                            width: '100%'
                                        }}>
                                            Step 1: Discovery & Strategy
                                        </h4>
                                        <p style={{
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            color: '#ffffff'
                                        }}>
                                            We analyze your business goals, users, and technical needs within the Belgian and European market context.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".4s">
                                    <div style={{
                                        backgroundColor: '#FF6B35',
                                        padding: '30px',
                                        borderRadius: '12px',
                                        color: '#ffffff',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.2)'
                                    }}>
                                        <h4 style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            marginBottom: '15px',
                                            borderBottom: '2px solid rgba(255,255,255,0.3)',
                                            paddingBottom: '10px',
                                            width: '100%'
                                        }}>
                                            Step 2: Architecture & Planning
                                        </h4>
                                        <p style={{
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            color: '#ffffff'
                                        }}>
                                            We design scalable architectures and define clear milestones aligned with your business operations in Belgium.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".5s">
                                    <div style={{
                                        backgroundColor: '#FF6B35',
                                        padding: '30px',
                                        borderRadius: '12px',
                                        color: '#ffffff',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.2)'
                                    }}>
                                        <h4 style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            marginBottom: '15px',
                                            borderBottom: '2px solid rgba(255,255,255,0.3)',
                                            paddingBottom: '10px',
                                            width: '100%'
                                        }}>
                                            Step 3: Design & Development
                                        </h4>
                                        <p style={{
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            color: '#ffffff'
                                        }}>
                                            Our engineers build secure, high-performance software using modern best practices.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 4 - Bottom Row Centered */}
                                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".6s">
                                    <div style={{
                                        backgroundColor: '#FF6B35',
                                        padding: '30px',
                                        borderRadius: '12px',
                                        color: '#ffffff',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.2)'
                                    }}>
                                        <h4 style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            marginBottom: '15px',
                                            borderBottom: '2px solid rgba(255,255,255,0.3)',
                                            paddingBottom: '10px',
                                            width: '100%'
                                        }}>
                                            Step 4: Testing & Quality Assurance
                                        </h4>
                                        <p style={{
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            color: '#ffffff'
                                        }}>
                                            We test functionality, performance, and security to ensure your solution meets enterprise standards in Belgium and Europe.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 5 - Bottom Row Centered */}
                                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay=".7s">
                                    <div style={{
                                        backgroundColor: '#FF6B35',
                                        padding: '30px',
                                        borderRadius: '12px',
                                        color: '#ffffff',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.2)'
                                    }}>
                                        <h4 style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            marginBottom: '15px',
                                            borderBottom: '2px solid rgba(255,255,255,0.3)',
                                            paddingBottom: '10px',
                                            width: '100%'
                                        }}>
                                            Step 5: Deployment & Ongoing Support
                                        </h4>
                                        <p style={{
                                            fontSize: '15px',
                                            lineHeight: '1.6',
                                            color: '#ffffff'
                                        }}>
                                            We deploy your software and provide long-term support for Belgian and European businesses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Serving Businesses Across Belgium */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '40px', textAlign: 'center' }}>
                                        <h2
                                            style={{
                                                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                                                fontWeight: 'bold',
                                                color: '#1E1E1E',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                marginBottom: '0',
                                            }}
                                        >
                                            Serving Businesses Across Belgium
                                        </h2>
                                    </div>

                                    <div className="wow fadeInUp" data-wow-delay=".3s">
                                        <p style={{
                                            fontSize: 'clamp(14px, 2vw, 16px)',
                                            fontWeight: '600',
                                            color: '#1a3a5c',
                                            marginBottom: '20px'
                                        }}>
                                            Keval AI provides software development services across Belgium, including:
                                        </p>

                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                                            {[
                                                'Brussels, Belgium',
                                                'Antwerp, Belgium',
                                                'Ghent, Belgium',
                                                'Leuven',
                                                'Liège'
                                            ].map((item, index) => (
                                                <li key={index} style={{
                                                    fontSize: 'clamp(13px, 2vw, 15px)',
                                                    color: '#444444',
                                                    padding: '6px 0',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px',
                                                    fontWeight: '500'
                                                }}>
                                                    <span style={{ color: '#1a3a5c', fontWeight: 'bold' }}>•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <p style={{
                                            fontSize: 'clamp(13px, 2vw, 15px)',
                                            lineHeight: '1.8',
                                            color: '#1a3a5c',
                                            fontWeight: '600'
                                        }}>
                                            We also work with European businesses across the EU, supporting cross-border operations and international growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SEO-Friendly & Future-Ready Software Development */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '40px', textAlign: 'center' }}>
                                        <h2
                                            style={{
                                                fontSize: 'clamp(1.4rem, 4vw, 2rem)', // Slightly smaller to fit long title
                                                fontWeight: 'bold',
                                                color: '#1E1E1E',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                marginBottom: '0',
                                                lineHeight: '1.4'
                                            }}
                                        >
                                            SEO-Friendly & Future-Ready Software Development
                                        </h2>
                                    </div>

                                    <div className="wow fadeInUp" data-wow-delay=".3s">
                                        <p style={{
                                            fontSize: 'clamp(14px, 2vw, 16px)',
                                            lineHeight: '1.8',
                                            color: '#444444',
                                            marginBottom: '20px'
                                        }}>
                                            As a modern software development agency in Belgium, we build solutions that are:
                                        </p>

                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                                            {[
                                                'SEO-Optimized',
                                                'Performance-Focused',
                                                'AI-Search Ready (AEO & GEO)',
                                                'Secure And Scalable'
                                            ].map((item, index) => (
                                                <li key={index} style={{
                                                    fontSize: 'clamp(13px, 2vw, 15px)',
                                                    color: '#444444',
                                                    padding: '6px 0',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px',
                                                    fontWeight: '500'
                                                }}>
                                                    <span style={{ color: '#1a3a5c', fontWeight: 'bold' }}>•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <p style={{
                                            fontSize: 'clamp(13px, 2vw, 16px)',
                                            lineHeight: '1.8',
                                            color: '#1a3a5c',
                                            fontWeight: '600'
                                        }}>
                                            Our platforms are designed to perform well in Google search, AI answer engines, and future digital ecosystems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQS – SOFTWARE DEVELOPMENT AGENCY IN BELGIUM */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div
                                        className="wow fadeInUp"
                                        data-wow-delay=".2s"
                                        style={{
                                            backgroundColor: '#F9F9F9',
                                            borderRadius: '20px',
                                            padding: '40px 30px',
                                            marginBottom: '60px'
                                        }}
                                    >
                                        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                                            <h2
                                                style={{
                                                    fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                                                    fontWeight: 'bold',
                                                    color: '#1E1E1E',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    marginBottom: '10px',
                                                }}
                                            >
                                                FAQs –
                                                <br />
                                                Software Development Agency in Belgium
                                            </h2>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                            {[
                                                {
                                                    q: "Which is the best software development agency in Belgium?",
                                                    a: "Keval AI is a top software development agency in Belgium, known for delivering custom software, web, and AI solutions for Belgian and European businesses."
                                                },
                                                {
                                                    q: "Does Keval AI work with Belgian companies remotely?",
                                                    a: "Yes. Keval AI serves businesses across Belgium remotely with full European time zone compatibility."
                                                },
                                                {
                                                    q: "What software development services does Keval AI offer in Belgium?",
                                                    a: "We offer custom software development, web development, AI solutions, SaaS development, and enterprise software services in Belgium."
                                                },
                                                {
                                                    q: "Is Keval AI suitable for Belgian startups?",
                                                    a: "Yes. We work with Belgian startups, scale-ups, and enterprises at all growth stages."
                                                },
                                                {
                                                    q: "How can I start a project with Keval AI in Belgium?",
                                                    a: "You can contact Keval AI through our website to schedule a consultation and discuss your software development needs in Belgium."
                                                }
                                            ].map((item, index) => (
                                                <div key={index}>
                                                    <h3 style={{
                                                        fontSize: 'clamp(14px, 2vw, 16px)',
                                                        fontWeight: 'bold',
                                                        color: '#1a3a5c',
                                                        marginBottom: '10px'
                                                    }}>
                                                        {item.q}
                                                    </h3>
                                                    <p style={{
                                                        fontSize: 'clamp(13px, 2vw, 15px)',
                                                        lineHeight: '1.6',
                                                        color: '#444444',
                                                        marginBottom: '0'
                                                    }}>
                                                        {item.a}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* GET STARTED WITH A TOP SOFTWARE DEVELOPMENT AGENCY IN BELGIUM */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                            paddingBottom: '0'
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '40px', textAlign: 'center' }}>
                                        <h2
                                            style={{
                                                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                                                fontWeight: 'bold',
                                                color: '#1E1E1E',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                marginBottom: '30px',
                                                lineHeight: '1.4'
                                            }}
                                        >
                                            Get Started with a Top Software Development
                                            <br />
                                            Agency in Belgium
                                        </h2>

                                        <p style={{
                                            fontSize: 'clamp(13px, 2vw, 15px)',
                                            fontWeight: '600',
                                            color: '#1a3a5c',
                                            marginBottom: '20px'
                                        }}>
                                            If you’re looking for a reliable, experienced, and future-ready software development agency in Belgium, Keval AI is ready to partner with you.
                                        </p>

                                        <p style={{
                                            fontSize: 'clamp(13px, 2vw, 15px)',
                                            fontWeight: '600',
                                            color: '#1a3a5c',
                                            marginBottom: '20px'
                                        }}>
                                            We help Belgian and European businesses build software that:
                                        </p>

                                        <ul style={{
                                            listStyle: 'none',
                                            padding: 0,
                                            margin: '0 auto',
                                            display: 'inline-block',
                                            textAlign: 'left'
                                        }}>
                                            {[
                                                'Solves real problems',
                                                'Scales with growth',
                                                'Delivers long-term business value'
                                            ].map((item, index) => (
                                                <li key={index} style={{
                                                    fontSize: 'clamp(13px, 2vw, 15px)',
                                                    color: '#1a3a5c',
                                                    padding: '6px 0',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    fontWeight: '600'
                                                }}>
                                                    <span style={{ color: '#1a3a5c', fontWeight: 'bold' }}>-</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CONTACT CTA */}
                    <section
                        className="section-padding"
                        style={{
                            backgroundColor: '#ffffff',
                            paddingBottom: '80px'
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div
                                        className="wow fadeInUp"
                                        data-wow-delay=".3s"
                                        style={{
                                            backgroundColor: '#F7F7F7',
                                            borderRadius: '15px',
                                            padding: '50px 30px',
                                            textAlign: 'center',
                                            boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
                                        }}
                                    >
                                        <h4 style={{
                                            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                                            fontWeight: 'bold',
                                            color: '#FF6B35',
                                            textTransform: 'uppercase',
                                            marginBottom: '15px',
                                            letterSpacing: '1px'
                                        }}>
                                            Contact
                                        </h4>
                                        <h3 style={{
                                            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                                            fontWeight: 'bold',
                                            color: '#1a3a5c',
                                            textTransform: 'uppercase',
                                            lineHeight: '1.4',
                                            marginBottom: '0'
                                        }}>
                                            Contact Keval AI Today To Work With One Of The Best Software
                                            <br />
                                            Development Agencies In Belgium.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>

            <BackToTop />
        </ClientOnly>
    );
}
