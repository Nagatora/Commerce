import React, { useState } from 'react';

function Card (props){
    //let itemamount = 0;
    const [itemamount, setRates] = useState(0);

    const plusOne = () => {
       // itemamount +=1;
       setRates(itemamount + 1);
       //console.log(itemamount)
    };

    const minusOne = () => {
        setRates(itemamount - 1);
    };

    return(
            <div className="card container" style={{'width': '15rem'}}>
            <img src={props.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <button onClick={minusOne} className='btn btn-danger'>-</button>
                    {itemamount}
                    <button onClick={plusOne} className='btn btn-success'>+</button>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                    
                </div>
            </div>

        )
}

export default Card;