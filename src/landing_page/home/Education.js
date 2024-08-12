import React from 'react';

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                <img src='media/images/education.svg' style={{width:"70%"}}/>
                </div>
                <div className='col-6 mt-5'>
                    <h1 className='fs-2 mb-5'>Free and open market education</h1>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' className='mb-3' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
            </div>
        </div>
     );
}

export default Education;