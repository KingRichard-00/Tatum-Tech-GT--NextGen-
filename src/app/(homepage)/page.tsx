import Header from "@/app/(homepage)/components/header";
import Link from "next/link";
import Background from "./components/background";

const Home = () => {
  return (
    <section className="relative min-h-screen">
      {/* Layer 1: background image */}
      <div
        className="fixed inset-0 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/memories/bg.jpg')" }}
      />

      {/* Layer 2: left → right navy gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081230]/15 via-[#081230]/35 to-transparent" />

      {/* Layer 3: top + bottom darkening (optional) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081230]/70 via-transparent to-[#081230]/60" />

      {/* Layer 4: content */}
      <div className="flex flex-col">
        <Header />
        <div className="relative flex min-h-screen gap-8 mx-8 flex-col items-center">
          <p className="mx-8 text-5xl font-bold uppercase text-center tracking-[0.40em] text-yellow-400">
            Tatum Bank Tech Graduate Trainees
          </p>
          <h1 className="mt-4 text-center text-5xl font-bold leading-tight text-white">
            Different Tracks.{" "}
            <span className="text-yellow-400">One Mission.</span>
          </h1>
          <p className="mt-6 max-w-[600] text-center text-white/90">
            We are a cohort of passionate and driven graduate trainees, coming
            together to build a brighter future in banking, technology and
            customer experience.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/tracks"
              className="group inline-flex items-center text-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-[#081230] shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-yellow-300/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 active:translate-y-0 active:scale-95"
            >
              Explore Our Tracks →
            </Link>
            <Link
              href="/memories"
              className="group inline-flex items-center text-center gap-2 rounded-full border border-white/70 px-6 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-300 hover:bg-white/10 hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 active:scale-95"
            >
              ▶ Watch Our Memories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
