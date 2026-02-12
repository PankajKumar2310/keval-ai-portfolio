'use client';

import { Blog, BlogContent } from '@/lib/blogs';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useState } from 'react';

interface BlogDetailProps {
  blog: Blog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  
  const primaryColor = "#FF6B35";
  const textColor = "#1E1E1E";
  const secondaryTextColor = "#444444";
  const borderColor = "#e5e7eb";

  const renderContent = (content: BlogContent, index: number) => {
    switch (content.type) {
      case 'heading':
        return (
          <h2 key={index} className="wow fadeInUp" data-wow-delay={`${0.1 * index}s`} style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontWeight: 'bold',
            color: primaryColor,
            margin: '50px 0 25px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            lineHeight: '1.3',
            textAlign: 'center'
          }}>
            {content.content}
          </h2>
        );

      case 'text':
        return (
          <div key={index} className="wow fadeInUp" data-wow-delay={`${0.1 * index}s`} style={{
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            lineHeight: '1.8',
            color: textColor,
            margin: '25px 0',
            textAlign: 'left'
          }}>
            {content.content.split('\n').map((paragraph, pIndex) => (
              <p key={pIndex} style={{ margin: '20px 0' }}>
                {paragraph}
              </p>
            ))}
          </div>
        );

      case 'image-left':
        return (
          <div key={index} className="row align-items-center wow fadeInUp" data-wow-delay={`${0.1 * index}s`} style={{ margin: '60px 0' }}>
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div style={{ 
                position: 'relative', 
                height: '500px', 
                borderRadius: '15px', 
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
              }}>
                <Image 
                  src={content.image || ''} 
                  alt="Blog content" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                lineHeight: '1.8',
                color: textColor,
                padding: '20px',
                textAlign: 'left'
              }}>
                {content.content.split('\n').map((paragraph, pIndex) => (
                  <p key={pIndex} style={{ margin: '20px 0' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );

      case 'image-right':
        return (
          <div key={index} className="row align-items-center wow fadeInUp" data-wow-delay={`${0.1 * index}s`} style={{ margin: '60px 0' }}>
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div style={{ 
                position: 'relative', 
                height: '500px', 
                borderRadius: '15px', 
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
              }}>
                <Image 
                  src={content.image || ''} 
                  alt="Blog content" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div style={{
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                lineHeight: '1.8',
                color: textColor,
                padding: '20px',
                textAlign: 'left'
              }}>
                {content.content.split('\n').map((paragraph, pIndex) => (
                  <p key={pIndex} style={{ margin: '20px 0' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );

      case 'image-center':
        return (
          <div key={index} className="wow fadeInUp" data-wow-delay={`${0.1 * index}s`} style={{ margin: '60px 0', textAlign: 'center' }}>
            <div style={{ 
              position: 'relative', 
              height: '600px', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              margin: '0 auto',
              maxWidth: '1000px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
            }}>
              <Image 
                src={content.image || ''} 
                alt="Blog content" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>
        );

      case 'list': {
        const faqBlocks = content.content.split('\n\n').filter(block => block.trim());
        
        return (
          <div key={index} className="wow fadeInUp" data-wow-delay={`${0.1 * index}s`} style={{ margin: '40px 0' }}>
            <div
              style={{
                backgroundColor: '#F9F9F9',
                borderRadius: '20px',
                padding: '40px 30px',
                marginBottom: '60px'
              }}
            >
             

              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {faqBlocks.map((block, blockIndex) => {
                  const lines = block.split('\n').filter(line => line.trim());

                  const questionLine = lines.find(line =>
                    line.trim().startsWith('•')
                  );
                  const answerLine = lines.find(line =>
                    line.trim().startsWith('->')
                  );

                  const question = questionLine
                    ? questionLine.replace('•', '').trim()
                    : '';

                  const answer = answerLine
                    ? answerLine.replace('->', '').trim()
                    : '';

                  return (
                    <div key={blockIndex}>
                      <h3 style={{
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        fontWeight: 'bold',
                        color: '#1a3a5c',
                        marginBottom: '10px'
                      }}>
                        {question}
                      </h3>
                      <p style={{
                        fontSize: 'clamp(13px, 2vw, 15px)',
                        lineHeight: '1.6',
                        color: '#444444',
                        marginBottom: '0'
                      }}>
                        {answer}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section - Dark Background */}
      <section
        className="belgium-hero-section"
        style={{
          backgroundImage: `url(${blog.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh',
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
                textAlign: 'center'
              }}
            >
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section - White Background */}
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
                  {/* Blog Meta */}
                  <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: '40px' }}>
                    <p
                      style={{
                        fontSize: 'clamp(14px, 2.5vw, 18px)',
                        lineHeight: '1.8',
                        color: '#1E1E1E',
                        textAlign: 'left',
                        marginBottom: '24px',
                      }}
                    >
                    </p>
                    <p
                      style={{
                        fontSize: 'clamp(14px, 2.5vw, 18px)',
                        lineHeight: '1.8',
                        color: '#1E1E1E',
                        textAlign: 'left',
                        marginBottom: '0',
                      }}
                    >
                      {blog.metaDescription}
                    </p>
                  </div>

                  {/* Blog Content */}
                  {blog.content.map((content, index) => renderContent(content, index))}
                  
                  {/* CTA Section */}
                  <div className="wow fadeInUp" data-wow-delay=".5s" style={{
                    background: 'linear-gradient(135deg, #1d142eff 0%, #1d142eff 100%)',
                    borderRadius: '25px',
                    padding: '60px',
                    margin: '80px 0',
                    textAlign: 'center',
                    color: '#fff',
                    boxShadow: '0 20px 40px rgba(255, 107, 53, 0.2)'
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                      fontWeight: 'bold',
                      margin: '0 0 25px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      lineHeight: '1.3',
                      textAlign: 'center',
                      color: '#fff',
                    }}>
                      Ready to Start Your Project?
                    </h2>
                    <p style={{
                      fontSize: 'clamp(14px, 2.5vw, 18px)',
                      margin: '0 0 40px 0',
                      opacity: '0.9',
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      Get a free consultation and custom pricing estimate for your software development needs.
                    </p>
                    <Link 
                      href="/best-software-development-agency-belgium"
                      className="text-decoration-none"
                      style={{
                        background: '#fff',
                        color: primaryColor,
                        padding: '18px 50px',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        display: 'inline-block',
                        textTransform: 'uppercase',
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        letterSpacing: '1px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Book Free Consultation
                    </Link>
                  </div>

                  {/* Back to Blogs */}
                  <div className="text-center wow fadeInUp" data-wow-delay=".6s" style={{ marginTop: '60px' }}>
                    <Link 
                      href="/blog"
                      className="text-decoration-none"
                      style={{
                        color: primaryColor,
                        fontWeight: '600',
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '15px 30px',
                        border: '2px solid #FF6B35',
                        borderRadius: '50px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      ← Back to All Blogs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
