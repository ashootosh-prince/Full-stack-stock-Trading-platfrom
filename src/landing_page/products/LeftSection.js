import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDesription,
    tryDemo, 
    learnMore,
    googlePlay,
    appStore
    }) {
    return ( 
        <dev className="container mt-5">
            <div className='row p-5'>
                <div className='col-4 p-5'>
                    <img src={imageURL}/>
                </div>
                <div className='col-3'></div>
                <div className='col-5 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} style={{marginLeft:"120px", textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}>
                        <img src='media\images\googlePlayBadge.svg' />
                        </a>
                    <a href={appStore} style={{marginLeft:"50px"}}>
                        <img src='media\images\appstoreBadge.svg'/>
                        </a>
                    </div>
                </div>
            </div>
        </dev>
     );
}

export default LeftSection;