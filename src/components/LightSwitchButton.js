import React from 'react'; //optional

function LightSwitchButton(props){
  const {light, switchLight} = props;
  // const handleClick = () => switchLight();
  
  return (
    <button className="LightSwitchButton" onClick={switchLight}>
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>

  );
}

export default LightSwitchButton;