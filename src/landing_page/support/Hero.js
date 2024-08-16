import React from "react";

function Hero() {
  return (
    <section className="container-fluit" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4 className="mt-5">Support Portal</h4>
        <p>
          <p className="mt-5" ><a href="" style={{ textDecoration: "underline",  textUnderlineOffset: "10px" }}>
            Track Tickets
          </a></p>
        </p>
      </div>
      <div className="row p-5" id="searchbox">
        <div className="col-6 p-5 ">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input  
          placeholder=" Eg: how do i activate F&O, why is my order getting rejected..."
          
          type="text"
          />
          <br />
          
            <a href="">Track account opening</a>{" "}
          
          <a href="">Track segment activation</a>
          <a href="">Intraday margins </a>
          <br />
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5 mt-5 mb-5 fs-5">
          <h4>Featured</h4>
          <p>
            1.<a href="">Surveillance measure on scrips - August 2024</a>
          </p>
          <p>
            2.<a href="">Latest Intraday leverages and Square-off timings</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
