import React, { useState } from 'react'; //optional

function CounterButton(props){
  const [clickAmount, setClickAmount] = useState(0);

  return (
    <button className="CounterButton">
      You clicked me {clickAmount} times
    </button>

  );
}

export default CounterButton;