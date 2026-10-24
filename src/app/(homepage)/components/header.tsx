import Logo from "@/app/(homepage)/components/logo";
import Nav from "@/app/(homepage)/components/nav";

const Header = () => {
  return (
    <header className="z-[20] flex-wrap flex w-full items-center justify-between border-gray-500 p-6">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
