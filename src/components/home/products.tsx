import ArrowRightIcon from "@/assets/icons/arrow-right";
import { CATEGORIES } from "@/const/products";

export default function Products() {
  return (
    <section className="flex flex-col gap-4 sm:px-[8vw] md:px-[12vw] 2xl:px-[16vw] py-[1in]">
      <h2 className="text-2xl xl:text-3xl">Odkryj kolekcje cieszące oko</h2>
      <p className="text-[#1C1C1C]/80 text-sm">
        Lorem ipsum dolor sit amet consectetur. Nam gravida lacinia nisl eu
        nulla pretium maecenas eget pulvinar.
      </p>
      <div className="flex flex-col sm:grid grid-cols-2 xl:grid-cols-4 mt-8">
        {CATEGORIES.map((category, i) => (
          <CategoryRef index={i} {...category} key={category.title} />
        ))}
      </div>
    </section>
  );
}

function CategoryRef({ index, title, icon }: Category & { index: number }) {
  const Icon = () => icon;
  return (
    <div
      className={`${
        index > 3 ? "even:bg-[#F7F8F8]" : "odd:bg-[#F7F8F8]"
      } border-collapse border-[1px] border-[#F7F8F8] py-10 px-8 flex flex-col gap-5`}
    >
      <Icon />
      <div className="flex items-center justify-between">
        <h3 className="text-lg xl:text-xl">{title}</h3>
        <ArrowRightIcon />
      </div>
    </div>
  );
}
