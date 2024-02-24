import Image from "next/image";
import logo from "../public/logo.svg";
import background from "../public/nav_background.jpg";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className=" bg-cover bg-center min-h-52 text-white text-lg">
        <div className="relative">
          <div className="absolute w-full max-h-52 z-0 ">
            <Image
              src={background}
              alt="background image"
              className="w-full max-h-52 object-cover"
            />
          </div>
        </div>
        <div className="block pt-4 sm:flex sm:justify-around sm:p-8 relative z-10">
          <div className="flex justify-center align-middle sm:block">
            <Image
              src={logo}
              alt="Social Brother's Logo"
              className="w-[240px] h-[57px]"
            />
          </div>
          <ul className="flex content-center gap-8 justify-center pt-16 sm:justify-normal sm:py-0 ">
            <li>
              <Link href="/" className="underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;

{
  /* <img src={require("../../assets/portrait.jpg")} alt="" /> */
}
