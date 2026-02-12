'use client';

import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    image: '/assets/keval-image/portfolio/dalila-diamonds.png',
    title: 'Premium UI designs',
    description:
      'We craft visually stunning and intuitively designed digital experiences tailored for the diamond and gemstone industry. Our premium UI designs blend luxury aesthetics with seamless functionality, ensuring your brand reflects sophistication and excellence at every digital touchpoint.',
  },
  {
    image: '/assets/keval-image/offers-we/Millenium.jpg',
    title: 'End to End Inventory Management Solutions',
    description:
      'Our advanced inventory management systems are built to handle the precision and scale of diamond and gem trading. From stock tracking to pricing automation and reporting, we deliver a complete solution that optimizes operations, enhances transparency, and supports smarter business decisions.',
  },
  {
    image: '/assets/keval-image/offers-we/AI.jpg',
    title: 'AI Automations',
    description:
      'Harness the power of artificial intelligence to revolutionize your diamond and gemstone business. Our AI-driven tools streamline operations, improve data accuracy, and provide predictive insights — empowering your business to operate faster, smarter, and more efficiently.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="service-section-5 weKnow_section fix my-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="weKnow_section_bg_image">
        <div className="container">
          <div className="row g-4 my-5">
            <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-box-items-5">
                <div className="content text-center">
                  <h3 className="fw-bold">
                    <Link
                      href="#"
                      style={{
                        color: '#00072D',
                        fontSize: 'clamp(24px, 4vw, 36px)'
                      }}
                    >
                      Because your unique business needs are <br /> exactly
                      that — yours.
                    </Link>
                  </h3>
                  <p className="fs-5" style={{ color: '#000000' }}>
                    We offer powerful, flexible solutions for every need, no
                    matter the complexity. Simply put, we&apos;re built to scale.
                    That means more growth for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="service-box-items-5 text-center text-lg-start">
                  <div
                    className="card_image image_border mx-auto mx-lg-0"
                    style={{
                      width: '100%',
                      maxWidth: '400px', // Limiting width for mobile reduced look
                      aspectRatio: '1/1', // Keeping it square-ish like reference
                      height: 'auto',
                      borderRadius: '30px',
                      overflow: 'hidden',
                      position: 'relative',
                      marginBottom: '20px'
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="content pt-3 px-2">
                    <h5 className="text-uppercase fw-bold">
                      <Link href="#" style={{ color: '#00072D' }}>{feature.title}</Link>
                    </h5>
                    <p className="text-uppercase" style={{ color: '#000000', fontSize: '14px', lineHeight: '1.6' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-100 text-center mt-5">
            <div className="header-button">
              <Link
                href="/about"
                className="theme-btn rounded-2 text-white border-white"
              >
                <span className="icon-1"></span>
                Learn more
                <span className="icon-2"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

