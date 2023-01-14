import "./Heading.css";
import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <>
     {/* <div className="home">
      <div>
      <h1>The Generics</h1>
      </div>
      <div>
        <a href="#">Latest Album</a>
      </div>
      
      <div>
        <button>Hello</button>
      </div>
     </div>
     <section id="tours" class='container'> */}
 <header>
        <h1>The Generics</h1>
        <button className="latest-album">Get our Latest Album</button>
        <button className="play-btn">►</button>
    </header>



     <section id="tours" className='container'>
        <h2>TOURS</h2>
        <div>
            <div class="tour-item">
                <span className="tour-date">JUL16</span>
                <span className="tour-place">DETROIT, MI</span>
                <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span className="tour-date">JUL19</span>
                <span className="tour-place">TORONTO,ON</span>
                <span classname="tour-spec-place">BUDWEISER STAGE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span className="tour-date">JUL 22</span>
                <span className="tour-place"> BRISTOW, VA</span>
                <span className="tour-spec-place">JIGGY LUBE LIVE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span className="tour-date">JUL 29</span>
                <span className="tour-place">PHOENIX, AZ</span>
                <span className="tour-spec-place"> AK-CHIN PAVILION</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span className="tour-date">AUG 2</span>
                <span className="tour-place">LAS VEGAS, NV</span>
                <span className="tour-spec-place">T-MOBILE ARENA</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span className="tour-date">AUG 7</span>
                <span className="tour-place">CONCORD, CA</span>
                <span className="tour-spec-place"> CONCORD PAVILION</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
        </div>
    </section>
  
    </>
  );
};
export default Home;




