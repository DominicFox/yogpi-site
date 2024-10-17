import Image from "next/image";

const HeroSubpage = (props) => {
  return (
    <section className="fade-in-start">
      <div className="relative w-full overflow-hidden h-[50vh]">
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
          <h1 className="text-center mb-2 text-5xl">{props.title}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSubpage;
