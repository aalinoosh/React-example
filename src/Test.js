
import './App.css';
import {useRef} from 'react'


function Test() {

  const inputEl = useRef();

  const onClick = () => {
      console.log("Background",inputEl.current.style.backgroundColor);
      if(inputEl.current.style.backgroundColor === "red"){
        inputEl.current.style.backgroundColor = "blue";

      }else{
        inputEl.current.style.backgroundColor = "red";
        
      }
     
  };
 
  

  return (
    <div style={{ textAlign:'center', height:'600px'}}>

      <div ref={inputEl}  style={{ width: "300px", height: "300px", backgroundColor:"red"}} >Hey  </div> 
      <button onClick={onClick}>Change color of box</button>
      <h1>Content</h1>
     
    </div>
  );
}






export default Test;
