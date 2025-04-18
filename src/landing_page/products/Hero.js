import React from 'react';


function Hero() {
    return (  
        <div className='container border-bottom'>
        <div className='text-center mt-5 p-3'>
            <h1>Technology</h1>
            <h3 className='text-muted mt-3 fs-5'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='mt-3 mb-5'>Check out our <a style={{textDecoration:"none"}} href=''>investment offerings <i class="fa-solid fa-arrow-right fs-10"></i></a></p>
        </div>
        </div>
    );
}

export default Hero;