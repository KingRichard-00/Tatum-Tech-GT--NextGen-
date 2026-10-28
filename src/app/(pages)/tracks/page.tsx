import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Tracks | Tatum Bank Tech Graduate Trainees",
};

const page = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex flex-col gap-2 justify-start">
        <div className="bg-yellow-300 h-2 w-16 rounded-lg"></div>
        <div className="font-bold text-[#001a33] text-4xl">Our Tracks</div>
        <div className="text-slate-700 ">
          Five paths. One team. Each track brings unique skills, perspectives{" "}
          <br />
          and energy - all working towards a shared vision .
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="flex bg-rose-100 rounded-lg flex-col p-4 w-full md:w-60 gap-2">
          <div className="rounded-full w-10 h-10 bg-rose-300 flex justify-center items-center">
            <Image
              src="/images/icons/uiux.png"
              width={24}
              height={24}
              alt="UI/UX"
            />
          </div>
          <div className="text-xl font-bold">UI/UX Design</div>
          <div>
            Designing simple, intuitive banking journeys that put customers at
            ease.
          </div>
          <div className="mt-2 font-semibold">
            <Link href="/tracks/uiux">See Team Members →</Link>
          </div>
        </div>
        <div className="flex bg-green-100 rounded-lg flex-col p-4 w-full md:w-60 gap-2">
          <div className="rounded-full w-10 h-10 bg-green-300 flex justify-center items-center">
            <Image
              src="/images/icons/mobile.png"
              width={24}
              height={24}
              alt="Mobile"
            />
          </div>
          <div className="text-xl font-bold">Mobile Development</div>
          <div>
            Giving customers safe, seamless access to their money, anytime,
            anywhere.
          </div>
          <div className="mt-2 font-semibold">
            <Link href="/tracks/mobile">See Team Members →</Link>
          </div>
        </div>
        <div className="flex bg-blue-100 rounded-lg flex-col p-4 w-full md:w-60 gap-2">
          <div className="rounded-full w-10 h-10 bg-blue-300 flex justify-center items-center">
            <Image
              src="/images/icons/frontend.png"
              width={24}
              height={24}
              alt="Frontend"
            />
          </div>
          <div className="text-xl font-bold">Frontend Development</div>
          <div>
            Building fast, accessible platforms that make banking easy for
            everyone.
          </div>
          <div className="mt-2 font-semibold">
            <Link href="/tracks/frontend">See Team Members →</Link>
          </div>
        </div>
        <div className="flex bg-orange-100 rounded-lg flex-col p-4 w-full md:w-60 gap-2">
          <div className="rounded-full w-10 h-10 bg-orange-300 flex justify-center items-center">
            <Image
              src="/images/icons/backend.png"
              width={24}
              height={24}
              alt="Backend"
            />
          </div>
          <div className="text-xl font-bold">Backend Development</div>
          <div>
            Powering secure, reliable systems that keep every transaction safe.
          </div>
          <div className="mt-2 font-semibold">
            <Link href="/tracks/backend">See Team Members →</Link>
          </div>
        </div>
        <div className="flex bg-violet-100 rounded-lg flex-col p-4 w-full md:w-60 gap-2">
          <div className="rounded-full w-10 h-10 bg-violet-300 flex justify-center items-center">
            <Image
              src="/images/icons/assurance.png"
              width={24}
              height={24}
              alt="Quality Assurance"
            />
          </div>
          <div className="text-xl font-bold">Quality Assurance</div>
          <div>
            Ensuring every service is dependable, accurate and worthy of
            customer trust.
          </div>
          <div className="mt-2 font-semibold">
            <Link href="/tracks/quality-assurance">See Team Members →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
