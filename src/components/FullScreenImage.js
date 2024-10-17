import Image from "next/image";
import Link from "next/link";
import { GoArrowDown } from "react-icons/go";

const FullScreenImage = () => {
  return (
    <section>
      <div className="relative w-full overflow-hidden h-[100vh]">
        <Image
          src={"/images/Placeholder.jpg"}
          alt={"Placeholder image"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
          priority={true}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white layout">
          <h1 className="text-center mb-2">Title</h1>
          <p className="text-center mb-8">Subtitle</p>
          <Link
            href="/"
            className="block font-secondary w-fit px-8 py-3 rounded-lg text-orange-950 font-semibold bg-primary-200 text-center mx-auto transition-all duration-500 relative hover:pr-[40px] hover:pl-[24px] hover:bg-[#F8D2AA] hover:font-bold after:content-['»'] after:font-bold after:transition-all after:absolute after:opacity-0 after:right-[0px] after:duration-500 hover:after:right-4 hover:after:opacity-100"
          >
            Action Button
          </Link>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <GoArrowDown
            className="animate-bounce"
            style={{ color: "white", fontSize: "60px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default FullScreenImage;
