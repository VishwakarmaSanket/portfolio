"use client";

import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import Footer from "@/components/Footer";

const Label = ({ children }) => (
  <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
    {children}
  </p>
);

const ProjectPage = ({ project }) => {
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>Project Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <main className="bg-[#f8f7f4] text-black">
        {/* ================================= HERO ================================= */}

        <section className="pt-48 pb-32 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <TextReveal splitBy="chars">
              <p className="text-[2rem] font-normal uppercase tracking-[0.15em] text-neutral-400">
                {project.number}
              </p>
            </TextReveal>

            <div className="mt-8">
              <TextReveal splitBy="lines">
                <h1
                  className="
                    text-[4rem]
                    md:text-[8rem]
                    lg:text-[10rem]
                    font-semibold
                    leading-[0.9]
                    tracking-[-0.07em]
                  "
                >
                  {project.title}
                </h1>
              </TextReveal>

              <TextReveal splitBy="words">
                <p
                  className="
                    mt-10
                    max-w-3xl
                    text-xl
                    md:text-2xl
                    text-neutral-600
                    leading-relaxed
                  "
                >
                  {project.subtitle}
                </p>
              </TextReveal>
            </div>

            {/* Meta */}

            <div className="mt-36 border-t border-black/10 pt-10">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <Label>Category</Label>
                  <p className="mt-3">{project.category}</p>
                </div>

                <div>
                  <Label>Role</Label>
                  <p className="mt-3">{project.role}</p>
                </div>

                <div>
                  <Label>Duration</Label>
                  <p className="mt-3">{project.duration}</p>
                </div>

                <div>
                  <Label>Team</Label>
                  <p className="mt-3">{project.team}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================= HERO IMAGE ================================= */}

        <section className="pb-20 px-4 md:px-8">
          <div className="max-w-[1700px] mx-auto">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1800}
              height={1100}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* ================================= OVERVIEW ================================= */}

        <section className="py-48 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-xl uppercase font-medium text-[#a9a9a9] tracking-wide">
              Overview
            </h1>

            <TextReveal splitBy="lines">
              <p
                className="
                  mt-10
                  text-3xl
                  md:text-5xl
                  leading-[1]
                  font-light
                "
              >
                {project.overview}
              </p>
            </TextReveal>
          </div>
        </section>

        {/* ================================= CHALLENGE ================================= */}

        <section className="pt-32 pb-12 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-xl uppercase font-medium text-[#a9a9a9] tracking-wide">
              Challenge
            </h1>

            <p
              className="
                mt-4
                text-xl
                md:text-2xl
                leading-relaxed
                text-neutral-700
              "
            >
              {project.challenge}
            </p>
          </div>
        </section>

        {/* ================================= GOAL ================================= */}

        <section className="py-32 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-xl uppercase font-medium text-[#a9a9a9] tracking-wide">
              Goal
            </h1>

            <p
              className="
                mt-4
                text-xl
                md:text-2xl
                leading-relaxed
                text-neutral-700
              "
            >
              {project.goal}
            </p>
          </div>
        </section>

        {/* ================================= PROCESS ================================= */}

        <section className="py-40 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-xl uppercase font-medium text-[#a9a9a9] tracking-wide">
              Process
            </h1>

            <div className="mt-20 grid md:grid-cols-5 gap-10">
              {project.process && project.process.map((step, index) => (
                <div key={step}>
                  <span className="text-6xl font-semibold text-neutral-400">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 text-lg">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================= SOLUTION ================================= */}

        <section className="py-48 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-xl uppercase font-medium text-[#a9a9a9] tracking-wide">
              Solution
            </h1>

            <TextReveal splitBy="lines">
              <p
                className="
                  mt-10
                  text-2xl
                  md:text-4xl
                  font-light
                  leading-[1]
                "
              >
                {project.solution}
              </p>
            </TextReveal>
          </div>
        </section>

        {/* ================================= GALLERY ================================= */}

        <section className="py-32 px-4 md:px-8">
          <div className="max-w-[1700px] mx-auto space-y-10">
            {project.gallery && project.gallery.length >= 4 && (
              <>
                {/* First */}
                <Image
                  src={project.gallery[0]}
                  alt=""
                  width={1800}
                  height={1200}
                  className="w-full h-auto object-cover"
                />

                {/* Two Column */}
                <div className="grid md:grid-cols-2 gap-10">
                  <Image
                    src={project.gallery[1]}
                    alt=""
                    width={900}
                    height={1000}
                    className="w-full h-auto object-cover"
                  />

                  <Image
                    src={project.gallery[2]}
                    alt=""
                    width={900}
                    height={1000}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Last */}
                <Image
                  src={project.gallery[3]}
                  alt=""
                  width={1800}
                  height={1200}
                  className="w-full h-auto object-cover"
                />
              </>
            )}
          </div>
        </section>

        {/* ================================= IMPACT ================================= */}

        <section className="py-40 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-xl uppercase font-medium text-[#a9a9a9] tracking-wide">
              Impact
            </h1>

            <div className="grid md:grid-cols-3 gap-20 mt-20 mb-16">
              {project.impact && project.impact.map((item, index) => (
                <div key={item}>
                  <span className="text-7xl text-neutral-400">
                    0{index + 1}
                  </span>

                  <p className="mt-8 text-xl leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================= TECH ================================= */}

        <section className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-xl uppercase font-medium text-[#a9a9a9] tracking-wide">
              Technologies
            </h1>

            <div className="flex flex-wrap gap-4 mt-8">
              {project.tags && project.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    px-5
                    py-2
                    rounded-full
                    border
                    border-black/40
                    text-sm
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectPage;
