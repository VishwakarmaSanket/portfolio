"use client";

export default function ProjectPage({ project }) {
  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Project not found
      </div>
    );
  }

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-16">
          <span className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-300">
            {project.category}
          </span>

          <h1 className="max-w-5xl text-5xl font-bold md:text-8xl">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-neutral-300 md:text-2xl">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-neutral-500">
                Project Number
              </p>
              <h3 className="text-3xl font-semibold">{project.number}</h3>
            </div>

            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-neutral-500">
                Year
              </p>
              <h3 className="text-xl">{project.year}</h3>
            </div>

            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-neutral-500">
                Role
              </p>
              <h3 className="text-xl">{project.role}</h3>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-2">
            <p className="text-xl leading-relaxed text-neutral-200">
              {project.description}
            </p>

            <p className="mt-8 text-lg leading-relaxed text-neutral-400">
              {project.longDescription}
            </p>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 pb-20 md:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl">
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-[700px] w-full object-cover"
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Gallery</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-3xl">
              <img
                src={image}
                alt={`${project.title}-${index}`}
                className="h-[500px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
