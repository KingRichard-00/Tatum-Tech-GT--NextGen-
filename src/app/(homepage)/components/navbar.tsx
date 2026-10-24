import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <button>
        <Image
          src="/images/hamburger/bars-solid-full.svg"
          alt="Hamburger Menu"
          width={24}
          height={24}
          className="h-6 w-6 brightness-0 saturate-100"
        />
      </button>
      <ul>
        <li>Homepage</li>
        <li>About</li>
        <li>Tracks</li>
        <li>Memories</li>
      </ul>
    </nav>
  );
};

export default NavBar;
