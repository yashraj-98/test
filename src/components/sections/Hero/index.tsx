import { CornerRightDown } from "lucide-react";
import { Button } from "../../ui/button";
import { Typewriter } from "react-simple-typewriter";

const lines = [
  "60+ Expert Physiotherapists",
  "250+ conditions treated",
  "20000+ Patients",
  "1 lakh+ Sessions",
];

const Hero = () => {
  function handleScrollTestimonials() {
    const element = document.getElementById("testimonials");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleScrollBookingForm() {
    const element = document.getElementById("bookingForm");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="flex h-screen mb-20">
      <div className="basis-[40%] overflow-hidden hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="basis-[60%] flex flex-col justify-center px-24 gap-4 relative">
        <div className="flex mb-4 text-2xl font-bold lg:text-5xl ">
          <span className="border border-[#00ACC1] text-[#00ACC1] px-3 py-2">
            Fix
          </span>{" "}
          <span className="bg-[#00ACC1] px-3 py-2 text-background">Health</span>
        </div>
        <h1 className="text-4xl font-bold leading-snug">
          <Typewriter words={lines} cursor={true} loop={false} />
        </h1>
        <p className="text-2xl font-semibold text-accent-foreground">
          Book your appointment for{" "}
          <span className="relative">
            <span className="absolute top-3.5 h-1 w-full bg-red-600 -skew-y-[10deg] trasnsform" />
            Rs 1000
          </span>{" "}
          <span className="text-3xl font-bold uppercase">Free</span>
        </p>
        <div className="mt-4">
          <Button
            className="w-32 h-12 text-lg font-semibold transition-all ease-linear bg-transparent border rounded-none border-foreground text-primary hover:bg-transparent shadow-btn hover:shadow-none hover:translate-x-3 hover:translate-y-3"
            onClick={handleScrollBookingForm}
          >
            Book now
          </Button>
        </div>
        <div className="absolute flex items-end gap-2 text-lg font-semibold bottom-12 text-muted-foreground">
          Check out what our users have to say about us
          <CornerRightDown
            onClick={handleScrollTestimonials}
            className="cursor-pointer animate-bounce"
            size={36}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
