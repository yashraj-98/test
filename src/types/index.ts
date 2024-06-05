import { FieldValues } from "react-hook-form";

export interface Testimonial {
  id: number;
  name: string;
  jobRole: string;
  testimonial: string;
  image: string;
}

export interface Doctor {
  id: number;
  name: string;
  city: string;
  expertise: string;
  image: string;
}

export interface NameFormData extends FieldValues {
  contact: number;
  name: string;
}

export interface AgeFormData extends FieldValues {
  age: number;
  city: string;
  company: string;
}
