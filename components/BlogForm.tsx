// import { useForm } from "react-hook-form";
import CustomButton from "./CustomButton";

function BlogForm() {
  return (
    <div className="bg-white w-full p-4 mt-6 sm:py-0 sm:w-4/5 lg:mt-0 lg:h-[659px] lg:w-[451px]">
      <div className="p-2 sm:p-6">
        <h2 className="text-lg font-bold sm:text-2xl">
          Plaats een blog bericht
        </h2>
        <form className="">
          <div className="pt-6">
            <label className="formLabel">Berichtnaam*</label>
            <br />
            <input
              type="text"
              id="berichtnaam"
              name="berichtnaam"
              placeholder="Geen titel"
              className="formInput focus:outline-none focus:ring-2 focus:ring-customOrange"
              required
            />
            <br />
          </div>
          <div className="pt-6">
            <label className="formLabel">Categorie*</label>
            <br />
            <input
              type="text"
              id="categorie"
              name="categorie"
              placeholder="Geen titel"
              className="formInput focus:outline-none focus:ring-2 focus:ring-customOrange"
              required
            />
            <br />
          </div>
          <div className="pt-6">
            <label className="formLabel">Header albeelding*</label>
            <br />
            <input
              type="file"
              id="myfile"
              name="myfile"
              required
              className="w-full"
            />
            <br />
          </div>
          <div className="pt-6">
            <label className="formLabel">Bericht*</label>
            <textarea
              id="story"
              name="story"
              className="formInput h-20 sm:h-[214px] focus:outline-none focus:ring-2 focus:ring-customOrange"
              required
            />
            <br />
          </div>
        </form>
        <div className="flex justify-center align-middle pt-6">
          <CustomButton />
        </div>
      </div>
    </div>
  );
}

export default BlogForm;
