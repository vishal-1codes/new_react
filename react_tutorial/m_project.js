import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';

ReactDOM.render(
    <>
    <h1 className="heading_style"> List Of top 5 Netflix Series</h1>
    <Card imgsrc="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/23/903342-netflix-dark.jpg"
     title="A Netflix Orignal Series"
     sname="DARK"
     link="https://www.netflix.com/in/title/80100172"
    />
    <hr/>
    <Card
    imgsrc="https://6.vikiplatform.com/image/5d49d68cf70644c7bb0c7a1ea8f25ff7.jpg?x=b&a=0x0&s=960x540&e=t&q=g"
    title="A Netflix Orignal Series"
    sname="Extraordinary You"
    link ="https://www.netflix.com/in/title/81234382#:~:text=A%20teen%20seeks%20to%20change,in%20a%20made%2Dup%20world."
    />
    <hr/>
    <Card 
    imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQqlc1cJP19ZnSwKGCTCKVLShwmA5LPS9Xw&usqp=CAU"
    title="A Netflix Original Series"
    sname="The Last Kingdom"
    link="https://www.netflix.com/in/title/80074249#:~:text=As%20Alfred%20the%20Great%20defends,to%20claim%20his%20ancestral%20birthright.&text=Watch%20all%20you%20want."
    />
    </>
,document.getElementById('root')
);

/* 
if you use card in multiple time so 
given sequence same as one by one (if not given sequence one by one you given error)
if you have to add some custome data in your tag so we use props.
like imgsrc ,title ,sname ,link .
mmm
*/

index.js

import React from 'react';
import './index.css';
function Card(props){
    console.log(props);
    return(
        <>
    <div className="cards">
     <div className="card">
      <img src={props.imgsrc} alt="myPic" className=""/>
      <div className="card_info">
        <span className="card_category">{props.title}</span>
        <h3 className="card_title">{props.sname}</h3>
        <a href={props.link} target="_black">
            <button>Watch Now</button>
        </a>
      </div>
     </div>
    </div>
    </>
    )
}

export default Card;

cards.js

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: lightgrey;
}

.heading_style{
  padding: 30px 0;
  text-align: center;
  font-family: "Raleway" , sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
  background-color: white;
  margin-bottom: 30px;
}

.cards{
  width:100%;
  height: auto;
}

.card{ 
  margin: 6%;
  transition: all 0.4s cubic-bezier(0.175,0.885,0,1);
  background-color: #fff;
  width: 21.25%;
  border-radius: 12px;
  box-shadow: 0px 13px 10px -7px rgba(0,0,0.1);
  float: left;
}

.card:hover{
  box-shadow: 0px 30px 18px -8px rgba(0,0,0.1);
  transition: scale(1.05,1.05);
}

.card_img{
  width:100%;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.card_info{
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
  background-color: #fff;
}

.card_category{
  font-family: "Raleway" , sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color:#868686;
  background-color: #fff;
}

.card_title{
  margin-top:5px;
  margin-bottom: 10px;
  font-family: "Raleway",sans-serif;
  background-color: #fff;
  text-transform: capitalize;
}

button{
  padding: 5px 8px;
  font-family: "Raleway",sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color:#868686;
  background-color: #fff;
  outline: none;
  border:1px solid black;
  cursor: pointer;
}






index.css
