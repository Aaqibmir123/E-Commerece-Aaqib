import React from "react";
import { Context } from "react";
const Cartcontext = React.createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(id)=>{}
    
});
export default Cartcontext;