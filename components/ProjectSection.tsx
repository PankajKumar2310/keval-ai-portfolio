'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    image: '/assets/keval-image/portfolio/dalila-diamonds.png',
    category: 'MARKETING',
    title: 'Dalila Diamonds',
    titleLink: '#',
    buttonLink: '/portfolio',
  },
  {
    image: '/assets/keval-image/portfolio/donai-gems.png',
    category: 'CRM AND ERP',
    title: 'Donai Gems',
    titleLink: '#',
    buttonLink: '/portfolio',
  },
  {
    image: '/assets/keval-image/portfolio/millennium-star.jpg',
    category: 'HIGH CONVERSION WEBSITE',
    title: 'Millenium Star',
    titleLink: '/portfolio',
    buttonLink: '#',
  },
  {
    image: '/assets/keval-image/portfolio/dalila-diamonds.png',
    category: 'MARKETING',
    title: 'Dalila Diamonds',
    titleLink: '#',
    buttonLink: '/portfolio',
  },
  {
    image: '/assets/keval-image/portfolio/donai-gems.png',
    category: 'CRM AND ERP',
    title: 'Donai Gems',
    titleLink: '#',
    buttonLink: '/portfolio',
  },
  {
    image: '/assets/keval-image/portfolio/millennium-star.jpg',
    category: 'HIGH CONVERSION WEBSITE',
    title: 'Millenium Star',
    titleLink: '/portfolio',
    buttonLink: '#',
  },
];

export default function ProjectSection() {
  // Duplicate items so the loop looks continuous
  const infiniteProjects = [...projects, ...projects];

  return (
    <section className="project-section-4 fix section-padding pt-0">
      <div className="project-wrapper-4">
        <h3 className="text-center heading_text my-4">Our Recent Work</h3>

        <div className="swiper project-slider">
          <div
            className="swiper-wrapper"
            style={{
              display: 'flex',
              animation: 'slidePause 12s ease-in-out infinite',
            }}
          >
            {infiniteProjects.map((project, index) => (
              <div key={index} className="swiper-slide project-slide-item">
                <div className="project-box-items-4 p-relative">
                  <div className="thumb">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={260}
                      style={{
                        width: '100%',
                        height: '220px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>

                  <div className="project-content">
                    <div className="content">
                      <span>{project.category}</span>
                      <h3>
                        <Link href={project.titleLink}>{project.title}</Link>
                      </h3>
                    </div>
                    <Link href={project.buttonLink} className="theme-btn2">
                      <span className="icon-1"></span>
                      VIEW PORTFOLIO
                      <span className="icon-2"></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --slide-width: 30%;
          --slide-margin: 5px;
          --translate-step: -20%;
        }

        @media (max-width: 768px) {
          :root {
            --slide-width: 90%;
            --slide-margin: 0 5%;
            --translate-step: -100%;
          }
        }

        .project-slide-item {
          width: var(--slide-width);
          margin: var(--slide-margin);
          flex-shrink: 0;
        }

        /* Smooth right-to-left movement with pauses */
        @keyframes slidePause {
          0% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(0);
          }
          40% {
            transform: translateX(var(--translate-step));
          }
          60% {
            transform: translateX(var(--translate-step));
          }
          80% {
            transform: translateX(calc(var(--translate-step) * 2));
          }
          100% {
            transform: translateX(calc(var(--translate-step) * 2));
          }
        }

        .project-slider:hover .swiper-wrapper {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .swiper-wrapper {
            animation-duration: 18s;
          }
        }
      `}</style>
    </section>
  );
}
