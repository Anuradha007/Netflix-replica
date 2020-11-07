import  React from 'react';

function Cards(props){
    return(
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="myPic" className="card_img"/>
                      <div className="card_info">
                         <span className = "card_category">{props.sname}</span>
                            <h1 className = "card_title"> {props.title} </h1>
                               <a href = {props.link} target = "_blank">
                                  <button> Watch Now </button>
                               </a>
                        </div>
                  </div>
            </div>
        </>
    );
}

export default Cards;
