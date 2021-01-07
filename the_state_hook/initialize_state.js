import React, { useState } from 'react';
const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];
//if you have one color on bgcoolor then set value in useSate('..')
export default function ColorPicker() {
  const [color, setColor] = useState("Tomato");
 const divStyle = {backgroundColor: color};
  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}

