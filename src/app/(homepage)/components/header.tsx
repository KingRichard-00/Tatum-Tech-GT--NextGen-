import Logo from "@/app/(homepage)/components/logo";
import Nav from "@/app/(homepage)/components/nav";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-br from-[#001a33] via-[#002248] to-[#00142b] border-t-2 border-black/60">
      <header className="z-[20] flex-wrap flex w-full items-center justify-between border-gray-500 p-6">
        <Logo />
        <Nav />
      </header>
    </div>
  );
};

export default Header;
