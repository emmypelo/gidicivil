export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

import project1 from "/public/images/palms.png";
import project2 from "/public/images/civic1.png";
import project3 from "/public/images/civic2.png";
import project4 from "/public/img/project4.png";
import project5 from "/public/img/project5.png";
import project6 from "/public/img/project6.png";
import project7 from "/public/img/project7.jpg";
import project8 from "/public/img/project8.png";

export const projectData = [
  {
    id: 1,
    image: project1,
    name: "The Palms Residence",
    location: "Ajah, Lagos State",
  },
  {
    id: 2,
    image: project2,
    name: "Civic Residence",
    location: "General Paint, Lagos State",
  },
  {
    id: 3,
    image: project3,
    name: "Civic Residence",
    location: "General Paint, Lagos State",
  },
  {
    id: 4,
    image: project4,
    name: "London",
    location: "Ajah, Lagos State",
  },
  {
    id: 5,
    image: project5,
    name: "Kenya",
    location: "Ajah, Lagos State",
  },
  {
    id: 6,
    image: project6,
    name: "Dubai",
    location: "Ajah, Lagos State",
  },
  {
    id: 7,
    image: project7,
    name: "Dakota",
    location: "Ajah, Lagos State",
  },
  {
    id: 8,
    image: project8,
    name: "Honolulu",
    location: "Ajah, Lagos State",
  },
];
