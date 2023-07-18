import { useState } from 'react';
import './App.css';

function App() {

  const [output, setOutput] = useState('');

  const [input, setInput] =useState("0");



const handleNumbers = (event) => {

let array = output.split(" ");
let lastItem = array[array.length -1]
  

  
  if(input == '0' || output.includes("=")){

    return setOutput(event.target.textContent),
            setInput(event.target.textContent);

  
  }else if(input == '+' || input == '-' || input == '/' || input == '*' || input =='%'){

    return setOutput(output + event.target.textContent),
            setInput(event.target.textContent);

  }else {

    return setOutput(output + event.target.textContent),
    setInput(input + event.target.textContent);
  }

    
 

};


const handleDel = () =>{

    
  let newoutput = output.substring(0, output.length-1);
  let newInput = input.substring(0, input.length-1);

  let spliceOutput = output.slice(0 , -3);

  
  if(input.length < 1.5){

    return setInput('0'),
          setOutput(newoutput)

  }else if(output[output.length-1] == " "){

    return setOutput(spliceOutput),
          setInput(input);
      
  }else if(output.includes("=")){


    return setInput(newInput),
            setOutput(newInput)
}
  
  else {

    return setOutput(newoutput),
        setInput(newInput)
  }
  

}


console.log(typeof input)

const handleOperators = (event) => {

  

  if(output.includes("=")){

    return setOutput(input + " " + event.target.textContent + " "),
          setInput(event.target.textContent)
  }else{

    return setOutput(output + " " + event.target.textContent + " "),
    setInput(event.target.textContent)
  }
    
  

};




const handleEqual = (event) => {

   var filtered= output.match(/(\s\*\s|\s\+\s|\s\%\s|\s\/\s|\s-\s)?(\.|\s\-\s)?\d+/g).join("");
   let result = eval(filtered);

      return setOutput(output + " " + event.target.textContent + " " + result),
              setInput(`${result}`)
  
}



const handleDecimal = (event) => {

 let array = output.split(" ")
  let lastItem = array[array.length-1]

  if(lastItem.includes(".")){

  return null;

}else if(!lastItem.length){

  return setInput(input + "."),
        setOutput(output + "0.")

}else{


  return setOutput(output + event.target.textContent),
          setInput(input+ event.target.textContent)

}
}

const handleClear =() =>{

  return setInput("0") ,
          setOutput("")
}







  return(
    <div className='App'>

      <h1>React Calculator</h1>
      <div className='calculator'>

        <div id='screen'>

        <div className='output'>{output}</div>
        <div className='input' id='display'>{input}</div>
        </div>
        
<div id='container'>
<div id='left'>
        <div id='clear' onClick={handleClear}>AC</div>
        <div id='delete' onClick={handleDel}>DEL</div>
       <div onClick={handleOperators}>%</div>
        <div id="nine" onClick={handleNumbers}>9</div>
        <div id="eight" onClick={handleNumbers}>8</div>
        <div id="seven" onClick={handleNumbers}>7</div>
        <div id="six" onClick={handleNumbers}>6</div>
        <div id="five" onClick={handleNumbers}>5</div>
        <div id="four" onClick={handleNumbers}>4</div>
        <div id="three" onClick={handleNumbers}>3</div>
        <div id="two" onClick={handleNumbers}>2</div>
        <div id="one" onClick={handleNumbers}>1</div>
        <div id="decimal" onClick={handleDecimal}>.</div>
        <div id='nothing'>C</div>
        <div id='zero' onClick={handleNumbers}>0</div>

</div>
       
  <div id='right'>
    <div id="subtract" onClick={handleOperators}>-</div>
  <div id="add" onClick={handleOperators}>+</div>
  <div id="divide" onClick={handleOperators}>/</div>
  
  <div id="multiply"onClick={handleOperators}>*</div>
  <div id="equals" onClick={handleEqual}>=</div>
  </div>
  
</div>
</div>

    <div id='author'>

      <p>Developed and Codded By <span>Brian Ondego</span></p>

    </div>

</div>


  )
}

export default App;
