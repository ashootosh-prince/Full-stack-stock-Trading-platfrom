import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="text-center mt-5 text-muted p-5">
        <h1 className="fs-1 mb-3">Pricing</h1>
        <p className="fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>
      <div className="row text-center text-muted p-4 mb-5">
        <div className="col-4">
          <img src="media\images\pricing0.svg" />
          <h3 className="mb-4">Free equity delivery</h3>
          <p className="fs-5">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\pricing20.svg" />
          <h3 className="mb-4">Intraday and F&O trades</h3>
          <p className="fs-5">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\pricing0.svg" />
          <h3 className="mb-4">Free direct MF</h3>
          <p className="fs-5">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
