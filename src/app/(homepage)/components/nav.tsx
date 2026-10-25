"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDownIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/tracks",
    label: "Our Tracks",
    children: [
      { href: "/tracks/uiux", label: "UI/UX Design" },
      { href: "/tracks/mobile", label: "Mobile Development" },
      { href: "/tracks/frontend", label: "Frontend Development" },
      { href: "/tracks/backend", label: "Backend Development" },
      { href: "/tracks/quality-assurance", label: "Quality Assurance" },
    ],
  },
  { href: "/memories", label: "Memories" },
];

const NavLinks = ({ mobile = false }) => {
  const pathname = usePathname();

  const [tracksOpen, setTracksOpen] = useState(false);
  const tracksRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tracksRef.current &&
        !tracksRef.current.contains(event.target as Node)
      ) {
        setTracksOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full text-white">
      <ul
        className={
          mobile ? "flex flex-col items-center gap-6" : "flex justify-between"
        }
      >
        {links.map(({ href, label, children }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <li
              key={href}
              className={`relative group ${mobile ? "flex flex-col items-center" : ""}`}
            >
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-block rounded-lg px-6 py-2 transition-colors hover:text-yellow-300 group-hover:text-yellow-300 ${
                  isActive
                    ? "bg-yellow-400/15 text-yellow-300 ring-1 ring-yellow-400/40 backdrop-blur-sm"
                    : ""
                }`}
              >
                <span className="relative inline-block">
                  {label}
                  {children && (
                    <ChevronDownIcon
                      size={16}
                      className="absolute left-full top-1/2 ml-1 -translate-y-1/2"
                    />
                  )}
                </span>
              </Link>

              {children && (
                <ul
                  className={
                    mobile
                      ? "mt-2 hidden flex-col items-center gap-3 text-sm text-white/80 group-hover:flex group-focus-within:flex min-w-48 rounded-lg bg-[#081230]/95 py-2 shadow-lg backdrop-blur"
                      : "invisible absolute left-0 mt-1 top-full z-30 flex min-w-48 flex-col rounded-lg bg-[#081230]/95 py-2 opacity-0 shadow-lg backdrop-blur transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                  }
                >
                  {children.map((child) => {
                    const isChildActive =
                      pathname === child.href ||
                      pathname.startsWith(`${child.href}/`);

                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={isChildActive ? "page" : undefined}
                          className={`block px-4 py-2 text-white hover:text-yellow-300 ${
                            isChildActive ? "text-yellow-300" : ""
                          } ${mobile ? "hover:bg-white/10 w-52 text-center" : "hover:bg-white/10"}`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-4/5 flex justify-end">
        <div className="hidden w-full sm:flex justify-between">
          <NavLinks />
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleNavBar}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-transparent text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 active:scale-95"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex sm:hidden flex-col basis-full items-center">
          <NavLinks mobile />
        </div>
      )}
    </>
  );
}
