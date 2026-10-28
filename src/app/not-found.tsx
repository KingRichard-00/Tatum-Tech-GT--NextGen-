import "./globals.css";
import Header from "@/app/(homepage)/components/header";
import Footer from "@/app/(homepage)/components/footer";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center">
        <h2>Page Not Found</h2>
        <p>Could not find requested page</p>
      </div>
      <Footer />
    </div>
  );
}
