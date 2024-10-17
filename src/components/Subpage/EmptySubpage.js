import CallToAction from "@/components/CallToAction";
import HeroSubpage from "@/components/Subpage/HeroSubpage";
import Image from "next/image";

const EmptySubpage = () => {
  return (
    <main>
      <HeroSubpage title="Subpage 1" />

      <section className="bg-gray-200">
        <article className="layout">
          <div className="grid gap-16 py-16 md:py-32 md:grid-cols-2">
            <Image
              src="/images/Placeholder.jpg"
              alt="Placeholder image"
              width={500}
              height={500}
              className="self-center justify-self-center rounded-md w-full h-full object-cover"
            />
            <p className="text-left text-orange-950">
              Law & Justice is a peer-reviewed journal published twice yearly in
              an era of change and in what is now called the plural society when
              nearly all legal concepts, customs and conventions are likely to
              be questioned. In this process, views are offered from Christians
              involved in the practice, study and teaching of, or writing about
              law. We are concerned with both the substance of the law and its
              procedures, and its philosophy considered as they are and as we
              think they ought to be. We do not exclude any area of law from our
              scrutiny because we believe that all legal developments should be
              examined from a Christian perspective.
              <br />
              <br />
              Contributions to Law & Justice express the views of their authors
              and not necessarily the views of the Editorial Board, the Editor,
              or the Trustees.
            </p>
          </div>
        </article>
      </section>

      <section className="bg-primary-500">
        <article className="layout pb-16 md:pb-32">
          Here goes the next section, and so on...
        </article>
      </section>

      <CallToAction
        title="Buy it and Read it!"
        text="Invaluable to anybody concerned with the development of law and its increasing impact on private and public life"
        buttonText="Subscribe"
      />
    </main>
  );
};

export default EmptySubpage;
