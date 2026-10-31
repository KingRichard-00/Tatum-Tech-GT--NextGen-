import Link from "next/link";
import { text } from "stream/consumers";

export const metadata = {
  title: "About Us | Tatum Bank Tech Graduate Trainees",
};

const stats = [
  { value: "6", label: "weeks of training" },
  { value: "5", label: "technology stacks" },
  { value: "3", label: "tracks per trainee" },
  { value: "1", label: "tech team" },
];

const timeline = [
  {
    title: "Day one",
    text: "Trainees from across Nigeria meet in Counter Fraud, Lagos. We get introduced to our facilitators and just immediately after, the real work begins.",
  },
  {
    title: "Two weeks",
    text: "Five disciplines. UI/UX design, Mobile, Frontend, Backend and Quality Assurance, all at once. Stressful? Absolutely, but sheer tenacity and the hope of a bright future became our anchor.",
  },
  {
    title: "At the end of two weeks",
    text: "Placement assessment. Results decided our three tracks, and the path ahead got clearer.",
  },
  {
    title: "During the journey of learning the next four weeks",
    text: "Little time, many tracks, lots of projects, assignments and bug findings, test cases here and there, and much debugging, some of it in our dreams.",
  },
  {
    title: "The day before it all ended",
    text: "A final exam",
  },
  {
    title: "The long-awaited last day",
    text: "Project presentation and defense",
  },
  {
    title: "Graduation",
    text: "Sharper than the day we came in, and ready for the next phase.",
  },
];

const bugs = [
  { issue: "Code didn’t compile", by: "Reported by: everyone" },
  { issue: "Login button doesn’t work", by: "Reported by: QA team" },
  { issue: "Fell asleep in class", by: "Reported by: the facilitator" },
];

const traits = [
  {
    title: "Competitive",
    text: "We pushed each other, and left sharper than we arrived.",
  },
  {
    title: "Playful",
    text: "Jokes, nicknames and bug reports kept the long days light.",
  },
  {
    title: "Diverse",
    text: "Different cities, tracks and perspectives in one class.",
  },
];

// Shared class strings
const h2 =
  "mb-3.5 text-[clamp(26px,3.4vw,34px)] font-bold leading-[1.15] tracking-tight";
const muted = "text-[#4a5a73] dark:text-[#aebbd1]";
const p = `mb-3.5 max-w-[68ch] text-lg ${muted}`;

export default function AboutPage() {
  return (
    <main className="p-6 text-[#0b1f3f] dark:text-[#eef2fa]">
      {/* Title */}
      <div className="flex flex-col gap-2 justify-start">
        <div className="bg-yellow-300 h-2 w-16 rounded-lg" />
        <h1 className="font-bold text-[#001a33] text-4xl">About Us</h1>
        <p className={`max-w-[640px] ${muted}`}>
          Take a peep into the diverse personalities of the amazing techies who
          are privileged to be the Tech Graduate Trainees of Tatum Bank.
        </p>
      </div>

      {/* Story + stats */}
      <section className="mt-6">
        <h2 className="text-3xl text-[#001a33] font-bold">
          Tatum Trainee Class of 2026: NextGen
        </h2>
        <div className="">
          <p className="text-md mt-2">
            Tatum Bank opened its doors in 2025. In 2026, we walked through
            them. We are developers, designers and testers from different cities
            and backgrounds, and six weeks later we left as one team.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-2 overflow-hidden rounded-2xl bg-white/15 md:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="bg-[#021b3d] px-6 py-6 text-white">
              <strong className="block text-[44px] font-bold leading-none text-[#ffd60a]">
                {s.value}
              </strong>
              <span className="text-[15px] text-[#c5d1e6]">{s.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Timeline */}
      <section className="mt-[72px]">
        <h2 className="text-3xl text-[#001a33] font-bold">Our six weeks</h2>
        <ol className="mt-7 max-w-[760px] border-l-[3px] border-[#ffd60a] pl-[34px]">
          {timeline.map((t) => (
            <li
              key={t.title}
              className="relative pb-[30px] pl-6 before:absolute before:-left-[45px] before:top-1 before:h-[18px] before:w-[18px] before:rounded-full before:border-4 before:border-[#ffd60a] before:bg-[#f7f8fc] before:content-[''] dark:before:bg-[#061326]"
            >
              <h3 className="mb-1 text-[21px] font-bold">{t.title}</h3>
              <p className={`max-w-[68ch] ${muted}`}>{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* QA bug log
      <section className="mt-[72px] grid items-center gap-5 md:grid-cols-[1fr_1.1fr] md:gap-12">
        <div>
          <h2 className={h2}>We take the work seriously, never ourselves</h2>
          <p className={p}>
            Backend developers learned humility in design class. Our code was
            creative, to put it kindly. And in QA, anything that didn’t make
            sense got the same verdict.
          </p>
        </div>
        <div
          className="rounded-2xl bg-[#021b3d] px-5 py-2 text-base text-[#e8eefb]"
          role="list"
          aria-label="Sample bug reports"
        >
          {bugs.map((b) => (
            <div
              key={b.issue}
              role="listitem"
              className="flex items-center justify-between gap-3.5 border-b border-white/10 py-4 last:border-b-0"
            >
              <span>
                {b.issue}
                <small className="block text-[13px] text-[#aebbd1]">
                  {b.by}
                </small>
              </span>
              <span className="whitespace-nowrap rounded-full bg-[#ffd60a] px-2.5 py-0.5 text-[13px] font-bold text-[#021b3d]">
                That’s a bug!
              </span>
            </div>
          ))}
        </div>
      </section> */}

      {/* Traits */}
      <section className="mt-[72px]">
        <h2 className="text-3xl text-[#001a33] font-bold">
          Iron sharpens iron
        </h2>
        <p className="text-md mt-2">
          The room was competitive but never cold. Serious and playful, quiet
          thinkers and natural talkers, bold voices and steady hands. Diversity
          leads to innovation, and that mix is our strength.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {traits.map((t) => (
            <div
              key={t.title}
              className="rounded-xl border border-l-[6px] border-[#dde3ee] border-l-[#ffd60a] bg-white px-[22px] py-5 dark:border-[#1e3a66] dark:border-l-[#ffd60a] dark:bg-[#0c2142]"
            >
              <h3 className="mb-1.5 text-[19px] font-bold">{t.title}</h3>
              <p className={`text-base ${muted}`}>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing banner */}
      <div className="mt-[72px] flex flex-wrap items-center justify-between gap-7 rounded-2xl bg-[#021b3d] px-6 py-8 text-white md:px-10 md:py-11">
        <h2 className={`${h2} mb-0 max-w-[520px] text-[#ffd60a]`}>
          One Objective:{" "}
          <span className="text-white">Take Tatum Bank to the Zenith.</span>
          {/* <span className="text-[#ffd60a]">Yes, that’s a lot of T’s.</span> */}
        </h2>
        {/* Change href to your members/profiles route */}
        <Link
          href="./about/photo-feed"
          className="inline-block rounded-[10px] bg-[#ffd60a] px-[26px] py-3.5 text-[17px] font-bold text-[#021b3d] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#ffd60a] motion-reduce:transition-none"
        >
          Meet the trainees
        </Link>
      </div>
    </main>
  );
}
