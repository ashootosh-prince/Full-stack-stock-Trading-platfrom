import React from 'react';
import { Link } from "react-router-dom";

function Team() {
    return ( 
        <div className="container">
        <div className="row p-3 text-muted" 
      >

        <div className="col-6 p-3 text-center">
            <img src='media/images/nithinKamath.jpg' 
            style={{borderRadius:"100%", width:"50%"}}/>
            <h1 className='mt-5 fs-4'>Nithin Kamath</h1>
            <h5>Founder, CEO</h5>
        </div>
        <div className="col-6 p-3"
        style={{lineHeight:"1.7", fontSize:"1em"}}>
        <h1 className='mb-5'>People</h1>
            
        <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a style={{textDecoration:"none"}} href=''>Homepage</a> / <a style={{textDecoration:"none"}} href=''>TradingQnA</a>  / <a style={{textDecoration:"none"}} href=''>Twitter</a></p>
        </div>
      </div>
    </div>
     );
}

export default Team;