import { useContext, useState } from "react";
import Cartcontext from "../store/Cartcontext";

const HeaderCard=(props)=>{
const ctx=useContext(Cartcontext);
    return(
            <button onClick={props.Toggle}>
                <span>Your cart</span>
                <span>{ctx.items.length}</span>
            </button>
    )
}
export default HeaderCard;