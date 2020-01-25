import React from 'react';
import styled from 'styled-components';


const Cen = styled.div`
flex:1;
height:100%;
width:100%;
display:flex;
flex-diirection:column;
padding-top:50px;


`;


const Row = styled.div`
flex:1;
display:flex;
justify-content:space-between;


@media screen and (max-width:500px){
 flex-direction:column;   
}


`;


const Card = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:50px 100px;


@media screen and (max-width:500px){
    width:100%;   
    padding:0px;
}

`;

const Img = styled.img`
border:solid;
width:100%;
height:25vw;
border-radius:20px;



@media screen and (max-width:500px){
    height:350px;
}


`;


const Sec = styled.section`
display:flex;
flex-direction:column;
padding:10px;
justify-content:center;
align-items:center;


`;

const BtnBlock = styled.div`
flex:1;
display:flex;
justify-content:space-between;

`;

const Titlez = styled.h1`
font-size:3rem;
font-weight:bolder;
text-decoration:underline;

`;

const Par = styled.p`
font-size:2rem;
font-weight:bolder;
padding:0% 10%;
`;

const Sub = styled.button`
border:double green;
width:200px;
height:100px;
font-weight:bolder;
box-shadow:0 0 10px #000;
margin:0% 30px;
font-size:2.5rem;
cursor:pointer;
border-radius:30px;
font-family:oblique;
color:green;
background-color:rgba(0,22,12,.7);
-webkit-text-stroke:1px #000;
text-shadow:0 0 10px azure;


@media screen and (max-width:500px){
    margin:0% 1%;
    width:100%;
    flex:1;
    font-size:2rem;
}



`;

const Quit = styled.button`
border:double red;
width:200px;
height:100px;
font-weight:bolder;
box-shadow:0 0 10px #000;
margin:0% 30px;
font-size:2.5rem;
cursor:pointer;
border-radius:30px;
font-family:oblique;
color:red;
background-color:rgba(0,22,12,.7);
-webkit-text-stroke:1px #000;
text-shadow:0 0 10px azure;


@media screen and (max-width:500px){
    margin:0% 1%;
    flex:1;
    width:175px;
font-size:2rem;
    
   }


  
`;

const Inp = styled.input`
        height:100px;
        width:100%;
        font-size:2rem;
        border-radius:10px;
        border:double;
`;


function Secure(e){
const key = e.which
               
          if((key>64) && (key<91 || key===8 || key===16)){
                return true;
            }else{
                e.preventDefault()
            }
}




let eq ;
const answer = (answer) =>{

    let inp = answer.target.parentNode.parentNode.children[1]
    let key_ = answer.target.parentNode.parentNode.parentNode.children[0].src.slice(-7,-4); 


console.log(typeof inp.value);


if(inp.value){
        switch(key_){

//===============================================================           
            case 'wtt':

 eq = new RegExp(/WhipTail/i)
        if(inp.value.match(eq) || inp.value.match(/lizard/i)){

            //answer correct
            let par = answer.target.parentNode.parentNode.children[2]
            answer.target.parentNode.parentNode.children[1].style.display="none"


            answer.target.parentNode.parentNode.children[0].style.display="none"
        if(par.getAttribute("data")==="hidden"){
            par.innerHTML=`
            <hr />
            <h1><span role="img">&#129497;</span>Great Job!<span role="img">&#129497;</span></h1>
            <em> To be exact this is a " WhipTail Lizard " </em>
            <hr />
            `
            //answer correct
        }
            
        }else{
            console.log('wrong answer');
            
        }    
            break;

//===============================================================        
//===============================================================        


            case 'gan':

                eq = new RegExp(/Greenanole/i)
                if(inp.value.match(eq) || inp.value.match(/lizard/i)){
                
                    //answer correct
            let par = answer.target.parentNode.parentNode.children[2]
            answer.target.parentNode.parentNode.children[1].style.display="none"


            answer.target.parentNode.parentNode.children[0].style.display="none"
        if(par.getAttribute("data")==="hidden"){
            par.innerHTML=`
            <hr />
            <h1><span role="img">&#129497;</span>Great Job!<span role="img">&#129497;</span></h1>
            <em> To be exact this is a " Green anole Lizard " </em>
            <hr />
            `
            //answer correct

        }
            
                    
                }else{
                    console.log('wrong answer');
                    
                }    
                break;
//===============================================================        
//===============================================================        


            case 'son':

                eq = new RegExp(/Hedgehog/i)
                if(inp.value.match(eq) || inp.value.match(/Erinaceidae/i)){
                    
                        //answer correct
            let par = answer.target.parentNode.parentNode.children[2]
            answer.target.parentNode.parentNode.children[1].style.display="none"


            answer.target.parentNode.parentNode.children[0].style.display="none"
        if(par.getAttribute("data")==="hidden"){
            par.innerHTML=`
            <hr />
            <h1><span role="img">&#129497;</span>Great Job!<span role="img">&#129497;</span></h1>
            <em> Correct the Hedgehog is " Erinaceidae " type of mammal </em>
            <hr />
            `
            //answer correct

        }
                    
                }else{
                    console.log('wrong answer');
                    
                }    
                break;

            
//===============================================================        
//===============================================================        



case 'owl':

    eq = new RegExp(/Snowyowl/i)
    if(inp.value.match(eq) || inp.value.match(/owl/i)){
        
            //answer correct
let par = answer.target.parentNode.parentNode.children[2]
answer.target.parentNode.parentNode.children[1].style.display="none"


answer.target.parentNode.parentNode.children[0].style.display="none"
if(par.getAttribute("data")==="hidden"){
par.innerHTML=`
<hr />
<h1><span role="img">&#129497;</span>Great Job!<span role="img">&#129497;</span></h1>
<em> Right! This is a Snowy owl.</em>
<hr />
`
//answer correct

}
        
    }else{
        console.log('wrong answer');
        
    }    
    break;


//===============================================================        
//===============================================================        


case 'lep':

    eq = new RegExp(/leapard/i)
    if(inp.value.match(eq) || inp.value.match(/whiteleapard/i)){
        
            //answer correct
let par = answer.target.parentNode.parentNode.children[2]
answer.target.parentNode.parentNode.children[1].style.display="none"


answer.target.parentNode.parentNode.children[0].style.display="none"
if(par.getAttribute("data")==="hidden"){
par.innerHTML=`
<hr />
<h1><span role="img">&#129497;</span>Great Job!<span role="img">&#129497;</span></h1>
<em> Right! This is a White Leapard.</em>
<hr />
`
//answer correct

}
        
    }else{
        console.log('wrong answer');
        
    }    
    break;

//===============================================================        
//===============================================================        


case 'bad':

    eq = new RegExp(/badger/i)
    if(inp.value.match(eq) || inp.value.match(/Europeanbadger/i)){
        
            //answer correct
let par = answer.target.parentNode.parentNode.children[2]
answer.target.parentNode.parentNode.children[1].style.display="none"


answer.target.parentNode.parentNode.children[0].style.display="none"
if(par.getAttribute("data")==="hidden"){
par.innerHTML=`
<hr />
<h1><span role="img">&#129497;</span>Great Job!<span role="img">&#129497;</span></h1>
<em> Exactly! Its a European badger to exact.</em>
<hr />
`
//answer correct

}
        
    }else{
        console.log('wrong answer');
        
    }    
    break;

//===============================================================        
//===============================================================        
                

//===============================================================        
//===============================================================        



//===============================================================        
//===============================================================        
//===============================================================        

                default:
                console.log('Not An Answer');
                
        }
    }
    
}


function GiveUp(it){
        let paragraph = it.target.parentNode.parentNode.children[2]
        it.target.parentNode.parentNode.children[1].style.display="none"


        it.target.parentNode.parentNode.children[0].style.display="none"
        if(paragraph.getAttribute("data")==="hidden" && paragraph.innerHTML.match(/Guess/i)){
            paragraph.innerHTML=`
            <hr />
            <h1><span role="img">&#128555;</span>I Gave UP!</h1>
            <hr />
            `
            
        }
        
}

function FigBlock(){

    return(
        <Sec className="sec">
        <Titlez><span>Who Am I?</span></Titlez>
             <Inp type="text"
              className="answerSec" 
              placeholder="Type you answer here.."
              onKeyDown={Secure}
              required/>
             <Par data="hidden">Guess the unique name or name of the animal or mammal, if 
             you cant then click "pass"......{
                  }
             </Par>
    <BtnBlock>
        <Sub onClick={answer} className="subBtn">Submit</Sub>
            <Quit onClick={GiveUp} className="quiteBtn">Pass?</Quit>
    </BtnBlock>
        </Sec>
    )
}


export default function Center(props){


return (
    <Cen>
        <Row className="row">
            <Card className="cardd">
                <Img src={props.src1} className="imy" />
                <FigBlock />
            </Card>

            <Card className="cardd">
                <Img src={props.src2} className="imy" />
                <FigBlock />
            </Card>
            <Card className="cardd">
                <Img src={props.src3} className="imy" />
                <FigBlock />
            </Card>
        </Row>
        
        
        
         </Cen>
)



}