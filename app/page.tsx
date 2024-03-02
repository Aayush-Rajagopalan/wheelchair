import { IPForm } from "@/components/ip_form";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <div className="h-screen bg-dot-white/[0.2] w-full rounded-md flex md:items-center md:justify-center bg-zinc-950 antialiased relative overflow-hidden">
      <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-4xl flex flex-col justify-center  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="mb-4 text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Smart Wheelchair.
        </h1>
        <IPForm />
      </div>
    </div>
  );
}
