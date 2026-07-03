"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const fadeElements = gsap.utils.toArray(".gsap-fade-up");
      fadeElements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.fromTo(
        ".gsap-skill-tag",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gsap-skill-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full bg-[#121212] py-32 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Hero */}

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          <div>
            <p className="gsap-fade-up uppercase tracking-[0.25em] text-zinc-400 text-sm mb-6">
              About Me
            </p>

            <h1 className="gsap-fade-up text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Designing thoughtful
              <br />
              digital experiences
              <br />
              through code &
              <br />
              creativity.
            </h1>

            <p className="gsap-fade-up mt-10 max-w-2xl text-lg text-neutral-400 leading-relaxed">
              I'm Sanket Vishwakarma, a Computer Engineering student and
              full-stack developer passionate about building products that
              combine beautiful design with meaningful functionality.
            </p>
          </div>

          <div className="flex justify-center gsap-fade-up">
            <div className="relative w-[350px] h-[450px] group">
              <div className="absolute inset-0 bg-teal-500/20 blur-3xl opacity-30 rounded-full transition-opacity duration-500 group-hover:opacity-60"></div>
              <div className="w-full h-full rounded-3xl overflow-hidden relative border border-white/10 z-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681822383745-4045b2aa77d3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sanket Vishwakarma"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Story */}

        <div className="mt-40 grid lg:grid-cols-[0.3fr_1fr] gap-16">
          <div className="gsap-fade-up">
            <p className="uppercase tracking-[0.2em] text-zinc-400 text-sm">
              My Story
            </p>
          </div>

          <div className="space-y-8">
            <p className="gsap-fade-up text-2xl leading-relaxed text-neutral-200">
              My journey started with curiosity about how websites work. Over
              time, that curiosity evolved into a passion for creating products
              that solve real-world problems.
            </p>

            <p className="gsap-fade-up text-lg text-neutral-400 leading-relaxed">
              From designing interfaces in Figma to building full-stack
              applications with React, Next.js, Node.js and MongoDB, I enjoy
              bringing ideas to life through technology.
            </p>

            <p className="gsap-fade-up text-lg text-neutral-400 leading-relaxed">
              I’m especially interested in product design, frontend engineering,
              motion design, and crafting experiences that feel intuitive and
              delightful.
            </p>
          </div>
        </div>

        {/* What I Do */}

        <div className="mt-40">
          <p className="gsap-fade-up uppercase tracking-[0.2em] text-zinc-400 text-sm mb-12">
            What I Do
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="gsap-fade-up p-8 rounded-3xl border border-white/10 bg-[#1A1A1A] transition-all duration-300 hover:bg-[#222222] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-medium text-white">UI / UX Design</h3>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                Designing clean, intuitive and user-focused interfaces using
                Figma and modern design principles.
              </p>
            </div>

            <div className="gsap-fade-up p-8 rounded-3xl border border-white/10 bg-[#1A1A1A] transition-all duration-300 hover:bg-[#222222] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-medium text-white">Frontend Development</h3>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                Building responsive and interactive experiences using React,
                Next.js, GSAP and Tailwind CSS.
              </p>
            </div>

            <div className="gsap-fade-up p-8 rounded-3xl border border-white/10 bg-[#1A1A1A] transition-all duration-300 hover:bg-[#222222] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-medium text-white">Backend Development</h3>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                Creating scalable APIs and systems using Node.js, Express,
                MongoDB and Firebase.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}

        <div className="mt-40">
          <p className="gsap-fade-up uppercase tracking-[0.2em] text-zinc-400 text-sm mb-12">
            Skills & Tools
          </p>

          <div className="gsap-skill-container flex flex-wrap gap-4">
            {[
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "GSAP",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Firebase",
              "Figma",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="gsap-skill-tag px-6 py-3 rounded-full border border-white/10 bg-[#1A1A1A] text-neutral-300 transition-colors duration-300 hover:bg-white hover:text-black hover:border-white cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Beyond Coding */}

        <div className="mt-40 grid lg:grid-cols-[0.3fr_1fr] gap-16">
          <div className="gsap-fade-up">
            <p className="uppercase tracking-[0.2em] text-zinc-400 text-sm">
              Beyond Coding
            </p>
          </div>

          <div className="gsap-fade-up">
            <p className="text-lg text-neutral-400 leading-relaxed">
              When I'm not coding, you'll probably find me exploring UI/UX
              trends, learning about product design, participating in
              hackathons, or experimenting with animations and creative web
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
