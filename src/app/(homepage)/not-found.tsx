import Header from "@/app/(homepage)/components/header";
import Footer from "@/app/(homepage)/components/footer";

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center gap-2">
        <h2>Page Not Found</h2>
        <p>Could not find requested page</p>
      </div>
      <Footer />
    </div>
  );
}
