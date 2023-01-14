
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import Cartcontext from "../store/Cartcontext";
const Card = (props) => {

  const cts=useContext(Cartcontext)
  const remove=(id)=>{    
    cts.removeItem(id);
  }
   let Total=0;
  const Result = cts.items.map((item) => {
    Total=Total+item.price;
   return (
    <li key={item.id}>
        {item.title} {item.price} 
        <Button onClick={remove.bind(null,item.id)}>Remove</Button>
    </li>
    );
  });

  return (
    <Modal  show={true} onHide={props.Data}>
    <Modal.Header closeButton>
      <Modal.Title>Your</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {Result}
        <div>
            Total={Total};
        </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.Data} >
        Close
      </Button>
    </Modal.Footer>
   
  </Modal>
  )

};
export default Card;
