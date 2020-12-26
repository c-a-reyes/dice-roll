import React, {useState} from 'react';

function App() {
  const [dice, setDice] = useState(null);
  

  const side1 = "https://static.thenounproject.com/png/2502952-200.png"; 


    const side2 = "https://static.thenounproject.com/png/2502955-200.png";
    const side3 = "https://static.thenounproject.com/png/2502954-200.png";
    const side4 = "https://static.thenounproject.com/png/2502953-200.png";  
    const side5 = "https://static.thenounproject.com/png/2502956-200.png";
    const side6 = "https://static.thenounproject.com/png/2502960-200.png";

    const images = [side1, side2, side3, side4, side5, side6];

    const rollDie = () => {
      const roll = (Math.floor(6 * Math.random()) + 1);
      setDice(roll);
    }

  return (
    <div style={{ textAlign: 'center' }}>
      
      
      <button onClick={() => setDice(rollDie)}> Roll the die! </button>
      {dice && <h2>{dice} </h2>} 
      {dice && <img height = "150 px" width = "150 px" src = {images[dice - 1]} alt = ""></img>}
      
    </div>
  );
} // putting {} around the returning statements is shorthand way of writing out function for conditional rendering

export default App;

