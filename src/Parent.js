import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor,setChildrenColor]=useState("#FFF")
  function handleNewColor(){
    const randomColor2=getRandomColor()
    setColor(randomColor2)
  }
  function handleChildColor(newChildColor){
    const newRandomColor=getRandomColor()
    setColor(newRandomColor)
    setChildrenColor(newChildColor)
  }
  function Child({ onChangeColor, color }) {
    function handleClick() {
      const newColor = getRandomColor();
      onChangeColor(newColor);
    }
  
    return (
      <div
        onClick={handleClick}
        className="child"
        style={{ backgroundColor: color }}
      />
    );
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleNewColor} color={handleChildColor}/>
      <Child  onChangeColor={handleNewColor} color={handleChildColor}/>
    </div>
  );
}

export default Parent;
