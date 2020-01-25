import React from 'react';
import styled from 'styled-components';


const Headz = styled.div`
flex:1;
Height:100px;
padding:10px 5px;
transition:1s ease-in-out;
background-color:#000;
display:flex;
justify-content:flex-start;
align-items:center;



@media screen and (max-width:500px){
        
       }
`;

const Imgg = styled.img`
width:100px;
height:100%;
border-radius:100%;
box-shadow:0 0 20px azure;
margin-right:50px;

@media screen and (max-width:500px){
    width:90px;
    height:100%;
    margin-right:10px;

}

`;

const BrandName = styled.h1`
color:azure;
text-decoration:underline;


@media screen and (max-width:500px){
font-size:1rem;
    
   }


   @media screen and (max-width:900px) and
   (max-height:500px) and (min-width:501px){
       font-size:2rem;
   }
`;


const Time = styled.span`
position:absolute;
right:10px;
padding:10px 15px;
color:azure;
float:right;
font-size:2rem;
font-weight:bolder;
text-shadow:0 0 5px azure;
cursor:pointer;


@media screen and (max-width:500px){
    font-size:2rem;
        
       }

      
`;


//START OF CLOCK CLASS
class Clock{//clock class to request full time 
    constructor(year,month,day,date,pod,hour,min,fullDate){
    //full time constructor funciton
    this.fullDate = new Date()
    //get year
    this.year=()=>{return this.fullDate.getFullYear()}
    //get month an convert to english name
    this.month=()=>{
    var a = this.fullDate.getMonth()
    switch(a){
    case 0:return 'Jan';case 1:return 'Feb';case 2:return 'March';
    case 3:return 'April';case 4:return 'May';case 5:return 'June';
    case 6:return 'July';case 7:return 'Aug';case 8:return 'Sep';
    case 9:return 'Oct';case 10:return 'Nov';case 11:return 'Dec';
    default:return null;
    }
    }
    //get day an convert to english name
    this.day=()=>{
    var a = this.fullDate.getDay()
    switch(a){
    case 0:return 'Sun';case 1:return 'Mon';case 2:return 'Tue';
    case 3:return 'Wed';case 4:return 'Thu';case 5:return 'Fri';
    case 6:return 'Sat';default:return null;
    }
    }
    //get date number of the day for current month
    this.date=()=>{return this.fullDate.getDate()}
    //get hour and covert to standard non military time
    this.hour=()=>{
    if(this.fullDate.getHours() % 12===0) 
    return 12
    else
    return this.fullDate.getHours() % 12
    }
    //get minutes and convert to double digit display
    this.min=()=>{
    var a = this.fullDate.getMinutes()
    if(JSON.stringify(a).length<2){
    return '0'+a
    }else{
    return a
    }
    }
    //end of constructor
    
    }
    //get the part of day due to the live current time
    pod=()=>{
    var a = this.fullDate.getHours()
    if(a>0 && a<=11 ){
    return 'am'
    }else if(a>=12 && a<=23){
    return 'pm'
    }else{
    return 'am'
    }
    }
    
    //END OF CLOCK CLASS
    }
    
const ShowTime = new Clock()
function DisplayWatch(e){
    e.target.innerHTML = localStorage.getItem("watch")
}

function DisplayTime(e){
     
    localStorage.setItem("watch", e.target.innerHTML)
    e.target.innerHTML = `${ShowTime.hour()}:${ShowTime.min()}${ShowTime.pod()}`
    e.target.setAttribute("onclick",DisplayWatch)
}


 export default  function Header(props){

        return(
            
            <Headz>
                    <Imgg src={props.src}/>
                <BrandName>Animals & Mammals</BrandName>
        <Time onClick={DisplayTime} ><span role="img">&#8986;</span></Time>

            </Headz>
        )
    }


