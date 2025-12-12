import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const StemEducationPage = () => {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-50 via-slate-50 to-emerald-50 text-slate-900">
        {/* Decorative blurred background shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" />
          <div className="absolute right-[-60px] top-40 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />
          <div className="absolute bottom-[-80px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        </div>

        <section className="py-10 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            {/* Main reading card */}
            <div className="relative rounded-3xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-sm md:p-8">
              {/* Tag / breadcrumb */}
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  <span role="img" aria-label="STEM">
                    🔬
                  </span>
                  STEM @ Goal International Public School
                </div>

                {/* Optional "badge" */}
                <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 md:inline-block">
                  Future-ready learning
                </span>
              </div>

              {/* Title + intro */}
              <header className="mb-6 border-b border-slate-200 pb-4">
                <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  Importance of STEM in Goal International Public School
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  Goal International Public School, Manki, is committed to providing quality
                  education that prepares students for a rapidly changing world. STEM
                  education—Science, Technology, Engineering, and Mathematics—plays a vital
                  role in shaping students into confident, creative, and future-ready
                  learners.
                </p>
              </header>

              {/* Sections */}
              <div className="space-y-4 md:space-y-5">
                {/* 1 */}
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                  <div className="mb-2 flex items-center text-sm font-semibold text-slate-900 md:text-base">
                    <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                      1
                    </span>
                    Strengthening Academic Foundation
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">
                    At Goal International Public School, STEM subjects are taught through
                    interactive and activity-based learning. This approach deepens students’
                    understanding of scientific principles, mathematical concepts, and
                    technological applications, helping them connect classroom learning with
                    real-life situations.
                  </p>
                </article>

                {/* 2 */}
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                  <div className="mb-2 flex items-center text-sm font-semibold text-slate-900 md:text-base">
                    <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                      2
                    </span>
                    Developing Critical Thinking &amp; Problem-Solving Skills
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">
                    STEM programs and club activities encourage students to think critically,
                    ask questions, and explore multiple solutions. Through experiments,
                    model-making, and reasoning tasks, students develop strong analytical
                    skills that are essential for lifelong learning.
                  </p>
                </article>

                {/* 3 */}
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                  <div className="mb-2 flex items-center text-sm font-semibold text-slate-900 md:text-base">
                    <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                      3
                    </span>
                    Promoting Innovation &amp; Creativity
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">
                    The school offers science exhibitions, robotics activities, coding
                    basics, and hands-on experiments. These experiences spark imagination,
                    motivate students to innovate, and build confidence in exploring new
                    ideas.
                  </p>
                </article>

                {/* 4 */}
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                  <div className="mb-2 flex items-center text-sm font-semibold text-slate-900 md:text-base">
                    <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                      4
                    </span>
                    Preparing Students for Future Careers
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">
                    With rapid advancements in technology, STEM careers are among the
                    fastest-growing in the world. The school prepares students for such
                    opportunities by providing early exposure to scientific tools, digital
                    learning platforms, and engineering-based tasks. This foundation
                    strengthens their readiness for future academic and professional
                    pathways.
                  </p>
                </article>

                {/* 5 */}
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                  <div className="mb-2 flex items-center text-sm font-semibold text-slate-900 md:text-base">
                    <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                      5
                    </span>
                    Enhancing Digital &amp; Technological Skills
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">
                    Through smart classrooms, ICT periods, and age-appropriate technology
                    use, students learn essential digital skills. This helps them adapt to
                    future technological environments with confidence, responsibility, and
                    awareness.
                  </p>
                </article>

                {/* 6 */}
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                  <div className="mb-2 flex items-center text-sm font-semibold text-slate-900 md:text-base">
                    <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                      6
                    </span>
                    Encouraging Collaboration &amp; Teamwork
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">
                    STEM activities at Goal International Public School promote teamwork as
                    students work in groups to conduct experiments, build projects, and
                    participate in competitions. This collaboration builds communication
                    skills, leadership qualities, and a strong sense of responsibility.
                  </p>
                </article>

                {/* 7 */}
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                  <div className="mb-2 flex items-center text-sm font-semibold text-slate-900 md:text-base">
                    <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                      7
                    </span>
                    Bridging Theory with Practical Learning
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">
                    The school emphasizes learning-by-doing. STEM activities make lessons
                    more meaningful by showing how scientific and mathematical concepts are
                    applied in daily life. This practical approach keeps students engaged and
                    improves overall academic performance.
                  </p>
                </article>
              </div>

              {/* Conclusion */}
              <section className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-emerald-50 to-blue-50 p-4 md:p-5">
                <p className="text-sm leading-relaxed text-slate-800 md:text-base">
                  <span className="font-semibold text-slate-900">Conclusion: </span>
                  STEM education at Goal International Public School is an essential part of
                  nurturing well-rounded, future-ready individuals. By using innovative
                  teaching methods, practical learning opportunities, and digital tools, the
                  school ensures that students develop the skills needed to succeed in a
                  technology-driven world. The continued focus on STEM strengthens the
                  school’s commitment to excellence and holistic development.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default StemEducationPage;
