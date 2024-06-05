"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UseFormRegister } from "react-hook-form";
import { AgeFormData } from "@/types";

const cities = [
  {
    value: "mumbai",
    label: "Mumbai",
  },
  {
    value: "jaipur",
    label: "Jaipur",
  },
  {
    value: "lucknow",
    label: "Lucknow",
  },
  {
    value: "hyderabad",
    label: "Hyderabad",
  },
  {
    value: "delhi",
    label: "Delhi",
  },
  {
    value: "ahmedabad",
    label: "Ahmedabad",
  },
  {
    value: "chennai",
    label: "Chennai",
  },
  {
    value: "kolkata",
    label: "Kolkata",
  },
  {
    value: "pune",
    label: "Pune",
  },
  {
    value: "bengaluru",
    label: "Bengaluru",
  },
];

interface CitySelectorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegister<AgeFormData>;
}

export function CitySelector({ value, setValue, register }: CitySelectorProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-[320px] h-[48px] text-lg bg-secondary"
        >
          {value
            ? cities.find((city) => city.value === value)?.label
            : "Select City..."}
          <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0">
        <Command>
          <CommandInput placeholder="Search city..." />
          <CommandEmpty>No city found.</CommandEmpty>
          <CommandGroup>
            {cities.map((city) => (
              <CommandItem
                key={city.value}
                value={city.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === city.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {city.label}
                <input
                  type="hidden"
                  {...register("city", {
                    required: { value: true, message: "City is required" },
                  })}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
