// React.ReactNode is a TypeScript type that includes: Strings, Numbers, JSX, Components, null, undefined, etc.
// use children: React.ReactNode when you're building reusable layouts or wrapper components.

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
