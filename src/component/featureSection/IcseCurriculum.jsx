// IcseCurriculum.jsx
// eslint-disable-next-line
import React from "react";
import BackgroundShapes from "../decor/BackgroundShapes";

export default function IcseCurriculum() {
  return (
    <section
      className="
        relative overflow-hidden
        max-w-5xl mx-auto px-4 py-12 m-4
        bg-gradient-to-b from-slate-50 via-white to-slate-50
      "
    >
      {/* Decorative geometry behind content */}
      <BackgroundShapes
        mode="absolute" // keep shapes inside this section only
        patternOpacity={0.06} // mild page pattern
        spiralClass="absolute -left-10 -top-10 w-[360px] h-[360px] "
        gridClass="absolute right-[-80px] top-[8%] w-[440px] h-[440px] opacity-30"
        triClass="absolute -bottom-20 -right-10 w-[360px] h-[300px] z-[20px]"
      />
      <div className="relative z-10">
        {/* Header + PDF */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              ICSE Curriculum Framework
            </h1>
            <p className="mt-2 text-slate-600">
              Broad-based, balanced learning that nurtures academic excellence,
              creativity, critical thinking, and moral values.
            </p>
          </div>
          <a
            href="/docs/icse-curriculum.pdf" // TODO: replace with your hosted PDF path
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
          >
            Download PDF
          </a>
        </div>

        {/* Subjects Offered */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">1) Subjects Offered</h2>
          <p className="mt-2 text-slate-700">
            The school follows the ICSE curriculum with the following structure.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">Group I (Compulsory)</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>English (Language &amp; Literature)</li>
                <li>History, Civics &amp; Geography</li>
                <li>Second Language (Hindi / Kannada)</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">Group II (Choose any two)</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Environmental Science</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">Group III (Choose any one)</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>Computer Applications</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Curriculum Focus */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">2) Curriculum Focus</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">A. Holistic Development</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>Intellectual, emotional, physical, and ethical growth</li>
                <li>
                  Equal emphasis on academics, sports, culture & community
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">B. Skill-Based Learning</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>
                  Communication, analytical reasoning, collaboration,
                  leadership, digital literacy
                </li>
                <li>
                  Debates, presentations, coding workshops, design thinking
                  projects
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">C. Experiential Learning</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>Project work, lab sessions, field trips, model-making</li>
                <li>Application of concepts in real-world contexts</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">
                D. Value Education & Life Skills
              </h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>
                  Moral education, empathy, environmental awareness, civic sense
                </li>
                <li>UN SDGs integrated in class discussions</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5 md:col-span-2">
              <h3 className="font-semibold">E. Co/Extra-Curricular</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>
                  Sports (Cricket, Football, Athletics, Yoga, Chess, etc.)
                </li>
                <li>Clubs: Science, Eco, Literary, Art, Music & Dance</li>
                <li>
                  Annual events: Science Exhibition, Sports Meet, Annual Day
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Assessment */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">3) Assessment &amp; Evaluation</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">A. Internal Assessment</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>CCE pattern: tests, assignments, projects, practicals</li>
                <li>~20% weightage from internal assessments (per subject)</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">B. External Examination</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>CISCE exams at end of Class 10</li>
                <li>Focus on concepts, reasoning, and clarity of expression</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">C. Grading Pattern</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>Marks & grades as per CISCE guidelines</li>
                <li>Final score = internal + external assessments</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-semibold">D. Assessment for Learning</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>Diagnostic/remedial tests</li>
                <li>Continuous feedback for students & parents</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">4) Implementation at School</h2>
          <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
            <li>Interactive classrooms: smart boards & visual learning</li>
            <li>STEM integration: hands-on experiments, coding, robotics</li>
            <li>
              Language enrichment: reading, elocution, creative writing, debate
            </li>
            <li>Environmental awareness: campaigns & student-led activities</li>
            <li>Career guidance: counselling & aptitude tests</li>
          </ul>
        </div>

        {/* Outcomes */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">5) Expected Learning Outcomes</h2>
          <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
            <li>Strong communication & analytical thinking</li>
            <li>Apply scientific & mathematical reasoning in daily life</li>
            <li>Creativity in art, technology, and performance</li>
            <li>Leadership, empathy, and social responsibility</li>
            <li>Prepared for higher education & global citizenship</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
