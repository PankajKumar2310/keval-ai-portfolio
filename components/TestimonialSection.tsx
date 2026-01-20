'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-cards';

interface Testimonial {
  image: string;
  name: string;
  position: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    image: '/assets/keval-image/testimonal/Dalila-CEO.jpg',
    name: 'A. De Vries',
    position: 'Dalila CEO',
    text: `Working with Keval AI completely transformed our online presence.`,
  },
  {
    image: '/assets/keval-image/testimonal/Donai-co-founder.jpg',
    name: 'M. Janssens',
    position: 'Donai Co-Founder',
    text: `We wanted a robust inventory + ERP system tailored for our diamond business.`,
  },
  {
    image: '/assets/keval-image/testimonal/Millenium-Inventory.jpg',
    name: 'L. Bertrand',
    position: 'Millenium Inventory Executive',
    text: `From MVP development to final launch, Keval AI's team was professional and detail-oriented.`,
  },
];

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="testimonial-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url('/assets/img/testimonial/bg.jpg')",
      }}
    >
      <div className="container">
        <div className="testimonial-wrapper">
          <div className="row g-4 align-items-center">
            {/* ✅ Left Column (Content) */}
            <div className="col-lg-6">
              <div className="testimonial-content d-flex flex-column">
                <div className="section-title text-center text-lg-start order-1">
                  <h6 className="wow fadeInUp testimonial-heading-left">testimonials</h6>
                  <h2 className="text-white tp-char-animation testimonial-main-title"
                    style={{
                      font: 'bold'
                    }}>
                    Our clients awesome Testimonials
                  </h2>
                </div>

                {/* ✅ Button - Below Title on mobile, Bottom on desktop */}
                <div className="header-button-wrapper mt-4 mt-lg-5 text-center text-lg-start order-2 order-lg-4">
                  <Link href="/about" className="theme-btn border-white">
                    <span className="icon-1"></span>
                    connect with us
                    <span className="icon-2"></span>
                  </Link>
                </div>

                {/* ✅ Rating Box - Below Button on mobile, Above Button on desktop */}
                <div className="ratting-box-wrapper mt-4 mt-lg-0 order-3 order-lg-2 d-flex justify-content-center justify-content-lg-start">
                  <div className="ratting-box wow fadeInUp" data-wow-delay=".5s">
                    <h3>
                      <span className="count">50</span>
                    </h3>
                    <div className="content">
                      <div className="star">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Right Column (Swiper Slider) */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="swiper-container-wrapper text-center">
                <Swiper
                  modules={[Autoplay, EffectCards]}
                  effect="cards"
                  grabCursor
                  loop={false}
                  speed={600}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    waitForTransition: true,
                    reverseDirection: false,
                  }}
                  cardsEffect={{
                    perSlideRotate: 2,
                    perSlideOffset: 8,
                    rotate: true,
                    slideShadows: true,
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                    // Loop back to first slide when reaching the end
                    if (swiper.activeIndex === testimonials.length - 1) {
                      setTimeout(() => {
                        swiper.slideTo(0);
                      }, 3000);
                    }
                  }}
                  className="testimonial-slider"
                >
                  {testimonials.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="testimonial-box-items">
                        <div className="client-info">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-circle"
                          />
                          <div className="client-content">
                            <h5>{item.name}</h5>
                            <p>{item.position}</p>
                          </div>
                        </div>
                        <div className="testi-content">
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="27"
                              height="20"
                              viewBox="0 0 27 20"
                              fill="none"
                            >
                              <path
                                d="M26.666 -0.222168V19.7778L16.666 9.77783V-0.222168H26.666Z"
                                fill="#59D2F3"
                              />
                              <path
                                d="M10 -0.222168V19.7778L0 9.77783V-0.222168H10Z"
                                fill="#59D2F3"
                              />
                            </svg>
                          </div>
                          <span>{item.text}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* ✅ Dots */}
              <div className="swiper-dot">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`dot ${i === activeIndex ? 'dot-active' : ''}`}
                    onClick={() => {
                      swiperRef.current?.slideTo(i);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Inline Styles */}
      <style jsx>{`
        .testimonial-box-items {
          background: #1e1e1e;
          border-radius: 20px;
          padding: 30px;
          color: #fff;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testi-content {
          margin-top: 15px;
          color: #e6f8ff;
          font-size: 15px;
          line-height: 1.6;
        }

        .client-info {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 10px;
        }

        .client-content h5 {
          margin: 0;
          font-size: 16px;
          color: #fff;
        }

        .client-content p {
          margin: 0;
          color: #9fdfff;
          font-size: 14px;
        }

        .icon svg {
          width: 27px;
          height: 20px;
        }

        .testimonial-main-title {
          font-size: 48px;
        }

        /* ✅ Dots */
        .swiper-dot {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #444;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot-active {
          background: linear-gradient(90deg, #59d2f3, #008cff);
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(89, 210, 243, 0.8);
        }

        .ratting-box h3 {
          color: #fff;
          font-size: 40px;
          font-weight: 600;
        }

        .ratting-box .star i {
          color: #ffd166;
          margin-right: 4px;
        }

        @media (max-width: 991px) {
          .testimonial-section {
            padding: 80px 0;
          }

          .testimonial-heading-left {
            text-align: left !important;
            display: block;
            width: 100%;
            margin-bottom: 25px !important;
            color: #ff8c00; /* Matching the orange vibe from screenshot */
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 2px;
          }

          .testimonial-main-title {
            font-size: 32px !important;
            line-height: 1.3;
            margin-bottom: 20px !important;
            text-transform: uppercase;
          }

          .swiper-container-wrapper {
            width: 90%;
            margin: 0 auto;
          }

          .testimonial-box-items {
            padding: 20px;
            min-height: auto;
            text-align: left; /* Keep testimonial text readable */
          }

          .ratting-box-wrapper {
            margin-top: 30px !important;
          }

          .header-button-wrapper {
            margin-top: 30px !important;
          }
        }

        @media (max-width: 575px) {
          .testimonial-main-title {
            font-size: 26px !important;
          }

          .swiper-container-wrapper {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
