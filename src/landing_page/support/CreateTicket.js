import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="container">
   <div className="row mt-5 text-muted">
        <p className="mb-5 fs-4">To create a ticket, select a relevant topic</p>
        <div className="col-4">
          <p className="fs-4">
            <Link class="nav-link active" to="/OpenAccount">
              <i class="fa-solid fa-plus"></i> Account Opening
            </Link>
          </p>
          <div className="mt-4" style={{ marginLeft: "4.5rem" }}>
            <p>
              <a href="">Getting started</a>
            </p>
            <p>
              <a href="">Online</a>
            </p>
            <p>
              <a href="">Offline</a>
            </p>
            <p>
              <a href="">Charges</a>
            </p>
            <p>
              <a href="">Company, Partnership and HUF</a>
            </p>
            <p>
              <a href="">Non Resident Indian (NRI)</a>
            </p>
          </div>
        </div>
        <div className="col-4">
          <p className="fs-4">
            <Link class="nav-link active" to="/OpenAccount">
              <i class="fa-regular fa-user"></i> Your Zerodha Account
            </Link>
          </p>
          <div className="mt-4" style={{ marginLeft: "4.5rem" }}>
            <p>
              <a href="">Login credentials</a>
            </p>
            <p>
              <a href="">Your Profile</a>
            </p>
            <p>
              <a href="">Account modification and segment addition</a>
            </p>
            <p>
              <a href="">CMR & DP ID</a>
            </p>
            <p>
              <a href="">Nomination</a>
            </p>
            <p>
              <a href="">Transfer and conversion of shares</a>
            </p>
          </div>
        </div>
        <div className="col-4">
          <p className="fs-4">
            <Link class="nav-link active" to="/OpenAccount">
              <i class="fa-solid fa-plus"></i> Trading and Markets
            </Link>
          </p>
          <div className="mt-4" style={{ marginLeft: "4.5rem" }}>
            <p>
              <a href="">Trading FAQs</a>
            </p>
            <p>
              <a href="">Kite</a>
            </p>
            <p>
              <a href="">Margins</a>
            </p>
            <p>
              <a href="">Product and order types</a>
            </p>
            <p>
              <a href="">Corporate actions</a>
            </p>
            <p>
              <a href="">Kite features</a>
            </p>
          </div>
        </div>

        <div className="col-4 mt-5">
          <p className="fs-4">
            <Link class="nav-link active" to="/OpenAccount">
              <i class="fa-solid fa-money-check"></i> Funds
            </Link>
          </p>
          <div className="mt-4" style={{ marginLeft: "4.5rem" }}>
            <p>
              <a href="">Fund withdrawal</a>
            </p>
            <p>
              <a href="">Adding funds</a>
            </p>
            <p>
              <a href="">Adding bank accounts</a>
            </p>
            <p>
              <a href="">eMandates</a>
            </p>
          </div>
        </div>
        <div className="col-4 mt-5">
          <p className="fs-4">
            <Link class="nav-link active" to="/OpenAccount">
              <i class="fa-solid fa-plus"></i> Console
            </Link>
          </p>
          <div className="mt-4" style={{ marginLeft: "4.5rem" }}>
            <p>
              <a href="">IPO</a>
            </p>
            <p>
              <a href="">Portfolio</a>
            </p>
            <p>
              <a href="">Profile</a>
            </p>
            <p>
              <a href="">Reports</a>
            </p>
            <p>
              <a href="">Referral program</a>
            </p>
          </div>
        </div>
        <div className="col-4 mt-5" style={{ marginBottom: "6rem" }}>
          <p className="fs-4">
            <Link class="nav-link active" to="/OpenAccount">
              <i class="fa-solid fa-coins"></i> Coin
            </Link>
          </p>
          <div className="mt-4" style={{ marginLeft: "4.5rem" }}>
            <p>
              <a href="">Understanding mutual funds and Coin</a>
            </p>
            <p>
              <a href="">Coin app</a>
            </p>
            <p>
              <a href="">Coin web</a>
            </p>
            <p>
              <a href="">Transactions and reports</a>
            </p>
            <p>
              <a href="">National Pension Scheme</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
