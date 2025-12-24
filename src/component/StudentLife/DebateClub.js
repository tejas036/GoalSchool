import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import heroImg from "../../assets/studentlife/debateclub/DEBATE (2).jpg";

const activities = [
  "Weekly debates on social, national, and global topics",
  "Mock parliaments and panel-style discussions",
  "Extempore and rapid rebuttal practice",
  "Research sprints with evidence-based arguments",
];

const skills = [
  "Critical thinking",
  "Logical structuring",
  "Persuasive speaking",
  "Active listening",
  "Quick response under pressure",
  "Respectful disagreement",
];

const values = [
  {
    title: "Clarity & Confidence",
    copy:
      "Voice opinions with conviction while keeping arguments concise and compelling.",
  },
  {
    title: "Research-First Mindset",
    copy:
      "Strengthen positions with data, citations, and examples for credible delivery.",
  },
  {
    title: "Leadership & Teamwork",
    copy:
      "Alternate roles—speaker, moderator, researcher—to build empathy and discipline.",
  },
];

const DebateClub = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <Navbar />

      <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-800 text-white">
        <div className="container mx-auto px-5 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-100">
              Debate Club
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Shape articulate, confident, and socially aware voices
            </h1>
            <p className="text-lg text-indigo-100/90 leading-relaxed">
              The Debate Club nurtures critical thinking, respectful disagreement,
              and persuasive speaking. Students learn to structure arguments,
              listen actively, and respond thoughtfully under pressure—skills
              they will carry into leadership and citizenship.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
           
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl border border-white/15" />
              <div className="rounded-3xl overflow-hidden shadow-2xl  border-white/10">
                <img
                  src={heroImg}
                  alt="Students debating on campus"
                  className="w-full h-[360px] md:h-[420px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-14 lg:py-20 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5 bg-white shadow-lg rounded-2xl p-8">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            What we do
          </p>
          <h2 className="text-3xl font-bold">
            Practice the art of logical reasoning and persuasive delivery
          </h2>
          <p className="text-base leading-relaxed text-slate-700">
            Regular debates, discussions, mock parliaments, panel talks, and
            extempore sessions encourage students to explore multiple
            perspectives. Each activity sharpens research skills, broadens
            viewpoints, and builds leadership.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {activities.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
              >
                <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-5">
          <div className="rounded-2xl bg-indigo-600 text-white p-7 shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">
              Skills students take away
            </h3>
            <p className="text-indigo-100 leading-relaxed">
              Structure arguments, speak with clarity, and respond thoughtfully
              even under time pressure—all while respecting diverse opinions.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {skills.map((badge) => (
                <span
                  key={badge}
                  className="rounded-lg bg-white/10 border border-indigo-100/20 px-3 py-2 text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-lg border border-slate-100">
            <h4 className="text-xl font-semibold mb-3">How sessions run</h4>
            <ul className="space-y-3 text-slate-700">
              <li>• Topic briefing and quick research huddles.</li>
              <li>• Opening statements, rebuttals, and moderator notes.</li>
              <li>• Audience questions to test clarity and composure.</li>
              <li>• Feedback on delivery, logic, and evidence use.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-18">
        <div className="container mx-auto px-5 grid md:grid-cols-3 gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
            >
              <p className="text-sm font-semibold text-indigo-600 mb-2 uppercase tracking-wide">
                {item.title}
              </p>
              <p className="text-slate-700 leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DebateClub;
