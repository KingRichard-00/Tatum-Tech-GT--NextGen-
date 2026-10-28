import Header from "@/app/(homepage)/components/header";
import Footer from "@/app/(homepage)/components/footer";

export default function NotFound() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center gap-8">
        <h2>Page Not Found</h2>
        <p>Could not find requested page</p>
      </div>
      <Footer />
    </div>
  );
}
