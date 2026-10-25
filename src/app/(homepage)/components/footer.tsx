import React from "react";

const footer = () => {
  return (
    <div className="flex flex-col text-white pt-4 px-6 bg-gradient-to-br from-[#001a33] via-[#002248] to-[#00142b] border-t-2 border-black/60">
      <div className="flex justify-between pb-2 gap-6">
        <div className="text-sm w-1/2">
          <span className="text-yellow-300 text-lg font-bold">
            Tatum Bank Tech Graduate Trainees
          </span>
          <br /> Celebrating talent, growth, and innovation.
        </div>
        <div className="text-sm w-1/2">
          <span className="text-base text-yellow-300">
            Built on teamwork. Driven by innovation.
          </span>
          <br />A showcase of the people, skills, and experiences behind the
          Graduate Trainee journey
        </div>
      </div>
      <hr className="h-2 border-white/30" />
      <div className="flex text-xs justify-center">
        &copy; 2026 Tatum Bank Tech Graduate Trainees.
      </div>
    </div>
  );
};

export default footer;
