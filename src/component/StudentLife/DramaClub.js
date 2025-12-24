import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import drama1 from "../../assets/studentlife/dramaclub/d1.jpg";
import drama2 from "../../assets/studentlife/dramaclub/d2.jpg";
import drama3 from "../../assets/studentlife/dramaclub/d3.jpg";
import drama4 from "../../assets/studentlife/dramaclub/d4.jpg";
import drama5 from "../../assets/studentlife/dramaclub/d5.jpg";
import drama6 from "../../assets/studentlife/dramaclub/d6.jpg";
import drama7 from "../../assets/studentlife/dramaclub/d7.jpg";
import drama8 from "../../assets/studentlife/dramaclub/d8.jpg";
import drama11 from "../../assets/studentlife/dramaclub/d11.jpg";
import dramaSpot from "../../assets/studentlife/dramaclub/IMG_5197.jpg";

const activities = [
  {
    title: "Role Play & Skits",
    description:
      "Short-form performances that teach voice modulation, timing, and teamwork in a supportive space.",
  },
  {
    title: "Mime & Street Plays",
    description:
      "Expressive storytelling without words to build clarity of emotion, body language, and audience connection.",
  },
  {
    title: "Mono-Acting & Script Reading",
    description:
      "Deep dives into character work that strengthen memory, focus, and confident dialogue delivery.",
  },
  {
    title: "Full-Length Productions",
    description:
      "From table reads to opening night, students experience the discipline of rehearsals and the thrill of live theatre.",
  },
];

const focusBadges = [
  "Creativity & imagination",
  "Confidence & stage presence",
  "Voice projection & clarity",
  "Body language & movement",
  "Teamwork & empathy",
  "Problem-solving on stage",
];

const galleryImages = [
  { src: drama1, alt: "Drama club circle warm-up" },
  { src: drama2, alt: "On-stage group performance" },
  { src: drama3, alt: "Students practicing expressions" },
  { src: drama4, alt: "Street play rehearsal" },
  { src: drama5, alt: "Script reading session" },
  { src: drama6, alt: "Duet scene practice" },
  { src: drama7, alt: "Team mime sequence" },
  { src: drama8, alt: "Cast preparing backstage" },
  { src: dramaSpot, alt: "Spotlight moment on stage" },
];

const DramaClub = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 -top-16 h-64 w-64 rounded-full bg-purple-400 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-400 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-5 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-100">
              Drama Club
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Stories come alive at Goal International Public School
            </h1>
            <p className="text-lg text-indigo-100/90 leading-relaxed">
              The Drama Club provides a vibrant stage for creativity, expression,
              and confidence. Students experiment with theatre arts while
              developing communication skills, emotional intelligence, and
              magnetic stage presence.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Stage Presence", "Voice & Movement", "Teamwork", "Leadership"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-indigo-200/60 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={drama11}
                alt="Drama rehearsal under lights"
                className="w-full h-80 md:h-96 object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <img
                  src={drama6}
                  alt="Creative expressions"
                  className="w-full h-44 md:h-52 object-cover object-center"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <img
                  src={drama8}
                  alt="Warm-up session"
                  className="w-full h-44 md:h-52 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-14 lg:py-20 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5 bg-white shadow-lg rounded-2xl p-8">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Why students love this club
          </p>
          <h2 className="text-3xl font-bold">
            Building confidence, empathy, and character on stage
          </h2>
          <p className="text-base leading-relaxed text-slate-700">
            The Drama Club nurtures imagination, communication skills, and stage
            presence through role play, skits, mime, street plays, mono-acting,
            script reading, and full-length productions. Students gain hands-on
            experience in acting, dialogue delivery, voice modulation, and body
            language while collaborating on scripts and performances.
          </p>
          <p className="text-base leading-relaxed text-slate-700">
            Every rehearsal emphasizes teamwork, discipline, and empathy—helping
            students appreciate diverse perspectives and emotions. Drama
            participation naturally boosts spontaneity and problem-solving while
            instilling cooperation, responsibility, time management, leadership,
            and dedication.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {activities.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl bg-indigo-600 text-white p-7 shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">
              What students take away
            </h3>
            <p className="text-indigo-100 leading-relaxed">
              Confidence to speak up, courage to improvise, and the ability to
              connect meaningfully with audiences—skills that stay with them well
              beyond the stage.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {focusBadges.map((badge) => (
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
            <h4 className="text-xl font-semibold mb-3">Club rhythm</h4>
            <ul className="space-y-3 text-slate-700">
              <li>• Weekly rehearsals with voice and movement warm-ups.</li>
              <li>• Scene-building labs for dialogue delivery and blocking.</li>
              <li>• Monthly showcases—from street plays to mono-acts.</li>
              <li>• Production sprints leading to full-length performances.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-18">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm uppercase tracking-wide text-indigo-600 font-semibold">
                Gallery
              </p>
              <h3 className="text-3xl font-bold text-slate-900">
                Moments from rehearsals and performances
              </h3>
              <p className="text-slate-600 mt-2">
                Gallery highlights—swap these with your own drama shots any time.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <span className="rounded-full bg-indigo-50 text-indigo-700 px-4 py-2 text-sm font-semibold">
                9 photos
              </span>
              <span className="rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-sm font-semibold">
                Student-led
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.alt}
                className="group overflow-hidden rounded-xl shadow-sm border border-slate-100"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

     

      <Footer />
    </div>
  );
};

export default DramaClub;
