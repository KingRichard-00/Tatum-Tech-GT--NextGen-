import { StaticImageData } from "next/image";
import Brian from "./photos/Brian Ikeogu.jpg";
import Edim from "./photos/Edim John Paul.jpg";
import Mano from "./photos/Eziomano Agelebe.jpg";
import Fathiat from "./photos/Fathiat Odutayo.jpg";
import Francis from "./photos/Francis Egbuleze.png";
import Israel from "./photos/Israel Ekundayo.jpg";
import Kamal from "./photos/Kamaldeen Busari.jpg";
import Lukman from "./photos/Lukman Ayanwola.jpg";
import Naimot from "./photos/Naheemot Babatunde.jpg";
import Doyin from "./photos/Oladoyin Daniel.jpg";
import Peter from "./photos/Peter Gbagbeke.jpg";
import Richard from "./photos/Richard Ademijube.png";
import Timi from "./photos/Timilehin Aguda.jpg";
import Vicky from "./photos/Victoria Ebong.jpg";

export type TraineeImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const traineesImages: TraineeImage[] = [
  {
    id: "1",
    name: "Brian Ikeogu",
    src: Brian,
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "Lagos",
  },
  {
    id: "2",
    name: "Edim John Paul",
    src: Edim,
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Lagos",
  },
  {
    id: "3",
    name: "Eziomano Agelebe",
    src: Mano,
    photographer: "Photo by Andrea Leopardi on Unsplash",
    location: "Lagos",
  },
  {
    id: "4",
    name: "Fathiat Odutayo",
    src: Fathiat,
    photographer: "Photo by Jared Schwitzke on Unsplash",
    location: "Lagos",
  },
  {
    id: "5",
    name: "Francis Egbuleze",
    src: Francis,
    photographer: "Photo by E Mens on Unsplash",
    location: "Lagos",
  },
  {
    id: "6",
    name: "Israel Ekundayo",
    src: Israel,
    photographer: "Photo by Andrea Cipriano on Unsplash",
    location: "Lagos",
  },
  {
    id: "7",
    name: "Kamaldeen Busari",
    src: Kamal,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "Lagos",
  },
  {
    id: "8",
    name: "Lukman Ayanwola",
    src: Lukman,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "Lagos",
  },
  {
    id: "9",
    name: "Naheemot Babatunde",
    src: Naimot,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "Lagos",
  },
  {
    id: "10",
    name: "Oladoyin Daniel",
    src: Doyin,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "Lagos",
  },
  {
    id: "11",
    name: "Peter Gbagbeke",
    src: Peter,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "Lagos",
  },
  {
    id: "12",
    name: "Richard Ademijube",
    src: Richard,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "Lagos",
  },
  {
    id: "13",
    name: "Timilehin Aguda",
    src: Timi,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "Lagos",
  },
  {
    id: "14",
    name: "Victoria Ebong",
    src: Vicky,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "Lagos",
  },
];

export default traineesImages;
