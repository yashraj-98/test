import { Testimonial } from "@/types";

interface CardProps {
  testimonial: Testimonial;
}
const Card = ({ testimonial }: CardProps) => {
  return (
    <div className="pt-24 pb-16 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="pb-20 bg-secondary sm:pb-24 xl:pb-0">
        <div className="flex flex-col items-center px-6 mx-auto max-w-7xl gap-x-8 gap-y-10 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="w-full max-w-2xl -mt-8 xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 object-cover w-full h-full shadow-2xl rounded-2xl"
                src={testimonial.image}
                alt={testimonial.name}
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <div className="relative pt-6 isolate sm:pt-12">
              <blockquote className="text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                <p>{testimonial.testimonial}</p>
              </blockquote>
              <div className="mt-8 text-base">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="mt-1 text-muted-foreground">
                  {testimonial.jobRole}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
