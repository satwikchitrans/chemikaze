'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const portfolioProjects = [
  {
    id: 1,
    title: 'Ethereal Web App',
    category: 'Full-stack Development',
    description: 'A seamless, highly interactive web experience pushing the boundaries of what is possible on the modern web.',
    color: 'bg-blue-900',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3',
  },
  {
    id: 2,
    title: 'Fintech Dashboard',
    category: 'UI/UX Design',
    description: 'A modern, accessible financial dashboard with real-time data visualization and secure architecture.',
    color: 'bg-emerald-900',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
  },
  {
    id: 3,
    title: 'Nexus E-Commerce',
    category: 'Frontend & Headless CMS',
    description: 'High-performance e-commerce storefront with a headless Shopify architecture and blazing fast load times.',
    color: 'bg-indigo-900',
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
  },
  {
    id: 4,
    title: 'Aura Branding',
    category: 'Brand Identity',
    description: 'Complete brand overhaul including logo, typography, visual language, and motion guidelines.',
    color: 'bg-purple-900',
    img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=2194&ixlib=rb-4.0.3',
  }
];

export default function StickyGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const initScroll = () => {
        const sections = gsap.utils.toArray('.portfolio-panel');
        
        // Horizontal scroll animation
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            // The scroll distance depends on the total width to slide
            end: () => `+=${wrapperRef.current?.offsetWidth || window.innerWidth}`,
            invalidateOnRefresh: true,
          }
        });
      };

      // Safety check / small delay to ensure DOM is fully rendered and widths are accurate before ScrollTrigger calculates pinning logic
      const timeoutId = setTimeout(() => {
        initScroll();
        ScrollTrigger.refresh();
      }, 150);

      return () => clearTimeout(timeoutId);
    }, containerRef); // Scope to containerRef

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="overflow-hidden bg-zinc-950 text-white relative h-screen">
      <div className="absolute top-12 left-12 md:top-24 md:left-24 z-10 pointer-events-none mix-blend-difference">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Selected Works</h2>
        <p className="text-zinc-400 mt-2 text-lg">A showcase of recent portfolio projects.</p>
      </div>

      <div 
        ref={wrapperRef} 
        className="flex h-screen will-change-transform" 
        style={{ width: `${portfolioProjects.length * 100}vw` }}
      >
        {portfolioProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="portfolio-panel w-screen h-full flex flex-col justify-center items-center relative p-8 md:p-24 shrink-0"
          >
            {/* Subtle background color overlay */}
            <div className={`absolute inset-0 opacity-10 ${project.color}`}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-12 lg:gap-24">
              <div className="flex-1 space-y-6 lg:max-w-xl">
                <div className="text-sm md:text-base font-mono text-zinc-400 uppercase tracking-widest">
                  0{index + 1} {'//'} {project.category}
                </div>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4">
                  <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors duration-300">
                    View Case Study
                  </button>
                </div>
              </div>
              
              <div className="flex-1 w-full relative h-[40vh] lg:h-[60vh] rounded-3xl overflow-hidden shadow-2xl group">
                {/* Image container */}
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
