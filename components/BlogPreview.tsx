import Card from "./BlogCard";
import CustomButton from "./CustomButton";

function BlogPreview() {
  return (
    <div className=" bg-white w-full my-6 p-3 sm:w-4/5 lg:my-0 lg:h-[659px] lg:w-[642px]">
      <div className="p-1 sm:p-6 sm:pb-0px">
        <div className="flex gap-3 overflow-x-scroll overflow-y-hidden sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="py-4 flex justify-center align-middle">
        <CustomButton />
      </div>
    </div>
  );
}

export default BlogPreview;