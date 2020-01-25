import React from 'react';
import './App.css';
import Header from './header';
import Center from './center';



function App() {
  return (
    <div>
 <Header src="goat.jpg"/>

  <Center 
  src1="owl.jpg" 
  src2="gan.jpg" 
  src3="bad.jpg" 
  />

  <Center 
  src1="wtt.jpg" 
  src2="lep.jpg"
  src3="son.jpg"
  
  />
    </div>
 

  );
}

export default App;
