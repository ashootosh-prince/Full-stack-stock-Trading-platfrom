import React from "react";

function RightSection({ productName, productDesription, learnMore, imageURL }) {
  return (
    <dev className="container">
      <div className="row p-5">
        <div className="col-5 mt-5 p-5">
          <h1 className="mb-4">{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="col-6">
          <img src={imageURL} class="img-fluid" alt="Responsive image" />
        </div>
      </div>
    </dev>
  );
}

export default RightSection;
