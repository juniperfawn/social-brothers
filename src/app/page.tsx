import NavBar from "../../components/navBar";
import BlogForm from "../../components/BlogForm";
import BlogPreview from "../../components/BlogPreview";
import Footer from "../../components/Footer";

export default function Home() {
  const apiKey = "pj11daaQRz7zUIH56B9Z";
  async function getBlogPosts() {
    try {
      const res = await fetch(
        "https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=10&sortBy=title&sortDirection=asc&searchPhrase=test ber&categoryId=1",
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      return data;
    } catch (error: any) {
      console.error("Error fetching blog posts:", error.message);
      throw error;
    }
  }
  getBlogPosts();

  return (
    <main className="bg-customGray">
      <NavBar />
      <div className="lg:flex justify-center align-middle gap-6 lg:py-16 ">
        <div className="sm:flex justify-center align-middle">
          <BlogForm />
        </div>
        <div className="sm:flex justify-center align-middle">
          <BlogPreview />
        </div>
      </div>
      <Footer />
    </main>
  );
}
