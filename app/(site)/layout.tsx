import Footer from "../components/Footer";
import SiteHeader from "../components/site/SiteHeader";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="bg-cream">{children}</main>
      <Footer />
    </>
  );
}
