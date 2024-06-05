import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DrawerClose } from "@/components/ui/drawer";
import { Doctor } from "@/types";

interface DoctorCardProps {
  doctor: Doctor;
  handleBook: (doctor: string) => void;
}
const DoctorCard = ({ doctor, handleBook }: DoctorCardProps) => {
  return (
    <Card className="h-full w-[360px] py-2">
      <CardContent>
        <div className="h-[320px] rounded-t-md overflow-hidden">
          <img
            src={doctor.image}
            alt="doctor"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold ">{doctor.name}</h3>
            <h6 className="font-medium text-muted-foreground">
              {doctor.expertise}
            </h6>
          </div>
          <DrawerClose>
            <Button
              onClick={() => handleBook(doctor.name)}
              size="sm"
              className="text-lg font-semibold"
            >
              Book now
            </Button>
          </DrawerClose>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
