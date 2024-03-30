import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container max-w-2xl py-20 md:py-32 ">
      <div className="text-center  space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Elevate
            </span>{" "}
            Your
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Digital
            </span>{" "}
            Presence
          </h2>
        </main>

        <p className="text-xl text-center w-full text-muted-foreground md:w-10/12 mx-auto ">
          Transform your ideas into innovative solutions with companyname, your agile development partner.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>
        </div>
      </div>


      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
