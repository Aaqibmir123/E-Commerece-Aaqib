// import { useState } from "react";
import { Card,Row,Col } from "react-bootstrap";
const Summary = (props) => {
  return (
    <div className="Container col-sm">
      <div className="row">
        <div className="col-10">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <img src={props.imageUrl} className="card-img-top" alt="..."></img>
              <h2>{props.price}</h2>
             <button onClick={props.onadd}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};
export default Summary;

