import { useContext } from "react";
import Cartcontext from "../store/Cartcontext";
import Summary from "./Summary";

const productArr = [
  {
    id:1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id:3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const AvailableProducts = () => {
  
  const cts=useContext(Cartcontext);
  const ADDitems=(item)=>{
    cts.addItem(item)
  }

  const Result = productArr.map((item) => (
    <Summary title={item.title} 
    price={item.price} imageUrl={item.imageUrl} key={item.id} onadd={ADDitems.bind(null,item)}/>
  ));
  return <div>{Result}</div>;
};
export default AvailableProducts;
