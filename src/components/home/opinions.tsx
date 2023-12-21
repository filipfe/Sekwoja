import { OPINIONS } from "@/const/opinions";
import Link from "next/link";

export default function Opinions() {
  return (
    <section className="bg-background-dark px-[8vw] md:px-[12vw] 2xl:px-[16vw] py-[1in] flex flex-col gap-4">
      <h2 className="text-2xl xl:text-3xl text-white">
        Co mowią o nas klienci
      </h2>
      <p className="text-white/80 text-sm">
        Lorem ipsum dolor sit amet consectetur. Nam gravida lacinia nisl eu
        nulla pretium maecenas eget pulvinar.
      </p>
      <div className="mt-8 flex flex-col gap-6 xl:grid grid-cols-3">
        {OPINIONS.map((opinion, i) => (
          <OpinionRef {...opinion} key={`opinion:${i}`} />
        ))}
      </div>
      <Link
        className="mt-8 w-max text-white after:block after:h-[1px] after:bg-primary after:w-full after:max-w-[25%] after:transition-all hover:after:max-w-[50%] after:ml-auto"
        href="/"
      >
        Zobacz wszystkie opinie google
      </Link>
    </section>
  );
}

function OpinionRef({ content, author, rating }: Opinion) {
  return (
    <div className="bg-secondary-dark rounded px-8 py-10 flex flex-col gap-4">
      <p className="text-sm text-white/80">{content}</p>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="rounded-full h-8 w-8 bg-background-dark"></div>
          <span className="text-[12px] text-white">{author}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-white">{rating}</span>
        </div>
      </div>
    </div>
  );
}
