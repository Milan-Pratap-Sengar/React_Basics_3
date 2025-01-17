import { useState } from "react";

function Card({id,name,info,image,price,removeTourCard}){
    const[readMore,setreadMore]=useState(false)
    function readMoreHandler(){
        setreadMore(!readMore)
    }
    
    const description= readMore ? info :`${info.substring(0,201)}....`
    return(
        <div className="card">
            <img className="image" src={image}></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}> {readMore? `Show Less` : `Read More`} </span>
                </div>
            </div>

            <button className="btn-red" onClick={()=>{removeTourCard(id)}}>Not Interested</button>
        </div>
    )
}
export default Card;