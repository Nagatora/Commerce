import React from "react";
import Card from '../components/Card';
import Array from '../util/Array'

// PROMISES ASYNC //

let is_ok = true;

let fetchArray = (timeout, task) => {
    return new Promise((resolve, reject) => {
        if (is_ok){
            setTimeout(() => {
                resolve(task)
            }, timeout);            
        } else {
            reject("error")
        }
    });
};



//PROMISES ASYNC//

const CardsList = () => {
    return (
        <div className="cards-list container row">     
        {
            Array.map(item =>
                <Card   
                key  ={item.title}
                title={item.title}
                text ={item.text}
                thumbnail ={item.thumbnail}/>)
        }
        </div>
    )
}

const Itemlistcontainer = () =>{     
    fetchArray(4000, CardsList());
};


export default CardsList;