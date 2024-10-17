import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col-reverse justify-between items-center text-center w-11/12 mx-auto py-16 md:flex-row">
        <div className="basis-1/3 md:text-left">
          <p>Address 1</p>
          <p>Address 2</p>
          <p>Address 3</p>
          <p>Address 4</p>
          <p>Address 5</p>
          <p>
            <br />
          </p>
          <p>Registered Charity Number: 313580</p>
        </div>
        <Image
          src="/images/Placeholder.jpg"
          alt="Placeholder image"
          width={250}
          height={100}
          className="object-contain p-16 w-full max-w-[350px] md:max-w-[450px]"
        />
        {/* Turn these into links */}
        <div className="flex flex-col basis-1/3 md:text-right">
          <Link href="/">Home</Link>
          <Link href="/">Page 1</Link>
          <Link href="/">Page 2</Link>
          <Link href="/">Page 3</Link>
          <Link href="/">Page 4</Link>
          <Link href="/">Page 5</Link>
        </div>
      </div>
      <div className="bg-gray-100">
        <p className="text-center md:text-right py-2 w-11/12 mx-auto text-gray-500">
          © {new Date().getFullYear()} Company Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
