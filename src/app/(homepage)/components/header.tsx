import Logo from "@/app/(homepage)/components/logo";
import Nav from "@/app/(homepage)/components/nav";

const Page = () => {
  return (
    <header className="z-[20] flex-wrap flex w-full items-center justify-between border-gray-500 p-8">
      <Logo />
      <Nav />
    </header>
  );
};

export default Page;
