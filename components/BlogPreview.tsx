import Card from "./BlogCard";
import CustomButton from "./CustomButton";

function BlogPreview(props: any) {
  // let card = props.posts.data;

  return (
    <div className=" bg-white w-full my-6 p-3 sm:w-4/5 lg:my-0 lg:h-[659px] lg:w-[642px]">
      {/* <h1>THIS IS THE SPOT: {props.posts.current_page}</h1> */}
      <div className="p-1 sm:p-6 sm:pb-0px">
        <div className="flex gap-3 overflow-x-scroll overflow-y-hidden sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible">
          {/* {data.data.map((card: any) => {
            return <Card title={card.title} content={card.content} />;
          })} */}
          {/* {data.map((card: any) => {
            return (
              <Card
                key={card.id}
                title={card.title}
                content={card.content}
                imageUrl={card.img_url}
              />
            );
          })} */}
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
