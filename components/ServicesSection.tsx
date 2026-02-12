'use client';

import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    id: 1,
    number: '01',
    titleLines: ['HIGH', 'CONVERSION', 'WEBSITE'],
    description:
      'Keval AI creates websites that look great and convert visitors into customers. Fast, user-friendly, and optimized for growth.',
    features: ['User Friendly', 'Fast Loading', 'Conversion'],
  },
  {
    id: 2,
    number: '02',
    titleLines: ['INVENTORY', 'MANAGEMENT', 'SYSTEMS'],
    description:
      'Simplify your stock operations with Keval AI\'s inventory systems. Track, manage, and optimize efficiently with minimal errors.',
    features: ['Stock Track', 'Auto Update', 'Error Free'],
  },
  {
    id: 3,
    number: '03',
    titleLines: ['MVP', 'development'],
    description:
      'Turn ideas into reality quickly with Keval AI\'s MVP development. Launch scalable prototypes that validate your concept with real users.',
    features: ['Quick Launch', 'Scalable MVP', 'User Test'],
  },
  {
    id: 4,
    number: '04',
    titleLines: ['CRM AND', 'ERP'],
    description:
      'Manage clients, resources, and workflows effortlessly with Keval AI\'s CRM & ERP solutions. Gain insights and automate business operations.',
    features: ['Client Data', 'Workflow', 'Insights'],
  },
  {
    id: 5,
    number: '05',
    titleLines: ['Marketing', 'solutions'],
    description:
      'Drive growth with Keval AI\'s marketing services. Plan, execute, and target the right audience for measurable results.',
    features: ['Strategy', 'Campaigns', 'Targeting'],
  },
];

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="service-section-4 section-padding section-bg">
      <div className="container">
        <div className="section-title style-4 title-anim">
          <h3 className="heading_text">Services we offer</h3>
        </div>
        <div className="service-wrapper-4 mt-4 mt-md-0">
          <div className="row g-xxl-6 g-4">
            <div className="service-tabing-wrap Faqs-section position-relative">
              {services.map((service, index) => {
                // Desktop: Show 4 items (1, 2, 3, 4)
                // Mobile: Show 4 items (1, 2, 3, 4)
                let visibilityClass = '';
                if (index >= 4) {
                  visibilityClass = 'd-none'; // Hide Item 05 everywhere
                }

                return (
                  <div
                    key={service.id}
                    className={`accordion-single py-md-5 py-3 bt-border wow fadeInUp ${visibilityClass}`}
                    data-wow-delay={`${0.2 + service.id * 0.2}s`}
                  >
                    <div className="header-area">
                      <div className="accordion-btn d-flex align-items-center justify-content-between position-relative w-100 px-md-0 px-2">
                        {/* Column 1: Number and Title (33% on mobile) */}
                        <div className="mtitle-ara style2 col-mobile">
                          <span className="mtitle d-block">
                            <Link
                              href="/service-details"
                              className="white-clr whitehover"
                            >
                              {service.number}. {service.titleLines.map((line, idx) => (
                                <span key={idx} className="title-line">
                                  {line}
                                  {idx < service.titleLines.length - 1 && <br />}
                                </span>
                              ))}
                            </Link>
                          </span>
                        </div>

                        {/* Column 2: Description (Removed on mobile) */}
                        <div
                          className="hover_text d-md-flex d-none"
                          onMouseEnter={() => setHoveredId(service.id)}
                          onMouseLeave={() => setHoveredId(null)}
                          style={{
                            color: hoveredId === service.id ? 'rgba(0, 0, 0, 1)' : 'transparent',
                            flex: 1,
                            marginLeft: '20px',
                            padding: '10px',
                            borderRadius: '4px',
                            transition: 'background-color 0.3s ease'
                          }}
                        >
                          <p>{service.description}</p>
                        </div>

                        {/* Column 3: Features (33% on mobile) */}
                        <div className="mobile-features-wrap col-mobile">
                          <ul className="modern-list-mobile d-grid gap-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="d-flex align-items-center gap-2">
                                <i className="fas fa-chevron-right"></i>
                                <span className="feature-text">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          {/* Desktop features (hidden on mobile) */}
                          <div className="d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                            <ul className="modern-list d-grid gap-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="d-flex align-items-center gap-2">
                                  <i className="fas fa-chevron-right"></i> {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Column 4: Button (33% on mobile) */}
                        <div className="custom-btn-wrapper col-mobile d-flex justify-content-end">
                          <div className="header-button">
                            <Link href="/service-details" className="theme-btn2 border-white figma-btn">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="text-center mt-5">
                <div className="header-button">
                  <Link href="/service" className="theme-btn2 border-white figma-btn-all">
                    <span className="icon-1 d-md-inline-block d-none"></span>
                    View ALL Services
                    <span className="icon-2 d-md-inline-block d-none"></span>
                  </Link>
                </div>
              </div>

              <style jsx>{`
                @media (max-width: 991px) {
                  .accordion-btn {
                    flex-wrap: nowrap !important;
                    align-items: center !important;
                    gap: 10px !important;
                  }
                  .col-mobile {
                    width: 33.33% !important;
                    flex: 0 0 33.33% !important;
                    min-width: 0 !important;
                  }
                  .mtitle-ara {
                    width: 100% !important;
                    overflow: hidden !important;
                  }
                  .mtitle {
                    font-size: clamp(7px, 1.8vw, 9.5px) !important;
                    font-weight: 700 !important;
                    text-transform: uppercase !important;
                    line-height: 1.3 !important;
                    display: block !important;
                    width: 100% !important;
                    white-space: normal !important;
                    word-break: break-word !important;
                    overflow-wrap: anywhere !important;
                    margin-top: 0 !important;
                  }
                  .mtitle a {
                    font-size: inherit !important;
                    color: #000 !important;
                    display: block !important;
                    width: 100% !important;
                    white-space: normal !important;
                    word-break: break-word !important;
                    overflow-wrap: anywhere !important;
                  }
                  .title-line {
                    display: block !important;
                  }
                  .mobile-features-wrap {
                    display: flex !important;
                    justify-content: flex-start !important;
                    padding-left: 10px !important;
                  }
                  .modern-list-mobile {
                    list-style: none !important;
                    padding: 0 !important;
                    margin: 0 !important;
                  }
                  .modern-list-mobile li {
                    font-size: clamp(7px, 2.2vw, 10px) !important;
                    font-weight: 500 !important;
                    color: #333 !important;
                    white-space: nowrap !important;
                  }
                  .modern-list-mobile i {
                    font-size: 7px !important;
                    color: #555 !important;
                  }
                  .figma-btn {
                    background-color: #0d213d !important;
                    color: #fff !important;
                    padding: 4px 6px !important;
                    font-size: clamp(6px, 1.5vw, 8.5px) !important;
                    font-weight: 600 !important;
                    border-radius: 4px !important;
                    border: none !important;
                    width: auto !important;
                    height: auto !important;
                    line-height: normal !important;
                    text-transform: none !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    transition: all 0.3s ease !important;
                  }
                  .figma-btn-all {
                    background-color: #0d213d !important;
                    color: #fff !important;
                    padding: 10px 20px !important;
                    font-size: 14px !important;
                    font-weight: 600 !important;
                    border-radius: 4px !important;
                    border: none !important;
                    text-transform: none !important;
                  }
                  .accordion-single {
                    padding-top: 1rem !important;
                    padding-bottom: 1rem !important;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
