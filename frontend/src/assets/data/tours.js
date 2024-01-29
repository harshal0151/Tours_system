import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Gateway of India",
    city: " Mumbai",
    distance: 500,
    address:"Somewhere",
    price: 1000,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Harshal patil",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title:  "Taj Mahal Tour",
    city: "Agra",
    distance: 200,
    address:"Somewhere",
    price: 5000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Harshal patil",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Golden Triangle Tour",
    city: "Delhi",
    distance: 500,
    address:"Somewhere",
    price: 2000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name:"Harshal patil",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title:"Kerala Backwaters Tour",
    city: "Kochi",
    distance: 500,
    address:"Somewhere",
    price: 1300,
    maxGroupSize: 8,
    desc: "this is the description  ",
    reviews: [
      {
        name: "Harshal patil",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title:"Rajasthan Desert Tour",
    city:"Jodhpur",
    distance: 500,
    address:"Somewhere",
    price: 18000,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Harshal patil",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title:  "Goa Beach Tour",
    city: "Panaji",
    distance: 500,
    address:"Somewhere",
    price: 12000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Harshal patil",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Himalayan Trekking Expedition",
    city: "Leh",
    distance: 500,
    address:"Somewhere",
    price: 30000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title:"Hampi Heritage Tour",
    city:"Hampi",
    distance: 500,
    address:"Somewhere",
    price: 10000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "09",
    title:  "Darjeeling Tea Plantation Tour",
    city: "Darjeeling",
    distance: 500,
    address:"Somewhere",
    price: 12000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "10",
    title: "Kalsubai Trek",
    city: "Ahmednagar",
    distance: 500,
    address:"Somewhere",
    price: 2000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [

    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
