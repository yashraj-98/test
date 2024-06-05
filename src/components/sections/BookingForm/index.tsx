import { Button } from "@/components/ui/button";
import { CitySelector } from "@/components/ui/citySelector";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import DoctorsDrawer from "./doctorsDrawer";
import { AgeFormData, NameFormData } from "@/types";

export default function BookingForm() {
  const queryParameters = new URLSearchParams(window.location.search);
  const cityParam = queryParameters.get("city");
  const initialCityValue = cityParam ? cityParam : "";
  // const [showIndicator, setShowIndicator] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<
    "name" | "cityAge" | "complaints" | "prevExp" | "doctors" | "booked"
  >("name");
  const [cityValue, setCityValue] = useState<string>(initialCityValue);
  const [age, setAge] = useState<number>(0);
  const [nameValue, setNameValue] = useState<string>("");
  const [doctor, setDoctor] = useState<string>("");

  const {
    handleSubmit: handleSubmitNameForm,
    register: regsiterNameForm,
    formState: { errors: nameFormErrors },
  } = useForm<NameFormData>();
  const {
    handleSubmit: handleSubmitAgeForm,
    register: regsiterAgeForm,
    formState: { errors: ageFormErrors },
  } = useForm<AgeFormData>();

  const handleTogglePage = (
    page: "name" | "cityAge" | "complaints" | "prevExp" | "doctors" | "booked"
  ) => {
    setCurrentPage(page);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitFirst: SubmitHandler<NameFormData> = (data) => {
    reset();
    const { name } = data;
    setNameValue(name);
    handleTogglePage("cityAge");
  };

  function onSubmitSecond(data: AgeFormData) {
    reset();
    const { age } = data;
    setAge(age);
    handleTogglePage("complaints");
  }

  function onSubmitThird() {
    reset();
    if (age >= 40) handleTogglePage("prevExp");
    else handleTogglePage("doctors");
  }

  function onSubmitFourth() {
    reset();
    handleTogglePage("doctors");
  }

  function onBook(doctor: string) {
    setDoctor(doctor);
    handleTogglePage("booked");
  }

  return (
    <div
      className="relative h-full min-h-screen mt-20 isolate"
      id="bookingForm"
    >
      <div className="flex flex-col mx-auto max-w-7xl lg:flex-row">
        <div className="relative flex-1 px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="flex items-center h-full max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 w-full overflow-hidden -z-10 ring-1 ring-white/5 lg:w-1/2">
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col max-w-md gap-4 pt-28">
              <h2 className="text-3xl font-bold tracking-tight ">
                Get your free appointment now
              </h2>
              <p className="text-lg font-semibold text-muted-foreground">
                Choose from over 60+ Expert Physiotherapists for 200+ Conditions
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-4 px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
          {currentPage === "name" && (
            <>
              <h2 className="text-2xl font-semibold">Fill in your details</h2>
              <form
                onSubmit={handleSubmitNameForm(onSubmitFirst)}
                action="submit"
                className="flex flex-col gap-4"
              >
                <div>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-[320px] h-[48px] text-lg bg-secondary"
                    {...regsiterNameForm("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  <span className="mt-6 text-xs text-red-500">
                    {nameFormErrors.name?.message as string}
                  </span>
                </div>
                <div>
                  <Input
                    type="number"
                    placeholder="Contact"
                    id="contact"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                    }}
                    className="text-lg bg-secondary w-[320px] h-[48px]"
                    {...regsiterNameForm("contact", {
                      required: {
                        value: true,
                        message: "Contact is required",
                      },
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Invalid contact number, must be 10 digits",
                      },
                    })}
                  />
                  <span className="mt-6 text-xs text-red-500">
                    {nameFormErrors.contact?.message as string}
                  </span>
                </div>
                <Button type="submit" className="text-lg font-semibold">
                  Get started
                </Button>
              </form>
            </>
          )}
          {currentPage === "cityAge" && (
            <>
              <h2 className="text-2xl font-semibold">
                Help us understand you better
              </h2>
              <form
                onSubmit={handleSubmitAgeForm(onSubmitSecond)}
                action="submit"
                className="flex flex-col gap-4"
              >
                <div>
                  <Input
                    type="number"
                    id="age"
                    placeholder="Age"
                    className="w-[320px] h-[48px] text-lg bg-secondary"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                    }}
                    {...regsiterAgeForm("age", {
                      required: {
                        value: true,
                        message: "Age is required",
                      },
                    })}
                  />
                  <span className="mt-6 text-xs text-red-500">
                    {ageFormErrors.age?.message as string}
                  </span>
                </div>
                <div className="flex flex-col gap-0">
                  <CitySelector
                    value={cityValue}
                    setValue={setCityValue}
                    register={regsiterAgeForm}
                  />
                  <span className="mt-6 text-xs text-red-500">
                    {ageFormErrors.city?.message as string}
                  </span>
                </div>
                <div>
                  <Input
                    type="text"
                    id="company"
                    placeholder="Company"
                    className="w-[320px] h-[48px] text-lg bg-secondary"
                    {...regsiterAgeForm("company", {
                      required: {
                        value: true,
                        message: "Company is required",
                      },
                    })}
                  />
                  <span className="mt-6 text-xs text-red-500">
                    {ageFormErrors.company?.message as string}
                  </span>
                </div>
                <Button type="submit" className="text-lg font-semibold">
                  Continue
                </Button>
              </form>
            </>
          )}
          {currentPage === "complaints" && (
            <>
              <h2 className="text-2xl font-semibold">
                Fill in your chief complaints
              </h2>
              <form
                onSubmit={handleSubmit(onSubmitThird)}
                action="submit"
                className="flex flex-col gap-4"
              >
                <div>
                  <Textarea
                    rows={4}
                    id="complaints"
                    placeholder="Chief complaints"
                    className="w-[320px] text-lg bg-secondary"
                    {...register("complaints", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                  <span className="mt-6 text-xs text-red-500">
                    {errors.complaints?.message as string}
                  </span>
                </div>
                <Button type="submit" className="text-lg font-semibold">
                  {age >= 40 ? "Continue" : "Get the best doctors for you"}
                </Button>
              </form>
            </>
          )}
          {currentPage === "prevExp" && (
            <>
              <h2 className="text-2xl font-semibold">
                Tell us about your previous experience
              </h2>
              <form
                onSubmit={handleSubmit(onSubmitFourth)}
                action="submit"
                className="flex flex-col gap-4"
              >
                <div>
                  <Textarea
                    rows={4}
                    id="complaints"
                    placeholder="Previous experience"
                    className="w-[320px] text-lg bg-secondary"
                    {...register("complaints", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                  <span className="mt-6 text-xs text-red-500">
                    {errors.complaints?.message as string}
                  </span>
                </div>
                <Button type="submit" className="text-lg font-semibold">
                  Get the best doctors for you
                </Button>
              </form>
            </>
          )}
          {currentPage === "doctors" && (
            <DoctorsDrawer cityValue={cityValue} handleBook={onBook} />
          )}
          {currentPage === "booked" && (
            <div className="px-8">
              <h1 className="text-3xl font-semibold">
                Congratulations {nameValue} your appointment is booked with{" "}
                {doctor}!
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
