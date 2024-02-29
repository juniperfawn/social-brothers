import Card from "./BlogCard";

function BlogLibrary() {
  return (
    <div>
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 pb-4 lg:top-[113px]">
        <h1 className="text-white text-4xl font-bold lg:text-5xl">Blog</h1>
      </div>
      <div className="flex justify-center align-middle px-3 md:px-8 lg:max-w-[1116px] lg:max-h-[507px]">
        <div className="grid grid-cols-1 gap-3 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="flex justify-center align-middle gap-4 text-xs py-6">
        <div>
          <p className="text-customDarkGray"> 1 2 3 4 5 .. 18 19</p>
        </div>
        <div>
          <button className="text-customOrange">Volgende pagina →</button>
        </div>
      </div>
    </div>
  );
}

export default BlogLibrary;
