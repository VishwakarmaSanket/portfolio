"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = ({ project }) => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-hero",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
      );

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
    },
    { scope: container }
  );

  if (!project) return null;

  return (
    <div ref={container} className="bg-[#121212] text-white font-satoshi min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="gsap-hero text-6xl md:text-9xl font-bold tracking-tighter text-center mb-2 uppercase">
            {project.title}
          </h1>
          <p className="gsap-hero text-xl md:text-2xl text-neutral-400 mb-8 text-center max-w-2xl">
            {project.subtitle || project.category}
          </p>

          <div className="gsap-hero w-full flex justify-center mb-24">
            <img
              src={project.heroImage || project.coverImage}
              alt={project.title}
              className="max-h-[60vh] object-contain drop-shadow-2xl rounded-[1rem]"
            />
          </div>

          <div className="gsap-hero grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl border-t border-neutral-800 pt-12">
            {project.role && (
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Role</p>
                <p className="text-lg font-medium text-neutral-200">{project.role}</p>
              </div>
            )}
            {project.duration && (
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Timeline</p>
                <p className="text-lg font-medium text-neutral-200">{project.duration}</p>
              </div>
            )}
            {project.tools && (
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Tools</p>
                <p className="text-lg font-medium text-neutral-200">{project.tools}</p>
              </div>
            )}
            {project.platform && (
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Platform</p>
                <p className="text-lg font-medium text-neutral-200">{project.platform}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 01 / The Context */}
      {(project.overview || project.challenge || project.goal) && (
        <section className="py-24 px-6 border-t border-neutral-900 overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="gsap-fade-up">
              <h2 className="text-4xl font-bold tracking-tight mb-2">01</h2>
              <p className="text-sm uppercase tracking-widest text-teal-400">The Context</p>
            </div>
            <div className="space-y-12 text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
              {project.overview && (
                <div className="gsap-fade-up">
                  <h3 className="text-white font-medium mb-4">Overview</h3>
                  <p>{project.overview}</p>
                </div>
              )}
              {project.challenge && (
                <div className="gsap-fade-up">
                  <h3 className="text-white font-medium mb-4">The Problem</h3>
                  <p>{project.challenge}</p>
                </div>
              )}
              {project.goal && (
                <div className="gsap-fade-up">
                  <h3 className="text-white font-medium mb-4">The Goal</h3>
                  <p>{project.goal}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 02 / Empathize & Define */}
      {project.persona && (
        <section className="py-24 px-6 bg-neutral-950 overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="gsap-fade-up">
              <h2 className="text-4xl font-bold tracking-tight mb-2">02</h2>
              <p className="text-sm uppercase tracking-widest text-orange-400">Empathize & Define</p>
            </div>
            <div className="gsap-fade-up">
              <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border border-neutral-800">
                <h3 className="text-3xl font-bold text-white mb-4">Meet {project.persona.name}</h3>
                <p className="text-neutral-400 mb-10 text-lg">{project.persona.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  {project.persona.goals && (
                    <div>
                      <h4 className="text-teal-400 uppercase tracking-wider text-xs font-semibold mb-4">Goals</h4>
                      <ul className="space-y-3 text-neutral-300">
                        {project.persona.goals.map((item, i) => (
                          <li key={i} className="flex gap-3"><span className="text-neutral-600">→</span> {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.persona.behaviors && (
                    <div>
                      <h4 className="text-teal-400 uppercase tracking-wider text-xs font-semibold mb-4">Behaviors</h4>
                      <ul className="space-y-3 text-neutral-300">
                        {project.persona.behaviors.map((item, i) => (
                          <li key={i} className="flex gap-3"><span className="text-neutral-600">→</span> {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.persona.frustrations && (
                    <div>
                      <h4 className="text-orange-400 uppercase tracking-wider text-xs font-semibold mb-4">Frustrations</h4>
                      <ul className="space-y-3 text-neutral-300">
                        {project.persona.frustrations.map((item, i) => (
                          <li key={i} className="flex gap-3"><span className="text-neutral-600">→</span> {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.persona.needs && (
                    <div>
                      <h4 className="text-orange-400 uppercase tracking-wider text-xs font-semibold mb-4">Needs</h4>
                      <ul className="space-y-3 text-neutral-300">
                        {project.persona.needs.map((item, i) => (
                          <li key={i} className="flex gap-3"><span className="text-neutral-600">→</span> {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 03 / Design System */}
      {project.designSystem && (
        <section className="py-24 px-6 border-t border-neutral-900 overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="gsap-fade-up">
              <h2 className="text-4xl font-bold tracking-tight mb-2">03</h2>
              <p className="text-sm uppercase tracking-widest text-teal-400">Design System</p>
            </div>
            <div className="space-y-12">
              {project.designSystem.typography && (
                <div className="gsap-fade-up">
                  <h3 className="text-white font-medium mb-6">Typography</h3>
                  <div className="flex flex-col md:flex-row gap-12 p-8 bg-[#1a1a1a] rounded-3xl border border-neutral-800">
                    {project.designSystem.typography.map((type, i) => (
                      <div key={i} className="flex-1">
                        <p className="text-5xl font-bold font-satoshi mb-2 text-white">{type.name}</p>
                        <p className="text-neutral-500 uppercase text-sm tracking-wider">{type.use}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.designSystem.colors && (
                <div className="gsap-fade-up">
                  <h3 className="text-white font-medium mb-6">Color Palette</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {project.designSystem.colors.map((color, i) => (
                      <div key={i} className="flex flex-col gap-3">
                        <div className="h-24 w-full rounded-2xl border border-neutral-800" style={{ backgroundColor: color.hex }}></div>
                        <p className="text-xs uppercase tracking-wider text-neutral-500">{color.hex}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 04 / Final Designs */}
      {(project.screens || project.halfScreens || project.gallery) && (
        <section className="py-24 border-t border-neutral-900 bg-neutral-950 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 mb-20 grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="gsap-fade-up">
              <h2 className="text-4xl font-bold tracking-tight mb-2">04</h2>
              <p className="text-sm uppercase tracking-widest text-teal-400">Final Designs</p>
            </div>
            <div className="gsap-fade-up">
              <p className="text-xl text-neutral-400 font-light leading-relaxed">
                The user interface focuses on simplicity and approachability,
                transforming complex data into meaningful insights.
              </p>
            </div>
          </div>

          {project.screens && project.screens.map((screen, index) => (
            <div key={index} className={`w-full ${screen.bgColor || 'bg-[#0F172A]'} py-24 px-6 mb-8 overflow-hidden`}>
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className={`gsap-fade-up ${index % 2 === 0 ? 'order-2 md:order-1' : ''} flex justify-center`}>
                  <div className="relative w-full max-w-[300px] mx-auto group">
                    <div className={`absolute inset-0 ${screen.glowColor || 'bg-teal-500/20'} blur-3xl transition-opacity duration-700 opacity-30 group-hover:opacity-80 rounded-full`}></div>
                    <div className="relative bg-white/[0.03] border border-white/10 p-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
                      <div className="overflow-hidden rounded-[1.75rem] bg-neutral-900/50 flex items-center justify-center relative min-h-[500px]">
                        <span className="text-sm uppercase tracking-widest text-center px-4 absolute text-neutral-600 -z-10">{screen.title}</span>
                        <img src={screen.image} alt={screen.title} className="w-full h-auto object-contain block z-10" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`gsap-fade-up ${index % 2 === 0 ? 'order-1 md:order-2' : ''} space-y-6`}>
                  <h3 className="text-4xl font-bold text-white">{screen.title}</h3>
                  <p className="text-lg text-neutral-300 font-light leading-relaxed">{screen.description}</p>
                </div>
              </div>
            </div>
          ))}

          {project.halfScreens && (
            <div className="w-full bg-[#1a1a1a] py-24 px-6 overflow-hidden">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
                {project.halfScreens.map((screen, index) => (
                  <div key={index} className="gsap-fade-up space-y-12">
                    <div className="w-full flex justify-center">
                      <div className="relative w-full max-w-[300px] mx-auto group">
                        <div className={`absolute inset-0 ${screen.glowColor || 'bg-[#E85D4A]/20'} blur-3xl transition-opacity duration-700 opacity-30 group-hover:opacity-80 rounded-full`}></div>
                        <div className="relative bg-white/[0.03] border border-white/10 p-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
                          <div className="overflow-hidden rounded-[1.75rem] bg-neutral-900/50 flex items-center justify-center relative min-h-[500px]">
                            <span className="text-sm uppercase tracking-widest text-center px-4 absolute text-neutral-600 -z-10">{screen.title}</span>
                            <img src={screen.image} alt={screen.title} className="w-full h-auto object-contain block z-10" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-white text-center">{screen.title}</h3>
                      <p className="text-neutral-400 font-light leading-relaxed text-center">{screen.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fallback for projects that only have a gallery but no rich screens data */}
          {!project.screens && !project.halfScreens && project.gallery && (
            <div className="w-full bg-[#1a1a1a] py-24 px-6 overflow-hidden">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                {project.gallery.map((image, index) => (
                  <div key={index} className="gsap-fade-up flex justify-center">
                    <div className="relative w-full max-w-[300px] mx-auto group">
                      <div className={`absolute inset-0 bg-teal-500/20 blur-3xl transition-opacity duration-700 opacity-30 group-hover:opacity-80 rounded-full`}></div>
                      <div className="relative bg-white/[0.03] border border-white/10 p-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
                        <div className="overflow-hidden rounded-[1.75rem] bg-neutral-900/50 flex items-center justify-center relative min-h-[300px]">
                          <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-auto object-contain block z-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Process (For Legacy Projects) */}
      {project.process && (
        <section className="py-24 px-6 border-t border-neutral-900 overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="gsap-fade-up">
              <h2 className="text-4xl font-bold tracking-tight mb-2">Process</h2>
              <p className="text-sm uppercase tracking-widest text-teal-400">How we did it</p>
            </div>
            <div className="gsap-fade-up grid md:grid-cols-2 gap-8 text-neutral-400">
              {project.process.map((step, index) => (
                <div key={index}>
                  <span className="text-4xl font-bold text-neutral-800">0{index + 1}</span>
                  <p className="mt-2 text-lg text-white font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solution (For Legacy Projects) */}
      {project.solution && (
        <section className="py-24 px-6 border-t border-neutral-900 bg-[#161616] overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="gsap-fade-up">
              <h2 className="text-4xl font-bold tracking-tight mb-2">Solution</h2>
            </div>
            <div className="gsap-fade-up">
              <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Impact (For Legacy Projects) */}
      {project.impact && (
        <section className="py-24 px-6 border-t border-neutral-900 overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="gsap-fade-up">
              <h2 className="text-4xl font-bold tracking-tight mb-2">Impact</h2>
            </div>
            <div className="gsap-fade-up grid md:grid-cols-3 gap-8 text-neutral-400">
              {project.impact.map((item, index) => (
                <div key={index}>
                  <span className="text-4xl font-bold text-neutral-800">0{index + 1}</span>
                  <p className="mt-4 text-lg text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05 / Reflections */}
      {(project.reflections || project.quote) && (
        <section className="py-32 px-6 border-t border-neutral-900 overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="gsap-fade-up">
              <h2 className="text-4xl font-bold tracking-tight mb-2">05</h2>
              <p className="text-sm uppercase tracking-widest text-orange-400">Reflections</p>
            </div>
            <div>
              {project.reflections && (
                <>
                  <h3 className="gsap-fade-up text-3xl font-bold text-white mb-10">What I Learnt</h3>
                  <ul className="space-y-8">
                    {project.reflections.map((reflection, index) => (
                      <li key={index} className="gsap-fade-up flex gap-6">
                        <span className="text-2xl text-neutral-700 font-light">0{index + 1}</span>
                        <p className="text-lg text-neutral-300 font-light leading-relaxed mt-1">
                          {reflection}
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {project.quote && (
                <div className="gsap-fade-up mt-24 pt-16 border-t border-neutral-800">
                  <span className="text-8xl text-teal-400 leading-none block mb-[-2rem] opacity-50">"</span>
                  <p className="text-2xl md:text-4xl text-white font-medium leading-tight mb-8">
                    {project.quote.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-xl font-bold text-teal-400">
                      {project.quote.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-medium">{project.quote.author}</p>
                      <p className="text-neutral-500 text-sm">{project.quote.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-900 bg-black text-center">
        <p className="text-neutral-500 text-sm">Thank you for your time!</p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
