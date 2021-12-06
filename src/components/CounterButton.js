import React, { useState } from 'react'; //optional

function CounterButton(props){
  const [clickAmount, setClickAmount] = useState();

  return (
    <button className="CounterButton">
      You clicked me X amount of times
    </button>

  );
}

export default CounterButton;