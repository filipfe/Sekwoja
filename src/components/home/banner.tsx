import CalendarIcon from "@/assets/icons/calendar";
import Button from "../ui/button";
import Image from "next/image";
import { slider1 } from "@/assets/images/hero/hero";

export default function Banner() {
  return (
    <section className="px-4 sm:px-[8vw] md:px-[12vw] 2xl:px-[16vw] flex items-center flex-wrap gap-x-8 justify-center min-h-[1.8in] relative">
      <h2 className="text-2xl xl:text-3xl text-white">
        Skontaktuj się z naszym specjalistą
      </h2>
      <Button className="fill-secondary">
        <CalendarIcon /> Zamów pomiar
      </Button>
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          objectFit="cover"
          fill
          sizes="100vw"
          src={slider1}
          alt="Room photo"
        />
      </div>
      <div className="bg-[#171612]/65 h-full w-full absolute inset-0 -z-10"></div>
    </section>
  );
}
