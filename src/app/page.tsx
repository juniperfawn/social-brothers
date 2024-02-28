"use client";
import BlogForm from "../../components/BlogForm";
import BlogPreview from "../../components/BlogPreview";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";

export default function Home() {
  const apiKey = "pj11daaQRz7zUIH56B9Z";
  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const res = await fetch(
          "https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=10&sortBy=title&sortDirection=asc&searchPhrase=test ber&categoryId=1",
          {
            headers: {
              Token: `${apiKey}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch  ${res.status}`);
        }

        const data = await res.json();
        setBlogPosts(data);
      } catch (error: any) {
        console.error("Error fetching blog posts:", error.message);
      }
    }

    fetchBlogPosts();
  }, []); // Empty dependency array means this effect runs once on mount

  console.log("THIS IS SET THE BLOG POST DATA");
   console.log(blogPosts);
   console.log("Done");
   
  return (
    <main className="bg-customGray">
      <NavBar />
      <div className="lg:flex justify-center align-middle gap-6 lg:py-16 ">
        <div className="sm:flex justify-center align-middle">
          <BlogForm />
        </div>
        <div className="sm:flex justify-center align-middle">
          {blogPosts && <BlogPreview posts={blogPosts} />}
        </div>
      </div>
      <Footer />
    </main>
  );
}
