import Image6 from '../assets/Screenshot_20240816_114055_calculator-mobile-app.jpg'
import Image5 from "../assets/Screenshot 2024-06-17 113402.png";
import Image4 from "../assets/Screenshot 2024-06-17 113906.png";
import Image3 from "../assets/Screenshot 2024-06-17 114340.png";
import Image2 from "../assets/Screenshot 2024-06-17 115443.png";
import Image1 from "../assets/Screenshot 2024-06-17 141113.png";
import { StaticImageData } from 'next/image';



interface Data {
  id: number
  name: String
  language: String
  description: String
  img: StaticImageData
  url: String,
  height: number,
  width: number,
  
}

export const projectsData = [{
  id: 1,
  language: "React Native",
  url: "https://github.com/AhiVaElGesundo1320/Big-Mono",
  name: "Cars Parts",
  description:
    "An Application based on the sale of high-performance parts and accessories for vehicles",
  img: Image1,
  height: 100,
  width: 200,
},
{
  id: 2,
  language: "React Native",
  url: "https://github.com/AhiVaElGesundo1320/Todo-List",
  name: "Todo List",
  description: "A task application",
  img: Image2,
  height: 100,
  width: 200,
},
{
  id: 3,
  language: "React Native",
  url: "https://github.com/ethangmg/Calculator-mobile",
  name: "Calculator App",
  description: "An Mobile App based on a calculator",
  img: Image6,
  height: 250,
  width: 350,
},
{
  id: 3,
  language: "Next",
  url: "https://github.com/AhiVaElGesundo1320/Calculator",
  name: "Calculator Web",
  description: "A web page based on a calculator",
  img: Image3,
  height: 250,
  width: 350,
},
{
  id: 4,
  language: "React",
  url: "https://github.com/AhiVaElGesundo1320/Clock-app",
  name: "Clock Web",
  description:
    "A web page based on a clock which has a timer, stopwatch, a digital clock and an analog clock",
  img: Image4,
  height: 250,
  width: 350,
},
{
  id: 5,
  language: "React",
  url: "https://github.com/AhiVaElGesundo1320/My-music-app",
  name: "Music Page",
  description:
    "A web page where you can obtain information about your favorite artist, song or album",
  img: Image5,
  height: 250,
  width: 350,
},
];