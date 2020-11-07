import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';
import './index.css';


ReactDOM.render(
    <>
         <h1 className="heading_style"> List of top 10 Netflix Series in 2020 </h1>
         {Sdata.map((val) => {
             return(
                 <Cards imgsrc={val.imgsrc}
                 title={val.title}
                 sname={val.sname}
                 link={val.link}/>
             );
         })};
    </>
    , document.getElementById("root"));



// var h1 = document.createElement("h1");
// h1.innerHTML = "Thapa Technical";
// document.getElementById("root").appendChild(h1);
