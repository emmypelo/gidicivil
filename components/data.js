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
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

import project1 from "/public/img/project1.png";
import project2 from "/public/img/project2.png";
import project3 from "/public/img/project3.png";
import project4 from "/public/img/project4.png";
import project5 from "/public/img/project5.png";
import project6 from "/public/img/project6.png";
import project7 from "/public/img/project7.jpg";
import project8 from "/public/img/project8.png";

export const projectData = [
  {
    id: 1,
    image: project1,
    name: "Lagos2",
  },
  {
    id: 2,
    image: project2,
    name: "Abuja",
  },
  {
    id: 3,
    image: project3,
    name: "Ekiti",
  },
  {
    id: 4,
    image: project4,
    name: "London",
  },
  {
    id: 5,
    image: project5,
    name: "Kenya",
  },
  {
    id: 6,
    image: project6,
    name: "Dubai",
  },
  {
    id: 7,
    image: project7,
    name: "Dakota",
  },
  {
    id: 8,
    image: project8,
    name: "Honolulu",
  },
];
