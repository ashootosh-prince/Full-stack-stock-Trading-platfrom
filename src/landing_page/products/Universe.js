import React from "react";

function Universe() {
  return (
    <dev className="container mt-5">
      <div className="text-center">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center" style={{padding:"120px"}}>
        <div className="col-4 p-3">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ width: "200px", height: "55px" }}
          />
          <p className="text-muted mt-4" style={{fontSize:"12px",fontWeight:"500"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\images\sensibullLogo.svg"
            style={{ width: "200px", height: "55px" }}
          />
          <p className="text-muted mt-4" style={{fontSize:"12px",fontWeight:"500"}}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\images\tijori.svg"
            style={{ width: "200px", height: "55px" }}
          />
          <p className="text-muted mt-4" style={{fontSize:"12px",fontWeight:"500"}}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        
        <div className="col-4 p-3">
          <img
            src="media\images\streakLogo.png"
            style={{ width: "200px", height: "55px" }}
          />
          <p className="text-muted mt-4" style={{fontSize:"12px",fontWeight:"500"}}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media\images\smallcaseLogo.png"
            style={{ width: "200px", height: "50px" }}
          />
          <p className="text-muted mt-3" style={{fontSize:"12px",fontWeight:"500"}}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media\images\dittoLogo.png"
            style={{ width: "145px", height: "55px" }}
          />
          <p className="text-muted mt-3" style={{fontSize:"12px",fontWeight:"500"}}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up now
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </dev>
  );
}

export default Universe;
