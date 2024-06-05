import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useAxios from "@/hooks/useAxios";
import { Doctor } from "@/types";
import DoctorCard from "./doctorcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ErrorPage from "../ErrorPage";
import Spinner from "@/components/ui/spinner";

interface DoctorsDrawerProps {
  cityValue: string;
  handleBook: (doctor: string) => void;
}

const DoctorsDrawer = ({ cityValue, handleBook }: DoctorsDrawerProps) => {
  const {
    response: doctors,
    error,
    loading,
  } = useAxios({ method: "get", url: "/doctors" });

  const filteredDoctors = doctors?.filter(
    (doctor: Doctor) => doctor.city.toLowerCase() === cityValue
  );

  return (
    <Drawer>
      <DrawerTrigger>
        <Button
          variant="outline"
          className="h-12 text-lg font-medium transition-all ease-linear shadow-btn focus:translate-x-3 focus:translate-y-3 focus:shadow-none hover:bg-background"
        >
          See all the available doctors for you
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-8 py-4">
        <DrawerHeader>
          <DrawerTitle>Doctors around you</DrawerTitle>
          <DrawerDescription>
            We have found the best doctors based on your preferences.
          </DrawerDescription>
        </DrawerHeader>
        {error ? (
          <ErrorPage />
        ) : loading ? (
          <Spinner size="large" />
        ) : (
          <Carousel opts={{ align: "center" }} className="px-6 py-4">
            <CarouselContent className="gap-4 ml-16">
              {filteredDoctors?.map((doctor: Doctor) => (
                <CarouselItem key={doctor.id} className="basis-1/3">
                  <DoctorCard doctor={doctor} handleBook={handleBook} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default DoctorsDrawer;
