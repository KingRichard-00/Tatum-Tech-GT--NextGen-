"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/memories/graduation", label: "Graduation" },
  { href: "/memories/presentation", label: "Project Presentation" },
  { href: "/memories/behind-the-scenes", label: "Behind the Scenes" },
  { href: "/memories/videos", label: "Videos" },
];

export default function MemoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="p-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-indigo-800">
        <div className="text-4xl">Our Memories</div>
        <div className="text-base">
          Moments that brought us closer - learning, teamwork and a little fun
          along the way.
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-start">
        {tabs.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-full border px-4 py-3 transition-colors hover:bg-yellow-100 ${
                isActive
                  ? "border-yellow-300 bg-yellow-300 font-semibold text-[#001a33]"
                  : "border-gray-200"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {children}
    </div>
  );
}
