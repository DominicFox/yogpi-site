import Image from "next/image";

const CallToAction = (props) => {
  return (
    <section className="">
      <article className="relative h-[400px]">
        <Image
          src={"/images/Placeholder.jpg"}
          alt={"Placeholder image"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center layout">
          <h2 className="pb-4 font-mono font-black">{props.title}</h2>
          <p className="pb-4">{props.text}</p>
          <button>{props.buttonText}</button>
        </div>
      </article>
    </section>
  );
};

export default CallToAction;
