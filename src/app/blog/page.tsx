import BlogLibrary from "../../../components/BlogLibrary";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

export default function Blog() {
  return (
    <main>
      <NavBar />
      <div className="py-5 sm:py-4 sm:flex sm:justify-center sm:align-middle md:py-16">
        <BlogLibrary />
      </div>
      <Footer />
    </main>
  );
}
